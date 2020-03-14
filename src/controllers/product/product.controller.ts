import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/interfaces/product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    await this._productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this._productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this._productService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this._productService.delete(id);
    return null;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: CreateProductDto) {
    return await this._productService.update(product, id);
  }
}
