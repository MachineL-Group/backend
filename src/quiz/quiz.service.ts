import { Injectable } from '@nestjs/common';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto, UpdateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
    constructor(
        private readonly quizRepository: QuizRepository
    ) { }

    async findQuizById(id: string) {
        return this.quizRepository.findQuizByIdOrThrow(id);
    }

    async findQuizBySlug(slug: string) {
        return this.quizRepository.findQuizBySlugOrThrow(slug);
    }

    async findAllQuizs() {
        return this.quizRepository.findAllQuizs();
    }

    async createQuiz(dto: CreateQuizDto) {
        return this.quizRepository.createQuiz(dto);
    }

    async updateQuiz(id: string, dto: UpdateQuizDto) {
        return this.quizRepository.updateQuiz(id, dto);
    }

    async deleteQuiz(id: string) {
        return this.quizRepository.deleteQuiz(id);
    }
}