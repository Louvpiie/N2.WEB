"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const compra_controller_1 = require("./compra.controller");
const compra_service_1 = require("./compra.service");
const produto_entity_1 = require("./entities/produto.entity");
const carrinho_entity_1 = require("./entities/carrinho.entity");
const carrinho_item_entity_1 = require("./entities/carrinho-item.entity");
const compra_entity_1 = require("./entities/compra.entity");
const compra_item_entity_1 = require("./entities/compra-item.entity");
const endereco_entity_1 = require("./entities/endereco.entity");
const avaliacao_produto_entity_1 = require("./entities/avaliacao-produto.entity");
const avaliacao_compra_entity_1 = require("./entities/avaliacao-compra.entity");
let CompraModule = class CompraModule {
};
exports.CompraModule = CompraModule;
exports.CompraModule = CompraModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                produto_entity_1.Produto,
                carrinho_entity_1.Carrinho,
                carrinho_item_entity_1.CarrinhoItem,
                compra_entity_1.Compra,
                compra_item_entity_1.CompraItem,
                endereco_entity_1.Endereco,
                avaliacao_produto_entity_1.AvaliacaoProduto,
                avaliacao_compra_entity_1.AvaliacaoCompra,
            ]),
        ],
        controllers: [compra_controller_1.CompraController],
        providers: [compra_service_1.CompraService],
    })
], CompraModule);
//# sourceMappingURL=compra.module.js.map