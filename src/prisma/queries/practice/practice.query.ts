import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PracticeQuery extends DbService {
    async findAll() {
        return await this.prisma.practice.findMany();
    }

    async findById(id: string) {
        return await this.prisma.practice.findUnique({
            where: {
                id
            }
        })
    }

    async create(dto: Prisma.PracticeCreateInput) {
        return await this.prisma.practice.create({
            data: dto
        })
    }

    async updateById(id: string, dto: Prisma.PracticeUpdateInput) {
        return await this.prisma.practice.update({
            where: {
                id
            },
            data: dto
        })
    }

    async deleteById(id: string) {
        return await this.prisma.practice.delete({
            where: {
                id
            }
        })
    }
}