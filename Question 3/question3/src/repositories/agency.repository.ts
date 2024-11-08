import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Q3DbDataSource} from '../datasources';
import {Agency, AgencyRelations} from '../models';

export class AgencyRepository extends DefaultCrudRepository<
  Agency,
  typeof Agency.prototype.id,
  AgencyRelations
> {
  constructor(
    @inject('datasources.q3db') dataSource: Q3DbDataSource,
  ) {
    super(Agency, dataSource);
  }
}
