import { Injectable } from '@nestjs/common';
import { UnitLessonQuery } from '../prisma/queries/unit-lesson/unit-lesson.query';

@Injectable()
export class UnitLessonRepository {
    constructor(
        private readonly unitLessonQuery: UnitLessonQuery
    ) { }
}