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
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {
    constructor(
        private readonly practiceService: PracticeService,
        private readonly httpHelper: HttpHelper,
    ) { }

}