import { UpdateResult } from 'typeorm';

import { Body, Controller, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdatePeopleDto } from '@people/people/dto/request/update-people.dto';
import { ValidatorErrorsUpdatePeople } from '@people/people/swagger/errors/validator-errors-update-people';
import { ResponseUpdatePeople } from '@people/people/swagger/response/response-update-people';
import { uuidOptions } from '@shared/shared/pipes/uuid.config';

import { UpdatePeopleService } from './update-people.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class UpdatePeopleController {
  constructor(private updatePeopleService: UpdatePeopleService) {}
  @ApiResponse({
    type: [ResponseUpdatePeople],
    status: 200,
    description: 'Ok.',
  })
  @ApiResponse({
    type: ValidatorErrorsUpdatePeople,
    status: 400,
    description: 'Bad Request Error.',
  })
  @ApiOperation({ summary: 'Altera o cadastro de uma pessoa.' })
  @Put('/api/new-project/people/update/:uuid')
  async handle(
    @Param('uuid', new ParseUUIDPipe(uuidOptions)) uuid: string,
    @Body() UpdatePeople: UpdatePeopleDto,
  ): Promise<UpdateResult> {
    return this.updatePeopleService.execute({ uuid, UpdatePeople });
  }
}
