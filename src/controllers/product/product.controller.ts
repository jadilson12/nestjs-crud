import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';
import { CreateProductDto } from 'src/dto/create-product.dto';

@Controller('products')
@Controller('product')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    await this._productService.create(createProductDto);
  }

}
