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
exports.Carrinho = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../auth/entities/user.entity");
const carrinho_item_entity_1 = require("./carrinho-item.entity");
let Carrinho = class Carrinho {
    id;
    user;
    itens;
};
exports.Carrinho = Carrinho;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Carrinho.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Carrinho.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carrinho_item_entity_1.CarrinhoItem, item => item.carrinho, { cascade: true }),
    __metadata("design:type", Array)
], Carrinho.prototype, "itens", void 0);
exports.Carrinho = Carrinho = __decorate([
    (0, typeorm_1.Entity)()
], Carrinho);
//# sourceMappingURL=carrinho.entity.js.map