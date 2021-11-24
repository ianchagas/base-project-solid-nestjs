import { ErrorNotFoundPeopleMethodDeleteAddress } from '@address/address/swagger/errors/error-not-found-people-method-delete-address';
import { ErrorParseUUIDAddress } from '@address/address/swagger/errors/error-parse-uuid-address';
import { Controller, Delete, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { uuidOptions } from '@shared/shared/pipes/uuid.config';

import { DeleteAddressService } from './delete-address.service';

@ApiTags('Endereço')
@Controller()
export class DeleteAddressController {
  constructor(private deleteAddressService: DeleteAddressService) {}
  @ApiResponse({
    status: 200,
    description: 'Ok.',
  })
  @ApiResponse({
    type: ErrorParseUUIDAddress,
    status: 400,
    description: 'Bad Request Error.',
  })
  @ApiResponse({
    type: ErrorNotFoundPeopleMethodDeleteAddress,
    status: 404,
    description: 'Not Found Error.',
  })
  @ApiOperation({
    summary: 'Delete o cadastro de endereço da pessoa cadastrada.',
  })
  @Delete('/api/new-project/address/delete/:uuid_people')
  async handle(
    @Param('uuid_people', new ParseUUIDPipe(uuidOptions)) uuid: string,
  ): Promise<void> {
    return this.deleteAddressService.execute(uuid);
  }
}
