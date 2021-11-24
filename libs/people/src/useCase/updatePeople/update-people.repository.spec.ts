/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { UpdatePeopleService } from './update-people.service';

describe('People', () => {
  let updatePeopleService: UpdatePeopleService;
  let peopleRepository: PeopleRepository;

  const mockPeopleRepository = {
    create: jest.fn(),
    createQueryBuilder: jest.fn(() => ({
      update: jest.fn(() => ({
        where: jest.fn(() => ({
          returning: jest.fn(() => ({
            execute: jest.fn(),
          })),
        })),
      })),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdatePeopleService,
        PeopleRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    updatePeopleService = module.get<UpdatePeopleService>(UpdatePeopleService);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(updatePeopleService).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Update People', () => {
    it('Should Update People in update method', async () => {
      // Act
      const CreatedPeople = PeopleMock.CreatedPeopleSeed();

      mockPeopleRepository.create.mockResolvedValue(CreatedPeople);
      const Mock = mockPeopleRepository
        .createQueryBuilder()
        .update()
        .where()
        .returning()
        .execute();
      const result = await peopleRepository.update(CreatedPeople);

      // Assert
      expect(
        mockPeopleRepository.create.mockResolvedValue(CreatedPeople),
      ).toBeCalledTimes(1);
      expect(result).toEqual(Mock);
    });
  });
});
