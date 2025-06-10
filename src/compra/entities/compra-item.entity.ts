import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Compra } from './compra.entity';
import { Produto } from './produto.entity';

@Entity()
export class CompraItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Compra, compra => compra.itens)
  @JoinColumn()
  compra: Compra;

  @ManyToOne(() => Produto)
  @JoinColumn()
  produto: Produto;

  @Column()
  quantidade: number;
}