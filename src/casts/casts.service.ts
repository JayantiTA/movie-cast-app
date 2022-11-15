import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCastDto } from './dto/create-cast.dto';
import { UpdateCastDto } from './dto/update-cast.dto';
import { Cast } from './cast.entity';

@Injectable()
export class CastsService {
  constructor(
    @InjectRepository(Cast)
    private castsRepository: Repository<Cast>,
  ) {}

  async getCasts(): Promise<Cast[]> {
    return await this.castsRepository.find({ relations: ['movie'] });
  }

  async getCastById(id: number): Promise<Cast> {
    return await this.castsRepository.findOneBy({ id });
  }

  async deleteCast(id: number): Promise<void> {
    await this.castsRepository.delete(id);
  }

  async createCast(createCastDto: CreateCastDto): Promise<Cast> {
    const cast = new Cast();
    cast.name = createCastDto.name;
    cast.birthday = createCastDto.birthday;
    cast.deadday = createCastDto.deadday;
    cast.rating = createCastDto.rating;
    cast.movieId = createCastDto.movieId;
    return await this.castsRepository.save(cast);
  }

  async updateCast(id: number, updateteCastDto: UpdateCastDto): Promise<Cast> {
    let cast = await this.castsRepository.findOneBy({ id });
    cast = { ...cast, ...updateteCastDto };
    return await this.castsRepository.save(cast);
  }
}
