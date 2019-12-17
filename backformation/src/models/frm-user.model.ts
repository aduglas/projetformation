import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class FrmUser extends Entity {
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
  pseudo: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
  })
  prenom?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  profiles: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FrmUser>) {
    super(data);
  }
}

export interface FrmUserRelations {
  // describe navigational properties here
}

export type FrmUserWithRelations = FrmUser & FrmUserRelations;
