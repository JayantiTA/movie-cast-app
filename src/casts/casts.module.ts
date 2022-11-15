import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from '../movies/movies.module';
import { CastsService } from './casts.service';
import { CastsController } from './casts.controller';
import { Cast } from './cast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cast]), MoviesModule],
  providers: [CastsService],
  controllers: [CastsController],
})
export class CastsModule {}
