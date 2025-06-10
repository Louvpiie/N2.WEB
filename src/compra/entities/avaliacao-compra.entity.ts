import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Compra } from './compra.entity';
import { User } from '../../auth/entities/user.entity';

@Entity()
@Unique(['compra', 'user'])
export class AvaliacaoCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Compra)
  @JoinColumn()
  compra: Compra;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ type: 'int' })
  nota: number;

  @Column({ nullable: true })
  comentario?: string;
}