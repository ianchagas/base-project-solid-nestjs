/* eslint-disable no-param-reassign */
import { IAddressRepository } from '@address/address/implementations/address.interface';
import { AddressRepository } from '@address/address/infra/typeORM/repositories/address.repository';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import FindIfExistsOrThrowException from '@shared/shared/util/find-if-exists-or-throw-exception';

@Injectable()
export class DeleteAddressService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
    @Inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute(uuid: string): Promise<void> {
    const ValidatePeople = await FindIfExistsOrThrowException.FindPeoples(
      uuid,
      this.peopleRepository,
    );
    const PeopleId = ValidatePeople.id;
    return this.addressRepository.delete(PeopleId);
  }
}
