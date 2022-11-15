import {
  IsString,
  IsNumber,
  Min,
  Max,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @MaxLength(100)
  @IsOptional()
  name: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  language: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  status: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating: number;
}
