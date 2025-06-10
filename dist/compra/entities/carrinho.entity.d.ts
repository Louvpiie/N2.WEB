import { User } from '../../auth/entities/user.entity';
import { CarrinhoItem } from './carrinho-item.entity';
export declare class Carrinho {
    id: number;
    user: User;
    itens: CarrinhoItem[];
}
