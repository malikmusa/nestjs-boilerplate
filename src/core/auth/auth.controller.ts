import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import {
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { AuthService } from './auth.service';
import { LocalLoginDto } from './dto/local-login.dto';
import { LoggedInUser } from './entity/loggedInUser.entity';
// import { LocalLoginDto } from './dto/local-login.dto';
// import { LoggedInUser } from './entity/loggedInUser.entity';
// import { JwtQueryParamAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('local/login')
  @ApiBody({ type: LocalLoginDto })
  @ApiCreatedResponse({
    description: 'Successfully Logged In.',
    type: LoggedInUser,
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  async localLogin(@Request() req: ExpressRequest) {
    return this.authService.login(req.body);
  }
}
