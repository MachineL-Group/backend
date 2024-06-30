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
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
    constructor(
        private readonly lessonService: LessonService,
        private readonly httpHelper: HttpHelper,
    ) { }

}