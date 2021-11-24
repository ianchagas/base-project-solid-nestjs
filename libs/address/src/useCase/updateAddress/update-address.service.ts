/* eslint-disable no-param-reassign */
import { UpdateResult } from 'typeorm';

import { AddressDto } from '@address/address/dto/request/address.dto';
import { IAddressRepository } from '@address/address/implementations/address.interface';
import { AddressRepository } from '@address/address/infra/typeORM/repositories/address.repository';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import FindIfExistsOrThrowException from '@shared/shared/util/find-if-exists-or-throw-exception';

interface IRequest {
  uuid: string;
  UpdateAddress: AddressDto;
}

@Injectable()
export class UpdateAddressService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
    @Inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute({ uuid, UpdateAddress }: IRequest): Promise<UpdateResult> {
    const ValidatePeople = await FindIfExistsOrThrowException.FindPeoples(
      uuid,
      this.peopleRepository,
    );
    UpdateAddress.id_people = ValidatePeople.id;
    const Update = await this.addressRepository.update(UpdateAddress);
    return Update.raw;
  }
}
