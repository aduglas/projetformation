import {DefaultCrudRepository, Filter} from '@loopback/repository';
import {BlaBla, BlaBlaRelations} from '../models';
import {FrmDsDataSource} from '../datasources';
import {inject} from '@loopback/core';
import { from} from "rxjs";
import { distinct , tap } from "rxjs/operators";


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

// recherche FTS avec query native mongodb
public async fullText(str: string) : Promise<any>{

  const tabRet : any[] = [];

    return new Promise((resolve, reject) => {
      
      this.dataSource.connector!.execute!('BlaBla', 'find', { $text: { $search: str } },
      (err : any, data : any) => {
        if (err) reject(err);
        else {
          data.toArray((errT : any, documents : any)=> {
            if (errT){
              reject(errT);
              return;
            }
            resolve(documents);
          });
        }
      });
    });


}



}
