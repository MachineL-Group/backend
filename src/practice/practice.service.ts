import { Injectable } from '@nestjs/common';
import { PracticeRepository } from './practice.repository';

@Injectable()
export class PracticeService {
    constructor(
        private readonly practiceRepository: PracticeRepository
    ) { }
}