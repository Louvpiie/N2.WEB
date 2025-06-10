import { User } from '../../auth/entities/user.entity';
import { CompraItem } from './compra-item.entity';
import { Endereco } from './endereco.entity';
export declare enum StatusCompra {
    PENDENTE = "PENDENTE",
    PAGO = "PAGO",
    ENVIADO = "ENVIADO",
    ENTREGUE = "ENTREGUE"
}
export declare class Compra {
    id: number;
    user: User;
    itens: CompraItem[];
    endereco: Endereco;
    status: StatusCompra;
    criadoEm: Date;
    atualizadoEm: Date;
}
