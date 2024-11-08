import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Q3DbDataSource} from '../datasources';
import {Transaction, TransactionRelations} from '../models';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.id,
  TransactionRelations
> {
  constructor(
    @inject('datasources.q3db') dataSource: Q3DbDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
