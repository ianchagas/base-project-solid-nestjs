import { Inject, Injectable } from '@nestjs/common';
import { PeopleDto } from '@people/people/dto/request/people.dto';
import { IPeopleRepository } from '@people/people/implementations/people.interface';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';

interface IRequest {
  CreatePeople: PeopleDto;
}

@Injectable()
export class CreatePeopleService {
  constructor(
    @Inject(PeopleRepository)
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute({ CreatePeople }: IRequest): Promise<PeopleEntity> {
    return this.peopleRepository.create(CreatePeople);
  }
}
