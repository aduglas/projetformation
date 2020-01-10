import {DefaultCrudRepository} from '@loopback/repository';
import {PointInfo, PointInfoRelations} from '../models';
import {FrmDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PointInfoRepository extends DefaultCrudRepository<
  PointInfo,
  typeof PointInfo.prototype._id,
  PointInfoRelations
> {
  constructor(
    @inject('datasources.FrmDS') dataSource: FrmDsDataSource,
  ) {
    super(PointInfo, dataSource);
  }
}
