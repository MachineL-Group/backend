import { Injectable } from '@nestjs/common';
import { PracticeRepository } from './practice.repository';
import { CreatePracticeDto, UpdatePracticeDto } from './dto/create-practice';

@Injectable()
export class PracticeService {
    constructor(
        private readonly practiceRepository: PracticeRepository
    ) { }

    async findPracticeById(id: string) {
        return this.practiceRepository.findPracticeByIdOrThrow(id);
    }

    async findPracticeBySlug(slug: string) {
        return this.practiceRepository.findPracticeBySlugOrThrow(slug);
    }

    async findAllPractices() {
        return this.practiceRepository.findAllPractices();
    }

    async createPractice(dto: CreatePracticeDto) {
        return this.practiceRepository.createPractice(dto);
    }

    async updatePractice(id: string, dto: UpdatePracticeDto) {
        return this.practiceRepository.updatePractice(id, dto);
    }

    async deletePractice(id: string) {
        return this.practiceRepository.deletePractice(id);
    }
}