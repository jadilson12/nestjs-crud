import { Injectable } from '@nestjs/common';
import { Product as ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductModel } from './product.model';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly _repository: Repository<ProductEntity>
  ) {}

  /**
   * @description seacrh with paginate product
   * @param options  IPaginationOptions
   * @returns {Promise} Promise<Pagination<ProductEntity>>
   */
  async findAll(options: IPaginationOptions): Promise<Pagination<ProductEntity>> {
    // const queryBuilder = this._repository.createQueryBuilder('p');
    // queryBuilder.where('p.id = :id', { id: 1 });
    // return await paginate<ProductEntity>(queryBuilder, options);
    return await paginate<ProductEntity>(this._repository, options);
  }

  /**
   * @description create new product
   * @param product  product
   * @returns {Promise} promise
   */
  create(productModel: ProductModel): Promise<ProductEntity> {
    return this._repository.save(productModel);
  }

  /**
   * @description Find one  product
   * @param id string
   * @returns {Promise} promise
   */
  async findOne(id: string): Promise<ProductEntity> {
    return await this._repository.findOne(id);
  }

  /**
   * @description Delete one product
   * @param id string
   */
  async delete(id: string) {
    return await this._repository.delete(id);
  }

  /**
   * @description Delete one product
   * @param id string
   * @param object object product
   */
  async update(product: ProductModel, id: string) {
    const productUpdate = await this._repository.findOne(id);
    productUpdate.name = product.name;
    return await this._repository.save(productUpdate);
  }
}
