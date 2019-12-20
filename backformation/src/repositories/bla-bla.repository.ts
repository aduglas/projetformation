import {DefaultCrudRepository} from '@loopback/repository';
import {BlaBla, BlaBlaRelations} from '../models';
import {FrmDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BlaBlaRepository extends DefaultCrudRepository<
  BlaBla,
  typeof BlaBla.prototype._id,
  BlaBlaRelations
> {
  constructor(
    @inject('datasources.FrmDS') dataSource: FrmDsDataSource,
  ) {
    super(BlaBla, dataSource);
  }
}
