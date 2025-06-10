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
exports.CompraItem = void 0;
const typeorm_1 = require("typeorm");
const compra_entity_1 = require("./compra.entity");
const produto_entity_1 = require("./produto.entity");
let CompraItem = class CompraItem {
    id;
    compra;
    produto;
    quantidade;
};
exports.CompraItem = CompraItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompraItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => compra_entity_1.Compra, compra => compra.itens),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", compra_entity_1.Compra)
], CompraItem.prototype, "compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_entity_1.Produto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", produto_entity_1.Produto)
], CompraItem.prototype, "produto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CompraItem.prototype, "quantidade", void 0);
exports.CompraItem = CompraItem = __decorate([
    (0, typeorm_1.Entity)()
], CompraItem);
//# sourceMappingURL=compra-item.entity.js.map