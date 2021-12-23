import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/modules/users/dto/user.dto';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user: LoginUserDto) {
    const existingUser = await this.usersService.findOne(user.email);
    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        user.password,
        existingUser.password,
      );

      if (existingUser && isValidPassword) {
        return existingUser;
      }
      return null;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    delete user.password;
    return {
      jwt: this.jwtService.sign(payload),
      user,
    };
  }
}
