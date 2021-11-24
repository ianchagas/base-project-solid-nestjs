import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { ResponseCreateFindPeopleWithAddress } from '@people/people/swagger/response/response-create-find-people-with-address';

import { FindAllPeopleWithAddressService } from './find-all-people-with-address.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class FindAllPeopleWithAddressController {
  constructor(
    private findAllPeopleWithAddressService: FindAllPeopleWithAddressService,
  ) {}
  @ApiResponse({
    type: [ResponseCreateFindPeopleWithAddress],
    status: 200,
    description: 'Ok.',
  })
  @ApiOperation({
    summary: 'Busca todas as pessoas cadastradas trazendo os endereços.',
  })
  @Get('/api/new-project/people/find-all-with-address')
  async handle(): Promise<PeopleEntity[]> {
    return this.findAllPeopleWithAddressService.execute();
  }
}
