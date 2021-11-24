/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { FindPeopleByQueryWithAddressService } from './find-people-by-query-with-address.service';

describe('People', () => {
  let findPeopleByQueryWithAddressService: FindPeopleByQueryWithAddressService;
  let peopleRepository: PeopleRepository;

  const mockPeopleRepository = {
    createQueryBuilder: jest.fn(() => ({
      leftJoinAndSelect: jest.fn(() => ({
        where: jest.fn(() => ({
          getMany: jest
            .fn()
            .mockReturnValue(PeopleMock.CreatedPeopleWithAddressSeed()),
        })),
      })),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindPeopleByQueryWithAddressService,
        PeopleRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    findPeopleByQueryWithAddressService =
      module.get<FindPeopleByQueryWithAddressService>(
        FindPeopleByQueryWithAddressService,
      );
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(findPeopleByQueryWithAddressService).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Find People With Address By Query Params', () => {
    it('Should Find People With Address By Query Params in Find method', async () => {
      // Act
      const CreatedPeopleWithAddressMock =
        PeopleMock.CreatedPeopleWithAddressSeed();

      const MockPeople = mockPeopleRepository
        .createQueryBuilder()
        .leftJoinAndSelect()
        .where()
        .getMany();

      expect(MockPeople).toEqual(CreatedPeopleWithAddressMock);
    });
  });
});
