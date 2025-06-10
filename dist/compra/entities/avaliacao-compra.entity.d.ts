import { Compra } from './compra.entity';
import { User } from '../../auth/entities/user.entity';
export declare class AvaliacaoCompra {
    id: number;
    compra: Compra;
    user: User;
    nota: number;
    comentario?: string;
}
