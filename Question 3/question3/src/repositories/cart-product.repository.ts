import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Q3DbDataSource} from '../datasources';
import {CartProduct, CartProductRelations} from '../models';

export class CartProductRepository extends DefaultCrudRepository<
  CartProduct,
  typeof CartProduct.prototype.id,
  CartProductRelations
> {
  constructor(
    @inject('datasources.q3db') dataSource: Q3DbDataSource,
  ) {
    super(CartProduct, dataSource);
  }
}
