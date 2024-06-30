import { Injectable } from '@nestjs/common';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
    constructor(
        private readonly lessonRepository: LessonRepository
    ) { }
}