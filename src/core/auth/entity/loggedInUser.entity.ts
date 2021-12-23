import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  subUnitId?: number;

  @ApiProperty()
  baseId?: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}

export class LoggedInUser {
  @ApiProperty()
  access_token: string;

  @ApiProperty({ type: User })
  user: User;
}
