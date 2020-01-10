import { DefaultCrudRepository, Filter } from '@loopback/repository';
import { BlaBla, BlaBlaRelations } from '../models';
import { FrmDsDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { from } from "rxjs";
import { distinct, tap } from "rxjs/operators";


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

  // function distinct
  public async  distinct(
    colName: string,
    filter?: Filter<BlaBla>
  ): Promise<any> {


    const retTab: BlaBla[] = await this.find(filter);
    const tabOut: any[] = [];

    await from(retTab).pipe(
      distinct((p: any) => p[colName]),
      tap((data: any) => {
        tabOut.push(data[colName]);
      })
    ).toPromise();

    return tabOut;
  }



}
