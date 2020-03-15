import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from 'services/product/product.service';
import { Product } from 'entitys/product.entity';
import { ProductModel } from 'models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Post()
  create(@Body() productModel: ProductModel) {
    return this._productService.create(productModel);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this._productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this._productService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this._productService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: ProductModel) {
    return this._productService.update(product, id);
  }
}
