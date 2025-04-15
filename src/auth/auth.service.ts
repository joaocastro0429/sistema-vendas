import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {
    // 1. Buscar o usuário pelo e-mail
    const user = await this.usersService.findByEmail(email);

    // 2. Verifica se o usuário existe e se a senha está correta
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }

    // 3. Cria o payload com id e email
    const payload = { sub: user.id, email: user.email };

    // 4. Retorna o token
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
