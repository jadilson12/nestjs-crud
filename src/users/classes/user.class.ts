import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ example: 1, description: 'Id id of the user' })
  iuserIdd: number;

  @ApiProperty({ example: 'maria', description: 'The username of  the user' })
  username: string;

  @ApiProperty({ example: '******', description: 'The password of the user' })
  password: string;
}
