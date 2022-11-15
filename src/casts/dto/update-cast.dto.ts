import {
  IsString,
  IsDate,
  IsNumber,
  Min,
  Max,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class UpdateCastDto {
  @IsString()
  @MaxLength(100)
  @IsOptional()
  name: string;

  @IsDate()
  @IsOptional()
  birthday: Date;

  @IsDate()
  @IsOptional()
  deadday: Date;

  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating: number;

  @IsNumber()
  @IsOptional()
  movieId: number;
}
