/* eslint-disable no-param-reassign */
import { Inject, Injectable } from '@nestjs/common';
import { QueryPeopleDto } from '@people/people/dto/request/query-people.dto';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';

@Injectable()
export class FindPeopleByQueryService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(QueryPeople: QueryPeopleDto): Promise<PeopleEntity[]> {
    return this.peopleRepository.findPeopleByQuery(QueryPeople);
  }
}
