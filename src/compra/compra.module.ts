// compra/compra.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraController } from './compra.controller';
import { CompraService } from './compra.service';
import { Produto } from './entities/produto.entity';
import { Carrinho } from './entities/carrinho.entity';
import { CarrinhoItem } from './entities/carrinho-item.entity';
import { Compra } from './entities/compra.entity';
import { CompraItem } from './entities/compra-item.entity';
import { Endereco } from './entities/endereco.entity';
import { AvaliacaoProduto } from './entities/avaliacao-produto.entity';
import { AvaliacaoCompra } from './entities/avaliacao-compra.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Produto,
      Carrinho,
      CarrinhoItem,
      Compra,
      CompraItem,
      Endereco,
      AvaliacaoProduto,
      AvaliacaoCompra,
    ]),
  ],
  controllers: [CompraController],
  providers: [CompraService],
})
export class CompraModule {}
