import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CartProduct} from '../models';
import {CartProductRepository} from '../repositories';

export class CartProductController {
  constructor(
    @repository(CartProductRepository)
    public cartProductRepository : CartProductRepository,
  ) {}

  @post('/cart-products')
  @response(200, {
    description: 'CartProduct model instance',
    content: {'application/json': {schema: getModelSchemaRef(CartProduct)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CartProduct, {
            title: 'NewCartProduct',
            exclude: ['id'],
          }),
        },
      },
    })
    cartProduct: Omit<CartProduct, 'id'>,
  ): Promise<CartProduct> {
    return this.cartProductRepository.create(cartProduct);
  }

  @get('/cart-products/count')
  @response(200, {
    description: 'CartProduct model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CartProduct) where?: Where<CartProduct>,
  ): Promise<Count> {
    return this.cartProductRepository.count(where);
  }

  @get('/cart-products')
  @response(200, {
    description: 'Array of CartProduct model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CartProduct, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CartProduct) filter?: Filter<CartProduct>,
  ): Promise<CartProduct[]> {
    return this.cartProductRepository.find(filter);
  }

  @patch('/cart-products')
  @response(200, {
    description: 'CartProduct PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CartProduct, {partial: true}),
        },
      },
    })
    cartProduct: CartProduct,
    @param.where(CartProduct) where?: Where<CartProduct>,
  ): Promise<Count> {
    return this.cartProductRepository.updateAll(cartProduct, where);
  }

  @get('/cart-products/{id}')
  @response(200, {
    description: 'CartProduct model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CartProduct, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CartProduct, {exclude: 'where'}) filter?: FilterExcludingWhere<CartProduct>
  ): Promise<CartProduct> {
    return this.cartProductRepository.findById(id, filter);
  }

  @patch('/cart-products/{id}')
  @response(204, {
    description: 'CartProduct PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CartProduct, {partial: true}),
        },
      },
    })
    cartProduct: CartProduct,
  ): Promise<void> {
    await this.cartProductRepository.updateById(id, cartProduct);
  }

  @put('/cart-products/{id}')
  @response(204, {
    description: 'CartProduct PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cartProduct: CartProduct,
  ): Promise<void> {
    await this.cartProductRepository.replaceById(id, cartProduct);
  }

  @del('/cart-products/{id}')
  @response(204, {
    description: 'CartProduct DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cartProductRepository.deleteById(id);
  }
}
