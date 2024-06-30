import {
    Body,
    Controller,
    Get,
    Put,
    HttpStatus,
    Param,
    Post,
    Res,
    Delete,
    Query,
    UseGuards,
    Headers,
} from '@nestjs/common';
import { HttpHelper } from '../helpers/http-helper';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(
        private readonly quizService: QuizService,
        private readonly httpHelper: HttpHelper,
    ) { }

}