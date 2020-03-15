import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'nestjs',
      database: 'test',
      entities: [ProductEntity],
      synchronize: true
    }),
    ProductModule
  ]
})
export class AppModule {}
