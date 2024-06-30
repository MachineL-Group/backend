import { Injectable } from '@nestjs/common';
import { PracticeQuery } from '../prisma/queries/practice/practice.query';

@Injectable()
export class PracticeRepository {
    constructor(
        private readonly practiceQuery: PracticeQuery
    ) { }
}