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
exports.CompraController = void 0;
const common_1 = require("@nestjs/common");
const compra_service_1 = require("./compra.service");
const produto_dto_1 = require("./dto/produto.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CompraController = class CompraController {
    service;
    constructor(service) {
        this.service = service;
    }
    index() {
        return this.service.listarProdutos();
    }
    buscar(nome) {
        return this.service.buscarPorNome(nome);
    }
    detalhes(id) {
        return this.service.detalhesProduto(id);
    }
    criarProduto(dto) {
        return this.service.criarProduto(dto);
    }
};
exports.CompraController = CompraController;
__decorate([
    (0, common_1.Get)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('buscar'),
    __param(0, (0, common_1.Query)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)('detalhes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "detalhes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('produto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_dto_1.ProdutoDto]),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "criarProduto", null);
exports.CompraController = CompraController = __decorate([
    (0, common_1.Controller)('compra'),
    __metadata("design:paramtypes", [compra_service_1.CompraService])
], CompraController);
//# sourceMappingURL=compra.controller.js.map