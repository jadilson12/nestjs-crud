import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly _productModel: Model<Product>
  ) {}

  /**
   * @description create new product
   * @param createProductDto  createProducDto
   * @returns {Promise} promise
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this._productModel(createProductDto);
    return createdProduct.save();
  }

  /**
   * @description List all product
   * @returns {Promise} promise
   */
  async findAll(): Promise<Product[]> {
    return this._productModel.find().exec();
  }

  /**
   * @description Find one  product
   * @param id string
   * @returns {Promise} promise
   */
  async findOne(id: string): Promise<Product> {
    let result: Product | PromiseLike<Product>;
    try {
      result = await this._productModel.findById(id).exec();
      if (!result) {
        throw new NotFoundException('Could not find product.');
      }
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }

    return result;
  }

  /**
   * @description Delete one product
   * @param id string
   */
  async delete(id: string) {
    try {
      const result = await this._productModel.deleteOne({ _id: id }).exec();
      if (result.n === 0) {
        throw new NotFoundException('Could not find product.');
      }
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
  }

  /**
   * @description Delete one product
   * @param id string
   * @param product createProductDto
   */
  async update(product: CreateProductDto, id: string) {
    try {
      if (product._id != id) {
        throw new NotFoundException('id invalid');
      }
      this._productModel.updateOne({ _id: id }, product, { new: true }).exec();

      const updated = this._productModel.findOne({ _id: id });
      if (!updated) {
        throw new NotFoundException('Product not found');
      }

      return updated;
    } catch (err) {
      return err.response;
    }
  }
}
