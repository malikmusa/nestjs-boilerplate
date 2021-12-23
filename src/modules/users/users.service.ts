import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/core/database/database.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private database: DatabaseService) {}

  async create(body: CreateUserDto) {
    const { email, name, password } = body;

    const userAlreadyExists = await this.database.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists)
      throw new BadRequestException('Email already exist!');

    const saltOrRounds = 10;

    const hashPassword = await bcrypt.hash(password, saltOrRounds);
    const user = await this.database.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });

    delete user.password;
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) {
    const user = await this.database.user.findFirst({
      where: { email },
    });

    return user;
  }
}
