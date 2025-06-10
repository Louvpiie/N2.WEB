import { Carrinho } from './carrinho.entity';
import { Produto } from './produto.entity';
export declare class CarrinhoItem {
    id: number;
    carrinho: Carrinho;
    produto: Produto;
    quantidade: number;
}
