import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {BlaBla} from '../models';
import {BlaBlaRepository} from '../repositories';

export class BlaBlaController {
  constructor(
    @repository(BlaBlaRepository)
    public blaBlaRepository : BlaBlaRepository,
  ) {}

  @post('/bla-blas', {
    responses: {
      '200': {
        description: 'BlaBla model instance',
        content: {'application/json': {schema: getModelSchemaRef(BlaBla)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlaBla, {
            title: 'NewBlaBla',
            exclude: ['_id'],
          }),
        },
      },
    })
    blaBla: Omit<BlaBla, '_id'>,
  ): Promise<BlaBla> {
    return this.blaBlaRepository.create(blaBla);
  }

  @get('/bla-blas/count', {
    responses: {
      '200': {
        description: 'BlaBla model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(BlaBla)) where?: Where<BlaBla>,
  ): Promise<Count> {
    return this.blaBlaRepository.count(where);
  }

  @get('/bla-blas', {
    responses: {
      '200': {
        description: 'Array of BlaBla model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BlaBla, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(BlaBla)) filter?: Filter<BlaBla>,
  ): Promise<BlaBla[]> {
    return this.blaBlaRepository.find(filter);
  }

  @patch('/bla-blas', {
    responses: {
      '200': {
        description: 'BlaBla PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlaBla, {partial: true}),
        },
      },
    })
    blaBla: BlaBla,
    @param.query.object('where', getWhereSchemaFor(BlaBla)) where?: Where<BlaBla>,
  ): Promise<Count> {
    return this.blaBlaRepository.updateAll(blaBla, where);
  }

  @get('/bla-blas/{id}', {
    responses: {
      '200': {
        description: 'BlaBla model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BlaBla, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(BlaBla)) filter?: Filter<BlaBla>
  ): Promise<BlaBla> {
    return this.blaBlaRepository.findById(id, filter);
  }

  @patch('/bla-blas/{id}', {
    responses: {
      '204': {
        description: 'BlaBla PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlaBla, {partial: true}),
        },
      },
    })
    blaBla: BlaBla,
  ): Promise<void> {
    await this.blaBlaRepository.updateById(id, blaBla);
  }

  @put('/bla-blas/{id}', {
    responses: {
      '204': {
        description: 'BlaBla PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() blaBla: BlaBla,
  ): Promise<void> {
    await this.blaBlaRepository.replaceById(id, blaBla);
  }

  @del('/bla-blas/{id}', {
    responses: {
      '204': {
        description: 'BlaBla DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.blaBlaRepository.deleteById(id);
  }
}
