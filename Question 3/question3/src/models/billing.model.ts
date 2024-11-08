import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Billing extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  transactionId: string;

  @property({
    type: 'date',
    required: true,
  })
  billingDate: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Billing>) {
    super(data);
  }
}

export interface BillingRelations {
  // describe navigational properties here
}

export type BillingWithRelations = Billing & BillingRelations;
