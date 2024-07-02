import { BadRequestException, Injectable } from '@nestjs/common';
import { PracticeQuery } from '../prisma/queries/practice/practice.query';
import { CreatePracticeDto, UpdatePracticeDto } from './dto/create-practice';
import { generateSlug } from '../helpers/helper';
import { Prisma } from '@prisma/client';

@Injectable()
export class PracticeRepository {
    constructor(
        private readonly practiceQuery: PracticeQuery
    ) { }

    async findPracticeByIdOrThrow(id: string) {
        const practice = await this.practiceQuery.findById(id);
        if (!practice) {
            throw new BadRequestException('Practice not found');
        }
        return practice;
    }

    async findPracticeBySlugOrThrow(slug: string) {
        const practice = await this.practiceQuery.findBySlug(slug);
        if (!practice) {
            throw new BadRequestException('Practice not found');
        }
        return practice;
    }

    async checkSlugExistAndThrow(slug: string) {
        const practice = await this.practiceQuery.findBySlug(slug);
        if (practice) {
            throw new BadRequestException('Slug already exist');
        }
        return
    }

    async findAllPractices() {
        return await this.practiceQuery.findAll();
    }

    async createPractice(dto: CreatePracticeDto) {
        const slug = generateSlug(dto.title);
        await this.checkSlugExistAndThrow(slug);
        return await this.practiceQuery.create({
            title: dto.title,
            slug: slug,
            lesson: {
                connect: {
                    id: dto.idLesson
                }
            },
            questions: JSON.parse(JSON.stringify(dto.questions)) as Prisma.JsonArray,
            signs: JSON.parse(JSON.stringify(dto.signs)) as Prisma.JsonArray
        })
    }

    async updatePractice(id: string, dto: UpdatePracticeDto) {
        const practice = await this.findPracticeByIdOrThrow(id);
        const slug = dto.title ? generateSlug(dto.title) : undefined;
        if (slug && slug !== practice.slug) {
            await this.checkSlugExistAndThrow(slug);
        }
        return await this.practiceQuery.updateById(id, {
            title: dto.title,
            slug: slug,
            ...(dto.idLesson ? { lesson: { connect: { id: dto.idLesson } } } : {}),
            questions: JSON.parse(JSON.stringify(dto.questions)) as Prisma.JsonArray,
            signs: JSON.parse(JSON.stringify(dto.signs)) as Prisma.JsonArray
        })
    }

    async deletePractice(id: string) {
        const practice = await this.findPracticeByIdOrThrow(id);
        return await this.practiceQuery.deleteById(practice.id);
    }
}