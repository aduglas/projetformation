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
import {PointInfo} from '../models';
import {PointInfoRepository} from '../repositories';

export class PointInfoController {
  constructor(
    @repository(PointInfoRepository)
    public pointInfoRepository : PointInfoRepository,
  ) {}

  @post('/point-infos', {
    responses: {
      '200': {
        description: 'PointInfo model instance',
        content: {'application/json': {schema: getModelSchemaRef(PointInfo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PointInfo, {
            title: 'NewPointInfo',
            
          }),
        },
      },
    })
    pointInfo: PointInfo,
  ): Promise<PointInfo> {
    return this.pointInfoRepository.create(pointInfo);
  }

  @get('/point-infos/count', {
    responses: {
      '200': {
        description: 'PointInfo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PointInfo)) where?: Where<PointInfo>,
  ): Promise<Count> {
    return this.pointInfoRepository.count(where);
  }

  @get('/point-infos', {
    responses: {
      '200': {
        description: 'Array of PointInfo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PointInfo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PointInfo)) filter?: Filter<PointInfo>,
  ): Promise<PointInfo[]> {
    return this.pointInfoRepository.find(filter);
  }

  @patch('/point-infos', {
    responses: {
      '200': {
        description: 'PointInfo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PointInfo, {partial: true}),
        },
      },
    })
    pointInfo: PointInfo,
    @param.query.object('where', getWhereSchemaFor(PointInfo)) where?: Where<PointInfo>,
  ): Promise<Count> {
    return this.pointInfoRepository.updateAll(pointInfo, where);
  }

  @get('/point-infos/{id}', {
    responses: {
      '200': {
        description: 'PointInfo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PointInfo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(PointInfo)) filter?: Filter<PointInfo>
  ): Promise<PointInfo> {
    return this.pointInfoRepository.findById(id, filter);
  }

  @patch('/point-infos/{id}', {
    responses: {
      '204': {
        description: 'PointInfo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PointInfo, {partial: true}),
        },
      },
    })
    pointInfo: PointInfo,
  ): Promise<void> {
    await this.pointInfoRepository.updateById(id, pointInfo);
  }

  @put('/point-infos/{id}', {
    responses: {
      '204': {
        description: 'PointInfo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pointInfo: PointInfo,
  ): Promise<void> {
    await this.pointInfoRepository.replaceById(id, pointInfo);
  }

  @del('/point-infos/{id}', {
    responses: {
      '204': {
        description: 'PointInfo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pointInfoRepository.deleteById(id);
  }
}
