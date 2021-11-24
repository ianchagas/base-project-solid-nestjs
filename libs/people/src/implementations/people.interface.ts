import { UpdateResult } from 'typeorm';

import { PeopleDto } from '../dto/request/people.dto';
import { QueryPeopleDto } from '../dto/request/query-people.dto';
import { PeopleEntity } from '../infra/typeORM/entities/people.entity';

interface IPeopleRepository {
  create(data: PeopleDto): Promise<PeopleEntity>;

  update(data: PeopleDto): Promise<UpdateResult>;

  findById(id: string): Promise<PeopleEntity>;

  delete(id: string): Promise<void>;

  findAll(): Promise<PeopleEntity[]>;

  findAllWithAddress(): Promise<PeopleEntity[]>;

  findPeopleByQuery(data: QueryPeopleDto): Promise<PeopleEntity[]>;

  findPeopleByQueryWithAddress(data: QueryPeopleDto): Promise<PeopleEntity[]>;
}

export { IPeopleRepository };
