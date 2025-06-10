import { Produto } from './produto.entity';
import { User } from '../../auth/entities/user.entity';
export declare class AvaliacaoProduto {
    id: number;
    produto: Produto;
    user: User;
    nota: number;
    comentario?: string;
}
