import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'controllers/product/product.controller';
import { ProductService } from 'services/product/product.service';
import { ProductEntity } from 'entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
