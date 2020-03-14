import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from 'src/controllers/product/product.controller';
import { ProductService } from 'src/services/product/product.service';
import { ProductSchema } from 'src/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
