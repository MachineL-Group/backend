import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, ValidateNested } from 'class-validator';
import { IsObjectId } from '../../helpers/decorator/isValidObjectId.decorator';
export class CreatePracticeDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsObjectId()
    idLesson: string;

    @Type(() => Questions)
    @ValidateNested()
    @IsArray()
    @IsNotEmpty()
    questions: Questions[];

    @Type(() => Signs)
    @ValidateNested()
    @IsArray()
    @IsNotEmpty()
    signs: Signs[];
}



class Questions {
    @IsNotEmpty()
    @IsUrl()
    imageUrl: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    label: string;

    @IsNotEmpty()
    @IsNumber()
    point: number;
}

class Signs {
    @IsNotEmpty()
    @IsUrl()
    imageUrl: string;

    @IsNotEmpty()
    @IsString()
    label: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}

export class UpdatePracticeDto extends PartialType(CreatePracticeDto) { }