import { CompraService } from './compra.service';
import { ProdutoDto } from './dto/produto.dto';
export declare class CompraController {
    private service;
    constructor(service: CompraService);
    index(): void;
    buscar(nome: string): void;
    detalhes(id: number): void;
    criarProduto(dto: ProdutoDto): void;
}
