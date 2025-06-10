import { Compra } from './compra.entity';
import { Produto } from './produto.entity';
export declare class CompraItem {
    id: number;
    compra: Compra;
    produto: Produto;
    quantidade: number;
}
