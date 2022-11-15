import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getMovies() {
    return await this.moviesService.getMovies();
  }

  @Get(':id')
  async getMovieById(@Param() params) {
    return await this.moviesService.getMovieById(params.id);
  }

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto) {
    return await this.moviesService.createMovie(createMovieDto);
  }

  @Put(':id')
  async updateMovie(@Param() params, @Body() updateMovieDto: UpdateMovieDto) {
    return await this.moviesService.updateMovie(params.id, updateMovieDto);
  }

  @Delete(':id')
  async deleteMovie(@Param() params) {
    return await this.moviesService.deleteMovie(params.id);
  }
}
