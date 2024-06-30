import { IsOptional, IsString, IsEmail } from 'class-validator';

class UpdateProfileDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    profilePic?: string;
}

export default UpdateProfileDto;
