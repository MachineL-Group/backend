import { Injectable } from '@nestjs/common';
import { LessonQuery } from '../prisma/queries/lesson/lesson.query';

@Injectable()
export class LessonRepository {
    constructor(
        private readonly lessonQuery: LessonQuery
    ) { }
}