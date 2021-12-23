import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { UsersService } from 'src/modules/users/users.service';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private database: DatabaseService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const { password, ...user } = await this.database.user.findFirst({
      where: {
        email: payload.email,
      },
    });
    return user;
  }
}
@Injectable()
export class JwtQueryParamStrategy extends PassportStrategy(
  Strategy,
  'jwt-query-param',
) {
  constructor(private usersService: UsersService, config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('access_token'),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.usersService.findOne(
      payload.email,
    );
    return user;
  }
}
