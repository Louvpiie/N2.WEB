import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Produto } from './produto.entity';
import { User } from '../../auth/entities/user.entity';

@Entity()
@Unique(['produto', 'user'])
export class AvaliacaoProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto)
  @JoinColumn()
  produto: Produto;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ type: 'int' })
  nota: number;

  @Column({ nullable: true })
  comentario?: string;
}