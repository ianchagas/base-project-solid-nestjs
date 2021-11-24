/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { FindAllPeopleService } from './find-all-people.service';

describe('People', () => {
  let findAllPeopleService: FindAllPeopleService;
  let peopleRepository: PeopleRepository;

  const mockPeopleRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllPeopleService,
        PeopleRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    findAllPeopleService =
      module.get<FindAllPeopleService>(FindAllPeopleService);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(findAllPeopleService).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Find All People', () => {
    it('Should Find All Peoples in Find method', async () => {
      const Mock = PeopleMock.CreatedPeopleSeed();

      mockPeopleRepository.find.mockReturnValue(Mock);

      const GetPeoples = await peopleRepository.findAll();

      expect(mockPeopleRepository.find).toBeCalledTimes(1);
      expect(Mock).toEqual(GetPeoples);
    });
  });
});
