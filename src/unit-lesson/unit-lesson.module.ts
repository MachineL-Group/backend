import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MomentModule } from '@ccmos/nestjs-moment';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { HelperModule } from '../helpers/helper.module';
import { UnitLessonService } from './unit-lesson.service';
import { UnitLessonRepository } from './unit-lesson.repository';
import { UnitLessonController } from './unit-lesson.controller';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({}),
        MomentModule,
        ConfigModule,
        HelperModule,
    ],
    providers: [UnitLessonService, UnitLessonRepository],
    controllers: [UnitLessonController],
    exports: [UnitLessonService, UnitLessonRepository],
})
export class UnitLessonModule { }