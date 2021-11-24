import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { ResponseCreateFindPeople } from '@people/people/swagger/response/response-create-find-people';

import { FindAllPeopleService } from './find-all-people.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class FindAllPeopleController {
  constructor(private findAllPeopleService: FindAllPeopleService) {}
  @ApiResponse({
    type: [ResponseCreateFindPeople],
    status: 200,
    description: 'Ok.',
  })
  @ApiOperation({ summary: 'Busca todas as pessoas cadastradas.' })
  @Get('/api/new-project/people/find-all')
  async handle(): Promise<PeopleEntity[]> {
    return this.findAllPeopleService.execute();
  }
}
