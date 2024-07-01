import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class QuizQuery extends DbService {
    async findAll() {
        return await this.prisma.quiz.findMany();
    }

    async findById(id: string) {
        return await this.prisma.quiz.findUnique({
            where: {
                id
            }
        })
    }

    async create(dto: Prisma.QuizCreateInput) {
        return await this.prisma.quiz.create({
            data: dto
        })
    }

    async updateById(id: string, dto: Prisma.QuizUpdateInput) {
        return await this.prisma.quiz.update({
            where: {
                id
            },
            data: dto
        })
    }

    async deleteById(id: string) {
        return await this.prisma.quiz.delete({
            where: {
                id
            }
        })
    }
}