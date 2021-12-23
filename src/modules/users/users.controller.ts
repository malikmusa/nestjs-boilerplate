import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/core/auth/entity/loggedInUser.entity';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  //@ApiBody({ type: CreateUserDto })
  async createUser(@Body() body: CreateUserDto) {
    return await this.usersService.create(body);
  }

  @Get('/:email')
  @UseGuards(JwtAuthGuard)
  async getUsers(@Query('email') email: string) {
    return await this.usersService.findOne(email);
  }
  @Get('me')
  @ApiOkResponse({ type: User })
  getProfile(@Req() req: Request) {
    const user = { ...req.user } as any;
    delete user.deleted;
    return user;
  }
  @Get()
  async getAllUsers() {
    return await this.usersService.findAll();
  }
}
