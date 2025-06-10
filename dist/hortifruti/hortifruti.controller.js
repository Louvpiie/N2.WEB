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
exports.HortifrutiController = void 0;
const common_1 = require("@nestjs/common");
const hortifruti_service_1 = require("./hortifruti.service");
const create_hortifruti_dto_1 = require("./dto/create-hortifruti.dto");
const update_hortifruti_dto_1 = require("./dto/update-hortifruti.dto");
let HortifrutiController = class HortifrutiController {
    hortifrutiService;
    constructor(hortifrutiService) {
        this.hortifrutiService = hortifrutiService;
    }
    create(createHortifrutiDto) {
        return this.hortifrutiService.create(createHortifrutiDto);
    }
    findAll() {
        return this.hortifrutiService.findAll();
    }
    findOne(id) {
        return this.hortifrutiService.findOne(+id);
    }
    update(id, updateHortifrutiDto) {
        return this.hortifrutiService.update(+id, updateHortifrutiDto);
    }
    remove(id) {
        return this.hortifrutiService.remove(+id);
    }
};
exports.HortifrutiController = HortifrutiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hortifruti_dto_1.CreateHortifrutiDto]),
    __metadata("design:returntype", void 0)
], HortifrutiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HortifrutiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HortifrutiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hortifruti_dto_1.UpdateHortifrutiDto]),
    __metadata("design:returntype", void 0)
], HortifrutiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HortifrutiController.prototype, "remove", null);
exports.HortifrutiController = HortifrutiController = __decorate([
    (0, common_1.Controller)('hortifruti'),
    __metadata("design:paramtypes", [hortifruti_service_1.HortifrutiService])
], HortifrutiController);
//# sourceMappingURL=hortifruti.controller.js.map