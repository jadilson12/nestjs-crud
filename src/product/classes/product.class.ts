import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ example: 1, description: 'Id id of the product' })
  id: number;

  @ApiProperty({ example: 'rice', description: 'The name of the product' })
  name: string;
}
