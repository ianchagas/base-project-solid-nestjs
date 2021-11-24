/* eslint-disable no-param-reassign */
import { UpdateResult } from 'typeorm';

import { Inject, Injectable } from '@nestjs/common';
import { UpdatePeopleDto } from '@people/people/dto/request/update-people.dto';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import FindIfExistsOrThrowException from '@shared/shared/util/find-if-exists-or-throw-exception';

interface IRequest {
  uuid: string;
  UpdatePeople: UpdatePeopleDto;
}

@Injectable()
export class UpdatePeopleService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute({ uuid, UpdatePeople }: IRequest): Promise<UpdateResult> {
    const ValidatePeople = await FindIfExistsOrThrowException.FindPeoples(
      uuid,
      this.peopleRepository,
    );
    UpdatePeople.id = ValidatePeople.id;

    const Update = await this.peopleRepository.update(UpdatePeople);
    return Update.raw;
  }
}
