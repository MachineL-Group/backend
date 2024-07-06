import { BadRequestException, Injectable } from '@nestjs/common';
import { QuizQuery } from '../prisma/queries/quiz/quiz.query';
import { CreateQuizDto, UpdateQuizDto } from './dto/create-quiz.dto';
import { generateBackgroundClass, generateSlug } from '../helpers/helper';
import { Prisma } from '@prisma/client';
import { LessonRepository } from '../lesson/lesson.repository';

@Injectable()
export class QuizRepository {
    constructor(
        private readonly quizQuery: QuizQuery,
        private readonly lessonRepository: LessonRepository
    ) { }

    async findQuizByIdOrThrow(id: string) {
        const quiz = await this.quizQuery.findById(id);
        if (!quiz) {
            throw new BadRequestException('Quiz not found');
        }
        return quiz;
    }

    async findQuizBySlugOrThrow(slug: string) {
        const quiz = await this.quizQuery.findBySlug(slug);
        if (!quiz) {
            throw new BadRequestException('Quiz not found');
        }
        return quiz;
    }

    async checkSlugExistAndThrow(slug: string) {
        const quiz = await this.quizQuery.findBySlug(slug);
        if (quiz) {
            throw new BadRequestException('Slug already exist');
        }
        return
    }

    async findAllQuizs() {
        return await this.quizQuery.findAll();
    }

    async createQuiz(dto: CreateQuizDto) {
        const slug = generateSlug(dto.title);
        await this.checkSlugExistAndThrow(slug);
        const lesson = await this.lessonRepository.findLessonBySlugOrThrow(dto.slugLesson)
        const backgroundClass = generateBackgroundClass();
        return await this.quizQuery.create({
            title: dto.title,
            slug: slug,
            lesson: {
                connect: {
                    id: lesson.id
                }
            },
            questions: JSON.parse(JSON.stringify(dto.questions)) as Prisma.JsonArray,
            signs: JSON.parse(JSON.stringify(dto.signs)) as Prisma.JsonArray,
            backgroundColor: backgroundClass.backgroundColor,
            backgroundImage: backgroundClass.backgroundImage
        })
    }

    async updateQuiz(id: string, dto: UpdateQuizDto) {
        const quiz = await this.findQuizByIdOrThrow(id);
        const slug = dto.title ? generateSlug(dto.title) : undefined;
        if (slug && slug !== quiz.slug) {
            await this.checkSlugExistAndThrow(slug);
        }
        if (dto.slugLesson) {
            var lesson = await this.lessonRepository.findLessonBySlugOrThrow(dto.slugLesson)
        }
        return await this.quizQuery.updateById(id, {
            title: dto.title,
            slug: slug,
            ...(lesson ? { lesson: { connect: { id: lesson.id } } } : {}),
            questions: JSON.parse(JSON.stringify(dto.questions)) as Prisma.JsonArray,
            signs: JSON.parse(JSON.stringify(dto.signs)) as Prisma.JsonArray
        })
    }

    async deleteQuiz(id: string) {
        const quiz = await this.findQuizByIdOrThrow(id);
        return await this.quizQuery.deleteById(quiz.id);
    }
}