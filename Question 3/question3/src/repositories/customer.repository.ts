import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Q3DbDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.q3db') dataSource: Q3DbDataSource,
  ) {
    super(Customer, dataSource);
  }
}
