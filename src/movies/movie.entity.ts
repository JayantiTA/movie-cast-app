import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cast } from '../casts/cast.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  name: string;

  @Column('varchar', { length: 30, nullable: false })
  language: string;

  @Column('varchar', { length: 10, nullable: false })
  status: string;

  @Column('int', { nullable: false })
  rating: number;

  @OneToMany(() => Cast, (cast) => cast.movie)
  casts: Cast[];
}
