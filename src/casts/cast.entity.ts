import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Movie } from '../movies/movie.entity';

@Entity()
export class Cast {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  name: string;

  @Column('date', { nullable: false })
  birthday: Date;

  @Column('date', { nullable: true })
  deadday: Date;

  @Column('int', { nullable: false })
  rating: number;

  @Column('bigint', { nullable: false })
  movieId: number;

  @ManyToOne(() => Movie, (movie) => movie.casts)
  @JoinColumn()
  movie: Movie;
}
