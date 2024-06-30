import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class UnitLessonQuery extends DbService {

}