import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleDto } from '@people/people/dto/request/people.dto';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { ValidatorErrorsCreatePeopleWithAddress } from '@people/people/swagger/errors/validator-errors-create-people-with-address';
import { ResponseCreateFindPeopleWithAddress } from '@people/people/swagger/response/response-create-find-people-with-address';

import { CreatePeopleService } from './create-people.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class CreatePeopleController {
  constructor(private createPeopleService: CreatePeopleService) {}
  @ApiResponse({
    type: [ResponseCreateFindPeopleWithAddress],
    status: 201,
    description: 'Created.',
  })
  @ApiResponse({
    type: ValidatorErrorsCreatePeopleWithAddress,
    status: 400,
    description: 'Bad Request Error.',
  })
  @ApiOperation({ summary: 'Cria um novo cadastro para uma pessoa.' })
  @Post('/api/new-project/people/create')
  async handle(@Body() CreatePeople: PeopleDto): Promise<PeopleEntity> {
    return this.createPeopleService.execute({ CreatePeople });
  }
}
