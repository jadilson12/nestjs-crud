import { Controller, Post, Body, Get, Param, Delete, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { Product as ProductEntity } from './product.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product as ProductSwagger } from './classes/product.class';
@Controller('products')
export class ProductController {
  constructor(private readonly _service: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'List All product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll(@Query('page') page = 0, @Query('limit') limit = 10) {
    limit = limit > 100 ? 100 : limit;
    return await this._service.findAll({ page, limit, route: 'http://localhost:3000/products' });
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() productModel: ProductModel) {
    return this._service.create(productModel);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find product' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ProductSwagger
  })
  async findOne(@Param('id') id: string): Promise<ProductEntity> {
    return this._service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ProductSwagger
  })
  async delete(@Param('id') id: string) {
    return this._service.delete(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ProductSwagger
  })
  async update(@Param('id') id: string, @Body() product: ProductModel) {
    return this._service.update(product, id);
  }
}
