/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NotFoundException } from '@nestjs/common';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';

export default class FindIfExistsOrThrowException {
  static async FindPeoples(
    uuid: string,
    PeopleRepository,
  ): Promise<PeopleEntity> {
    const PeopleExists = await PeopleRepository.findById(uuid);
    if (!PeopleExists) {
      throw new NotFoundException('Entidade não encontrada');
    }
    return PeopleExists;
  }
}
