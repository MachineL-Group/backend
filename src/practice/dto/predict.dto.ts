import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreatePredictPracticeDto {
    @IsNotEmpty()
    @IsString()
    idPractice: string;

    @IsNotEmpty()
    @IsInt()
    numberPractice: number;
}

