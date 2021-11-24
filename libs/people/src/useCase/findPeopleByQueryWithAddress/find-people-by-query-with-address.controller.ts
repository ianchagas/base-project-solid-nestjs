import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { ErrorBadRequestParameter } from '@people/people/swagger/errors/error-bad-request-parameter';
import { ResponseCreateFindPeopleWithAddress } from '@people/people/swagger/response/response-create-find-people-with-address';

import { FindPeopleByQueryWithAddressService } from './find-people-by-query-with-address.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class FindPeopleByQueryWithAddressController {
  constructor(
    private findPeopleByQueryWithAddressService: FindPeopleByQueryWithAddressService,
  ) {}
  @ApiResponse({
    type: [ResponseCreateFindPeopleWithAddress],
    status: 200,
    description: 'Ok.',
  })
  @ApiResponse({
    type: ErrorBadRequestParameter,
    status: 400,
    description: 'Bad Request Error.',
  })
  @ApiOperation({
    summary: 'Busca as pessoas com os endereços através de um parâmetro.',
  })
  @Get('/api/new-project/people/find-with-address')
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
    return this.findPeopleByQueryWithAddressService.execute({
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
