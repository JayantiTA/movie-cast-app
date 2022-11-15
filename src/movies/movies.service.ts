import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async getMovies(): Promise<Movie[]> {
    return await this.moviesRepository.find({ relations: ['casts'] });
  }

  async getMovieById(id: number): Promise<Movie> {
    return await this.moviesRepository.findOneBy({ id });
  }

  async deleteMovie(id: number): Promise<void> {
    await this.moviesRepository.delete(id);
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = new Movie();
    movie.name = createMovieDto.name;
    movie.language = createMovieDto.language;
    movie.status = createMovieDto.status;
    movie.rating = createMovieDto.rating;
    return await this.moviesRepository.save(movie);
  }

  async updateMovie(
    id: number,
    updateteMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    let movie = await this.moviesRepository.findOneBy({ id });
    movie = { ...movie, ...updateteMovieDto };
    return await this.moviesRepository.save(movie);
  }
}
