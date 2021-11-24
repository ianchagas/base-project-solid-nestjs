import { Controller, Delete, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorNotFoundPeopleMethodDelete } from '@people/people/swagger/errors/error-not-found-people-method-delete';
import { ErrorParseUUID } from '@people/people/swagger/errors/error-parse-uuid';
import { uuidOptions } from '@shared/shared/pipes/uuid.config';

import { DeletePeopleService } from './delete-people.service';

@ApiTags('Entidade/Pessoa')
@Controller()
export class DeletePeopleController {
  constructor(private deletePeopleService: DeletePeopleService) {}
  @ApiResponse({
    status: 200,
    description: 'Ok.',
  })
  @ApiResponse({
    type: ErrorParseUUID,
    status: 400,
    description: 'Bad Request Error.',
  })
  @ApiResponse({
    type: ErrorNotFoundPeopleMethodDelete,
    status: 404,
    description: 'Not Found Error',
  })
  @ApiOperation({ summary: 'Altera o cadastro de uma pessoa.' })
  @Delete('/api/new-project/people/delete/:uuid')
  async handle(
    @Param('uuid', new ParseUUIDPipe(uuidOptions)) uuid: string,
  ): Promise<void> {
    return this.deletePeopleService.execute(uuid);
  }
}
