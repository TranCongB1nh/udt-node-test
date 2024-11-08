import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Q3DbDataSource} from '../datasources';
import {Billing, BillingRelations} from '../models';

export class BillingRepository extends DefaultCrudRepository<
  Billing,
  typeof Billing.prototype.id,
  BillingRelations
> {
  constructor(
    @inject('datasources.q3db') dataSource: Q3DbDataSource,
  ) {
    super(Billing, dataSource);
  }
}
