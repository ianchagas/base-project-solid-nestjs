/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { FindPeopleByQueryService } from './find-people-by-query.service';

describe('People', () => {
  let findPeopleByQueryService: FindPeopleByQueryService;
  let peopleRepository: PeopleRepository;

  const mockPeopleRepository = {
    createQueryBuilder: jest.fn(() => ({
      where: jest.fn(() => ({
        getMany: jest.fn().mockReturnValue(PeopleMock.CreatedPeopleSeed()),
      })),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindPeopleByQueryService,
        PeopleRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    findPeopleByQueryService = module.get<FindPeopleByQueryService>(
      FindPeopleByQueryService,
    );
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(findPeopleByQueryService).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Find People By Query Params', () => {
    it('Should Find People By Query Params in Find method', async () => {
      // Act
      const CreatedPeopleMock = PeopleMock.CreatedPeopleSeed();

      const MockPeople = mockPeopleRepository
        .createQueryBuilder()
        .where()
        .getMany();

      expect(MockPeople).toEqual(CreatedPeopleMock);
    });
  });
});
