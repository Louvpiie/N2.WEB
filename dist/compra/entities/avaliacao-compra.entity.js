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
exports.AvaliacaoCompra = void 0;
const typeorm_1 = require("typeorm");
const compra_entity_1 = require("./compra.entity");
const user_entity_1 = require("../../auth/entities/user.entity");
let AvaliacaoCompra = class AvaliacaoCompra {
    id;
    compra;
    user;
    nota;
    comentario;
};
exports.AvaliacaoCompra = AvaliacaoCompra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AvaliacaoCompra.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => compra_entity_1.Compra),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", compra_entity_1.Compra)
], AvaliacaoCompra.prototype, "compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], AvaliacaoCompra.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], AvaliacaoCompra.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AvaliacaoCompra.prototype, "comentario", void 0);
exports.AvaliacaoCompra = AvaliacaoCompra = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['compra', 'user'])
], AvaliacaoCompra);
//# sourceMappingURL=avaliacao-compra.entity.js.map