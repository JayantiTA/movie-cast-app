import {
  IsString,
  IsDateString,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateCastDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsDateString()
  @IsNotEmpty()
  birthday: Date;

  @IsDateString()
  @IsOptional()
  deadday: Date;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNumber()
  @IsNotEmpty()
  movieId: number;
}
