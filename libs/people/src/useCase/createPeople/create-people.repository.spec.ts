/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { AddressEntity } from '@address/address/infra/typeORM/entities/address.entity';
import { AddressRepository } from '@address/address/infra/typeORM/repositories/address.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { CreatePeopleService } from './create-people.service';

describe('People', () => {
  let createPeopleService: CreatePeopleService;
  let peopleRepository: PeopleRepository;
  let addressRepository: AddressRepository;

  const mockAddressRepository = {
    findOne: jest.fn(),
  };

  const mockPeopleRepository = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePeopleService,
        PeopleRepository,
        AddressRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: mockAddressRepository,
        },
      ],
    }).compile();

    createPeopleService = module.get<CreatePeopleService>(CreatePeopleService);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
    addressRepository = module.get<AddressRepository>(AddressRepository);
  });

  it('Should be defined', () => {
    expect(createPeopleService).toBeDefined();
    expect(peopleRepository).toBeDefined();
    expect(addressRepository).toBeDefined();
  });
  describe('Create people', () => {
    it('Create new people with address', async () => {
      const Mock = PeopleMock.CreatePeopleSeed();

      mockPeopleRepository.create.mockResolvedValue(Mock);

      mockPeopleRepository.save.mockResolvedValue(Mock);

      const result = await peopleRepository.create(Mock);

      // Assert
      expect(Mock).toEqual(result);
      expect(mockPeopleRepository.create).toBeCalledTimes(1);
      expect(mockPeopleRepository.save).toBeCalledTimes(1);
    });
  });
});
