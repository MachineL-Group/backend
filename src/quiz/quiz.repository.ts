import { Injectable } from '@nestjs/common';
import { QuizQuery } from '../prisma/queries/quiz/quiz.query';

@Injectable()
export class QuizRepository {
    constructor(
        private readonly quizQuery: QuizQuery
    ) { }
}