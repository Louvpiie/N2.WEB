"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carrinho_entity_1 = require("./entities/carrinho.entity");
const carrinho_item_entity_1 = require("./entities/carrinho-item.entity");
const produto_entity_1 = require("./entities/produto.entity");
const compra_entity_1 = require("./entities/compra.entity");
const compra_item_entity_1 = require("./entities/compra-item.entity");
const endereco_entity_1 = require("./entities/endereco.entity");
const avaliacao_produto_entity_1 = require("./entities/avaliacao-produto.entity");
const avaliacao_compra_entity_1 = require("./entities/avaliacao-compra.entity");
let CompraService = class CompraService {
    carrinhoRepo;
    carrinhoItemRepo;
    produtoRepo;
    compraRepo;
    compraItemRepo;
    enderecoRepo;
    avaliacaoProdutoRepo;
    avaliacaoCompraRepo;
    listarProdutos() {
        throw new Error('Method not implemented.');
    }
    buscarPorNome(_nome) {
        throw new Error('Method not implemented.');
    }
    detalhesProduto(_id) {
        throw new Error('Method not implemented.');
    }
    criarProduto(_dto) {
        throw new Error('Method not implemented.');
    }
    constructor(carrinhoRepo, carrinhoItemRepo, produtoRepo, compraRepo, compraItemRepo, enderecoRepo, avaliacaoProdutoRepo, avaliacaoCompraRepo) {
        this.carrinhoRepo = carrinhoRepo;
        this.carrinhoItemRepo = carrinhoItemRepo;
        this.produtoRepo = produtoRepo;
        this.compraRepo = compraRepo;
        this.compraItemRepo = compraItemRepo;
        this.enderecoRepo = enderecoRepo;
        this.avaliacaoProdutoRepo = avaliacaoProdutoRepo;
        this.avaliacaoCompraRepo = avaliacaoCompraRepo;
    }
    async obterCarrinho(user) {
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
    async adicionarAoCarrinho(user, produtoId, quantidade) {
        const produto = await this.produtoRepo.findOneBy({ id: produtoId });
        if (!produto)
            throw new common_1.NotFoundException('Produto não encontrado');
        const carrinho = await this.obterCarrinho(user);
        let item = carrinho.itens.find(i => i.produto.id === produtoId);
        if (item) {
            item.quantidade += quantidade;
            await this.carrinhoItemRepo.save(item);
        }
        else {
            item = this.carrinhoItemRepo.create({ carrinho, produto, quantidade });
            await this.carrinhoItemRepo.save(item);
            carrinho.itens.push(item);
        }
        return this.obterCarrinho(user);
    }
    async removerDoCarrinho(user, produtoId) {
        const carrinho = await this.obterCarrinho(user);
        const item = carrinho.itens.find(i => i.produto.id === produtoId);
        if (!item)
            throw new common_1.NotFoundException('Item não encontrado no carrinho');
        await this.carrinhoItemRepo.remove(item);
        return this.obterCarrinho(user);
    }
    async criarEndereco(user, dados) {
        const endereco = this.enderecoRepo.create({ ...dados, user });
        return this.enderecoRepo.save(endereco);
    }
    async pagarCompra(user, enderecoId) {
        const carrinho = await this.obterCarrinho(user);
        if (!carrinho.itens.length)
            throw new common_1.ForbiddenException('Carrinho vazio');
        const endereco = await this.enderecoRepo.findOneBy({
            id: enderecoId,
            user: { id: user.id },
        });
        if (!endereco)
            throw new common_1.NotFoundException('Endereço não encontrado');
        const compra = this.compraRepo.create({
            user,
            endereco,
            status: compra_entity_1.StatusCompra.PENDENTE,
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
        compra.status = compra_entity_1.StatusCompra.PAGO;
        await this.compraRepo.save(compra);
        return compra;
    }
    async obterStatusCompras(user) {
        return this.compraRepo.find({
            where: { user: { id: user.id } },
            relations: ['itens', 'endereco'],
            order: { criadoEm: 'DESC' },
        });
    }
    async avaliarProduto(user, produtoId, nota, comentario) {
        const produto = await this.produtoRepo.findOneBy({ id: produtoId });
        if (!produto)
            throw new common_1.NotFoundException('Produto não encontrado');
        let avaliacao = await this.avaliacaoProdutoRepo.findOne({
            where: { produto: { id: produtoId }, user: { id: user.id } },
        });
        if (avaliacao) {
            avaliacao.nota = nota;
            avaliacao.comentario = comentario ?? '';
        }
        else {
            avaliacao = this.avaliacaoProdutoRepo.create({
                produto,
                user,
                nota,
                comentario: comentario ?? '',
            });
        }
        return this.avaliacaoProdutoRepo.save(avaliacao);
    }
    async avaliarCompra(user, compraId, nota, comentario) {
        const compra = await this.compraRepo.findOneBy({
            id: compraId,
            user: { id: user.id },
        });
        if (!compra)
            throw new common_1.NotFoundException('Compra não encontrada');
        let avaliacao = await this.avaliacaoCompraRepo.findOne({
            where: { compra: { id: compraId }, user: { id: user.id } },
        });
        if (avaliacao) {
            avaliacao.nota = nota;
            avaliacao.comentario = comentario ?? '';
        }
        else {
            avaliacao = this.avaliacaoCompraRepo.create({
                compra,
                user,
                nota,
                comentario: comentario ?? '',
            });
        }
        return this.avaliacaoCompraRepo.save(avaliacao);
    }
};
exports.CompraService = CompraService;
exports.CompraService = CompraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrinho_entity_1.Carrinho)),
    __param(1, (0, typeorm_1.InjectRepository)(carrinho_item_entity_1.CarrinhoItem)),
    __param(2, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __param(3, (0, typeorm_1.InjectRepository)(compra_entity_1.Compra)),
    __param(4, (0, typeorm_1.InjectRepository)(compra_item_entity_1.CompraItem)),
    __param(5, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __param(6, (0, typeorm_1.InjectRepository)(avaliacao_produto_entity_1.AvaliacaoProduto)),
    __param(7, (0, typeorm_1.InjectRepository)(avaliacao_compra_entity_1.AvaliacaoCompra)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CompraService);
//# sourceMappingURL=compra.service.js.map