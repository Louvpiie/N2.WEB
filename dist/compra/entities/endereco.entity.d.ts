import { User } from '../../auth/entities/user.entity';
export declare class Endereco {
    id: number;
    user: User;
    rua: string;
    cidade: string;
    estado: string;
    cep: string;
    pais: string;
}
