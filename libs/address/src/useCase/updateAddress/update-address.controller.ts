import { UpdateResult } from 'typeorm';

import { AddressDto } from '@address/address/dto/request/address.dto';
import { ErrorNotFoundPeopleAddress } from '@address/address/swagger/errors/error-not-found-people-address';
import { ValidatorErrorsCreateOrUpdateAddress } from '@address/address/swagger/errors/validator-errors-create-or-update-address';
import { ResponseUpdateAddress } from '@address/address/swagger/response/response-update-address';
import { Body, Controller, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { uuidOptions } from '@shared/shared/pipes/uuid.config';

import { UpdateAddressService } from './update-address.service';

@ApiTags('Endereço')
@Controller()
export class UpdateAddressController {
  constructor(private updateAddressService: UpdateAddressService) {}
  @ApiResponse({
    type: [ResponseUpdateAddress],
    status: 200,
    description: 'Ok.',
  })
  @ApiResponse({
    type: ValidatorErrorsCreateOrUpdateAddress,
    status: 400,
    description: 'Bad Request Error.',
  })
  @ApiResponse({
    type: ErrorNotFoundPeopleAddress,
    status: 404,
    description: 'Not Found Error.',
  })
  @ApiOperation({
    summary: 'Altera o endereço do cadastro da pessoa',
  })
  @Put('/api/new-project/address/update/:uuid_people')
  async handle(
    @Param('uuid_people', new ParseUUIDPipe(uuidOptions)) uuid: string,
    @Body() UpdateAddress: AddressDto,
  ): Promise<UpdateResult> {
    return this.updateAddressService.execute({ uuid, UpdateAddress });
  }
}
