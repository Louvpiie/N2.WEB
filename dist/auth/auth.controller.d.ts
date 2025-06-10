import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    remember(req: {
        user: {
            userId: number;
        };
    }): Promise<{
        email: string;
    }>;
    logout(): {
        message: string;
    };
}
