import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const user = this.userRepo.create({
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
    });
    await this.userRepo.save(user);
    return { message: 'Usuário registrado com sucesso' };
  }

  async login(data: LoginDto) {
    const user = await this.userRepo.findOneBy({ email: data.email });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const token = this.jwtService.sign({ sub: user.id });
    return { token };
  }

  async remember(userId: number) {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new UnauthorizedException();
    return { email: user.email };
  }
}