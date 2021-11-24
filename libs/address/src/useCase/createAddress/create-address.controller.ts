import { AddressDto } from '@address/address/dto/request/address.dto';
import { AddressEntity } from '@address/address/infra/typeORM/entities/address.entity';
import { ErrorNotFoundPeopleAddress } from '@address/address/swagger/errors/error-not-found-people-address';
import { ValidatorErrorsCreateOrUpdateAddress } from '@address/address/swagger/errors/validator-errors-create-or-update-address';
import { ResponseCreateAddress } from '@address/address/swagger/response/response-create-address';
import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { uuidOptions } from '@shared/shared/pipes/uuid.config';

import { CreateAddressService } from './create-address.service';

@ApiTags('Endereço')
@Controller()
export class CreateAddressController {
  constructor(private createAddressService: CreateAddressService) {}
  @ApiResponse({
    type: ResponseCreateAddress,
    status: 201,
    description: 'Created.',
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
    summary:
      'Cria um endereço para uma pessoa caso ela ainda não possua esse tipo de cadastro.',
  })
  @Post('/api/new-project/address/create/:uuid_people')
  async handle(
    @Param('uuid_people', new ParseUUIDPipe(uuidOptions)) uuid: string,
    @Body() CreateAddress: AddressDto,
  ): Promise<AddressEntity> {
    return this.createAddressService.execute({ uuid, CreateAddress });
  }
}
