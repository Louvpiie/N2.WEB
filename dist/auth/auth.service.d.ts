import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    register(data: RegisterDto): Promise<{
        message: string;
    }>;
    login(data: LoginDto): Promise<{
        token: string;
    }>;
    remember(userId: number): Promise<{
        email: string;
    }>;
}
