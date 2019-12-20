import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class BlaBla extends Entity {
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
  label: string;

  @property({
    type: 'string',
    required: true,
  })
  qui: string;

  @property({
    type: 'date',
    required: true,
  })
  quand: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BlaBla>) {
    super(data);
  }
}

export interface BlaBlaRelations {
  // describe navigational properties here
}

export type BlaBlaWithRelations = BlaBla & BlaBlaRelations;
