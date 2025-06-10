import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { CompraItem } from './compra-item.entity';
import { Endereco } from './endereco.entity';

export enum StatusCompra {
  PENDENTE = 'PENDENTE',
  PAGO = 'PAGO',
  ENVIADO = 'ENVIADO',
  ENTREGUE = 'ENTREGUE',
}

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => CompraItem, item => item.compra, { cascade: true })
  itens: CompraItem[];

  @ManyToOne(() => Endereco, { nullable: true })
  @JoinColumn()
  endereco: Endereco;

  @Column({ type: 'text', enum: StatusCompra, default: StatusCompra.PENDENTE })
  status: StatusCompra;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;
}