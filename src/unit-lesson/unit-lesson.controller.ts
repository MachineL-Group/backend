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
import { UnitLessonService } from './unit-lesson.service';

@Controller('unit-lesson')
export class UnitLessonController {
    constructor(
        private readonly unitLessonService: UnitLessonService,
        private readonly httpHelper: HttpHelper,
    ) { }

}