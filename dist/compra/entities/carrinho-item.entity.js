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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoItem = void 0;
const typeorm_1 = require("typeorm");
const carrinho_entity_1 = require("./carrinho.entity");
const produto_entity_1 = require("./produto.entity");
let CarrinhoItem = class CarrinhoItem {
    id;
    carrinho;
    produto;
    quantidade;
};
exports.CarrinhoItem = CarrinhoItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarrinhoItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrinho_entity_1.Carrinho, carrinho => carrinho.itens),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", carrinho_entity_1.Carrinho)
], CarrinhoItem.prototype, "carrinho", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_entity_1.Produto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", produto_entity_1.Produto)
], CarrinhoItem.prototype, "produto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CarrinhoItem.prototype, "quantidade", void 0);
exports.CarrinhoItem = CarrinhoItem = __decorate([
    (0, typeorm_1.Entity)()
], CarrinhoItem);
//# sourceMappingURL=carrinho-item.entity.js.map