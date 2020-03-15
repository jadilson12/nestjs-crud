import { Controller, Post, Body, Get, Param, Delete, Put, Query } from '@nestjs/common';
import { ProductService } from 'services/product/product.service';
import { ProductModel } from 'models/product.model';
import { ProductEntity } from 'entities/product.entity';
@Controller('products')
export class ProductController {
  constructor(private readonly _service: ProductService) {}

  @Get('')
  async index(@Query('page') page = 0, @Query('limit') limit = 10) {
    limit = limit > 100 ? 100 : limit;
    return await this._service.search({ page, limit, route: 'http://localhost:3000/products' });
  }

  @Post()
  async create(@Body() productModel: ProductModel) {
    return this._service.create(productModel);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductEntity> {
    return this._service.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this._service.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: ProductModel) {
    return this._service.update(product, id);
  }
}
