import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CartProduct extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  cartId: string;

  @property({
    type: 'string',
    required: true,
  })
  productId: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CartProduct>) {
    super(data);
  }
}

export interface CartProductRelations {
  // describe navigational properties here
}

export type CartProductWithRelations = CartProduct & CartProductRelations;
