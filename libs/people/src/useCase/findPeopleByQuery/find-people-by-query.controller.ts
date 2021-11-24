import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { ErrorBadRequestParameter } from '@people/people/swagger/errors/error-bad-request-parameter';
import { ResponseCreateFindPeople } from '@people/people/swagger/response/response-create-find-people';

import { FindPeopleByQueryService } from './find-people-by-query.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class FindPeopleByQueryController {
  constructor(private findPeopleByQueryService: FindPeopleByQueryService) {}
  @ApiResponse({
    type: [ResponseCreateFindPeople],
    status: 200,
    description: 'Ok.',
  })
  @ApiResponse({
    type: ErrorBadRequestParameter,
    status: 400,
    description: 'Error Bad Request.',
  })
  @ApiOperation({
    summary: 'Busca as pessoas através de um parâmetro.',
  })
  @Get('/api/new-project/people/find')
  async handle(
    @Query('id') id: string,
    @Query('name') name: string,
    @Query('email') email: string,
    @Query('cpf') cpf: string,
    @Query('cnpj') cnpj: string,
    @Query('ie') ie: string,
    @Query('corporate_name') corporate_name: string,
    @Query('fantasy_name') fantasy_name: string,
    @Query('comments') comments: string,
  ): Promise<PeopleEntity[]> {
    return this.findPeopleByQueryService.execute({
      id,
      name,
      email,
      cpf,
      cnpj,
      ie,
      corporate_name,
      fantasy_name,
      comments,
    });
  }
}
