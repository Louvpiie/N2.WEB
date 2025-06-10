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
exports.Compra = exports.StatusCompra = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../auth/entities/user.entity");
const compra_item_entity_1 = require("./compra-item.entity");
const endereco_entity_1 = require("./endereco.entity");
var StatusCompra;
(function (StatusCompra) {
    StatusCompra["PENDENTE"] = "PENDENTE";
    StatusCompra["PAGO"] = "PAGO";
    StatusCompra["ENVIADO"] = "ENVIADO";
    StatusCompra["ENTREGUE"] = "ENTREGUE";
})(StatusCompra || (exports.StatusCompra = StatusCompra = {}));
let Compra = class Compra {
    id;
    user;
    itens;
    endereco;
    status;
    criadoEm;
    atualizadoEm;
};
exports.Compra = Compra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Compra.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Compra.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => compra_item_entity_1.CompraItem, item => item.compra, { cascade: true }),
    __metadata("design:type", Array)
], Compra.prototype, "itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => endereco_entity_1.Endereco, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", endereco_entity_1.Endereco)
], Compra.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', enum: StatusCompra, default: StatusCompra.PENDENTE }),
    __metadata("design:type", String)
], Compra.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Compra.prototype, "criadoEm", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Compra.prototype, "atualizadoEm", void 0);
exports.Compra = Compra = __decorate([
    (0, typeorm_1.Entity)()
], Compra);
//# sourceMappingURL=compra.entity.js.map