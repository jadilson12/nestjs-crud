import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly _productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this._productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this._productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this._productModel.findById({_id: id})
  }

  async delete(id: string) {
    const result = await this._productModel.deleteOne({_id: id}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
    return result
  }
}