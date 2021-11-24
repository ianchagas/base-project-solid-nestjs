/* eslint-disable no-param-reassign */
import { Inject, Injectable } from '@nestjs/common';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import FindIfExistsOrThrowException from '@shared/shared/util/find-if-exists-or-throw-exception';

@Injectable()
export class DeletePeopleService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(uuid: string): Promise<void> {
    const ValidatePeople = await FindIfExistsOrThrowException.FindPeoples(
      uuid,
      this.peopleRepository,
    );

    const PeopleId = ValidatePeople.id;

    return this.peopleRepository.delete(PeopleId);
  }
}
