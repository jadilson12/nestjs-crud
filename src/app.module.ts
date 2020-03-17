import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product as ProductEntity } from './product/product.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

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
    ProductModule,
    UsersModule,
    AuthModule
  ]
})
export class AppModule {}
