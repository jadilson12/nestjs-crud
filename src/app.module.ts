import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/store'),
    ProductModule
  ]
})
export class AppModule {}
