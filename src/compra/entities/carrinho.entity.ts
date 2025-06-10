import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { CarrinhoItem } from './carrinho-item.entity';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;

  @OneToMany(() => CarrinhoItem, item => item.carrinho, { cascade: true })
  itens: CarrinhoItem[];
}