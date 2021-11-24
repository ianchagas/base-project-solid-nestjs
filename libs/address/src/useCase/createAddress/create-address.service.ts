/* eslint-disable no-param-reassign */
import { AddressDto } from '@address/address/dto/request/address.dto';
import { IAddressRepository } from '@address/address/implementations/address.interface';
import { AddressEntity } from '@address/address/infra/typeORM/entities/address.entity';
import { AddressRepository } from '@address/address/infra/typeORM/repositories/address.repository';
import { Inject, Injectable } from '@nestjs/common';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import FindIfExistsOrThrowException from '@shared/shared/util/find-if-exists-or-throw-exception';

interface IRequest {
  uuid: string;
  CreateAddress: AddressDto;
}

@Injectable()
export class CreateAddressService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
    @Inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute({ uuid, CreateAddress }: IRequest): Promise<AddressEntity> {
    const ValidatePeople = await FindIfExistsOrThrowException.FindPeoples(
      uuid,
      this.peopleRepository,
    );

    CreateAddress.id_people = ValidatePeople.id;

    return this.addressRepository.create(CreateAddress);
  }
}
