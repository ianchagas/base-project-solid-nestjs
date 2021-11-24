/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { DeletePeopleService } from './delete-people.service';

describe('People', () => {
  let deletePeopleService: DeletePeopleService;
  let peopleRepository: PeopleRepository;

  const mockPeopleRepository = {
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeletePeopleService,
        PeopleRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    deletePeopleService = module.get<DeletePeopleService>(DeletePeopleService);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(deletePeopleService).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Delete People', () => {
    it('Should delete People in delete method', async () => {
      // Act
      const People = PeopleMock.CreatePeopleSeed().id;

      await peopleRepository.findById(People).catch((e) => {
        expect(e).toBeInstanceOf(NotFoundException);
      });

      await peopleRepository.delete(People).catch((e) => {
        expect(e).toBeInstanceOf(NotFoundException);
      });

      // Assert
      expect(mockPeopleRepository.delete).toBeCalledTimes(1);
    });
  });
});
