import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  quote_id: number;

  @Column()
  quote: string;

  @Column()
  character: string;
}