import { Injectable } from '@nestjs/common';
import { UnitLessonRepository } from './unit-lesson.repository';

@Injectable()
export class UnitLessonService {
    constructor(
        private readonly unitLessonRepository: UnitLessonRepository
    ) { }
}