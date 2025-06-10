/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CarrinhoItem } from './entities/carrinho-item.entity';
import { Produto } from './entities/produto.entity';
import { Compra, StatusCompra } from './entities/compra.entity';
import { CompraItem } from './entities/compra-item.entity';
import { Endereco } from './entities/endereco.entity';
import { AvaliacaoProduto } from './entities/avaliacao-produto.entity';
import { AvaliacaoCompra } from './entities/avaliacao-compra.entity';
import { User } from '../auth/entities/user.entity';
import { ProdutoDto } from './dto/produto.dto';

@Injectable()
export class CompraService {
  listarProdutos() {
    throw new Error('Method not implemented.');
  }
  buscarPorNome(_nome: string) {
    throw new Error('Method not implemented.');
  }
  detalhesProduto(_id: number) {
    throw new Error('Method not implemented.');
  }
  criarProduto(_dto: ProdutoDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Carrinho)
    private carrinhoRepo: Repository<Carrinho>,
    @InjectRepository(CarrinhoItem)
    private carrinhoItemRepo: Repository<CarrinhoItem>,
    @InjectRepository(Produto)
    private produtoRepo: Repository<Produto>,
    @InjectRepository(Compra)
    private compraRepo: Repository<Compra>,
    @InjectRepository(CompraItem)
    private compraItemRepo: Repository<CompraItem>,
    @InjectRepository(Endereco)
    private enderecoRepo: Repository<Endereco>,
    @InjectRepository(AvaliacaoProduto)
    private avaliacaoProdutoRepo: Repository<AvaliacaoProduto>,
    @InjectRepository(AvaliacaoCompra)
    private avaliacaoCompraRepo: Repository<AvaliacaoCompra>,
  ) {}

  async obterCarrinho(user: User) {
    let carrinho = await this.carrinhoRepo.findOne({
      where: { user: { id: user.id } },
      relations: ['itens', 'itens.produto'],
    });
    if (!carrinho) {
      carrinho = this.carrinhoRepo.create({ user, itens: [] });
      await this.carrinhoRepo.save(carrinho);
    }
    return carrinho;
  }

  async adicionarAoCarrinho(user: User, produtoId: number, quantidade: number) {
    const produto = await this.produtoRepo.findOneBy({ id: produtoId });
    if (!produto) throw new NotFoundException('Produto não encontrado');

    const carrinho = await this.obterCarrinho(user);
    let item = carrinho.itens.find(i => i.produto.id === produtoId);

    if (item) {
      item.quantidade += quantidade;
      await this.carrinhoItemRepo.save(item);
    } else {
      item = this.carrinhoItemRepo.create({ carrinho, produto, quantidade });
      await this.carrinhoItemRepo.save(item);
      carrinho.itens.push(item);
    }

    return this.obterCarrinho(user);
  }

  async removerDoCarrinho(user: User, produtoId: number) {
    const carrinho = await this.obterCarrinho(user);
    const item = carrinho.itens.find(i => i.produto.id === produtoId);
    if (!item) throw new NotFoundException('Item não encontrado no carrinho');
    await this.carrinhoItemRepo.remove(item);
    return this.obterCarrinho(user);
  }

  async criarEndereco(user: User, dados: Partial<Endereco>) {
    const endereco = this.enderecoRepo.create({ ...dados, user });
    return this.enderecoRepo.save(endereco);
  }

  async pagarCompra(user: User, enderecoId: number) {
    const carrinho = await this.obterCarrinho(user);
    if (!carrinho.itens.length) throw new ForbiddenException('Carrinho vazio');

    const endereco = await this.enderecoRepo.findOneBy({
      id: enderecoId,
      user: { id: user.id },
    });
    if (!endereco) throw new NotFoundException('Endereço não encontrado');

    const compra = this.compraRepo.create({
      user,
      endereco,
      status: StatusCompra.PENDENTE,
      itens: [],
    });
    await this.compraRepo.save(compra);

    for (const item of carrinho.itens) {
      const compraItem = this.compraItemRepo.create({
        compra,
        produto: item.produto,
        quantidade: item.quantidade,
      });
      await this.compraItemRepo.save(compraItem);
      compra.itens.push(compraItem);
    }

    await this.carrinhoItemRepo.remove(carrinho.itens);

    compra.status = StatusCompra.PAGO;
    await this.compraRepo.save(compra);

    return compra;
  }

  async obterStatusCompras(user: User) {
    return this.compraRepo.find({
      where: { user: { id: user.id } },
      relations: ['itens', 'endereco'],
      order: { criadoEm: 'DESC' },
    });
  }

  async avaliarProduto(
    user: User,
    produtoId: number,
    nota: number,
    comentario?: string,
  ) {
    const produto = await this.produtoRepo.findOneBy({ id: produtoId });
    if (!produto) throw new NotFoundException('Produto não encontrado');

    let avaliacao = await this.avaliacaoProdutoRepo.findOne({
      where: { produto: { id: produtoId }, user: { id: user.id } },
    });

    if (avaliacao) {
      avaliacao.nota = nota;
      avaliacao.comentario = comentario ?? '';
    } else {
      avaliacao = this.avaliacaoProdutoRepo.create({
        produto,
        user,
        nota,
        comentario: comentario ?? '',
      });
    }

    return this.avaliacaoProdutoRepo.save(avaliacao);
  }

  async avaliarCompra(
    user: User,
    compraId: number,
    nota: number,
    comentario?: string,
  ) {
    const compra = await this.compraRepo.findOneBy({
      id: compraId,
      user: { id: user.id },
    });
    if (!compra) throw new NotFoundException('Compra não encontrada');

    let avaliacao = await this.avaliacaoCompraRepo.findOne({
      where: { compra: { id: compraId }, user: { id: user.id } },
    });

    if (avaliacao) {
      avaliacao.nota = nota;
      avaliacao.comentario = comentario ?? '';
    } else {
      avaliacao = this.avaliacaoCompraRepo.create({
        compra,
        user,
        nota,
        comentario: comentario ?? '',
      });
    }

    return this.avaliacaoCompraRepo.save(avaliacao);
  }
}