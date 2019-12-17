import {DefaultCrudRepository} from '@loopback/repository';
import {FrmUser, FrmUserRelations} from '../models';
import {FrmDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FrmUserRepository extends DefaultCrudRepository<
  FrmUser,
  typeof FrmUser.prototype._id,
  FrmUserRelations
> {
  constructor(
    @inject('datasources.FrmDS') dataSource: FrmDsDataSource,
  ) {
    super(FrmUser, dataSource);
  }
}
