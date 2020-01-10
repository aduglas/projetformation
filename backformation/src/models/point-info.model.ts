import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PointInfo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @property({
    type: 'string',
    required: true,
  })
  position: string;

  @property({
    type: 'string',
    required: true,
  })
  label: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PointInfo>) {
    super(data);
  }
}

export interface PointInfoRelations {
  // describe navigational properties here
}

export type PointInfoWithRelations = PointInfo & PointInfoRelations;
