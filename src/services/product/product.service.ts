import { Injectable } from '@nestjs/common';
import { Product } from 'entitys/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductModel } from 'models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly _productRepository: Repository<Product>
  ) {}

  /**
   * @description create new product
   * @param product  product
   * @returns {Promise} promise
   */
  create(productModel: ProductModel): Promise<Product> {
    return this._productRepository.save(productModel);
  }

  /**
   * @description List all product
   * @returns {Promise} promise
   */
  async findAll(): Promise<Product[]> {
    return await this._productRepository.find();
  }

  /**
   * @description Find one  product
   * @param id string
   * @returns {Promise} promise
   */
  async findOne(id: string): Promise<Product> {
    return await this._productRepository.findOne(id);
  }

  /**
   * @description Delete one product
   * @param id string
   */
  async delete(id: string) {
    return await this._productRepository.delete(id);
  }

  /**
   * @description Delete one product
   * @param id string
   * @param object object product
   */
  async update(product: ProductModel, id: string) {
    const productUpdate = await this._productRepository.findOne(id);
    productUpdate.name = product.name;
    return await this._productRepository.save(productUpdate);
  }
}
