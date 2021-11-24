/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { AddressEntity } from '@address/address/infra/typeORM/entities/address.entity';
import { AddressRepository } from '@address/address/infra/typeORM/repositories/address.repository';
import { AddressMock } from '@address/address/test/mock/address-mock';
import { PeopleMock } from '@address/address/test/mock/people-mock';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';

import { CreateAddressService } from './create-address.service';

describe('Address', () => {
  let createAddressService: CreateAddressService;
  let peopleRepository: PeopleRepository;
  let addressRepository: AddressRepository;

  const mockPeopleRepository = {
    findOne: jest.fn(),
  };

  const mockAddressRepository = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAddressService,
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

    createAddressService =
      module.get<CreateAddressService>(CreateAddressService);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
    addressRepository = module.get<AddressRepository>(AddressRepository);
  });

  it('Should be defined', () => {
    expect(createAddressService).toBeDefined();
    expect(peopleRepository).toBeDefined();
    expect(addressRepository).toBeDefined();
  });
  describe('Create Address', () => {
    it('Create new address for existent people', async () => {
      const MockPeople = PeopleMock.CreatedPeopleSeed().id;
      const MockAddress = AddressMock.CreateAddressSeed();

      mockPeopleRepository.findOne.mockResolvedValue(MockPeople);

      mockAddressRepository.create.mockResolvedValue(MockAddress);
      mockAddressRepository.save.mockResolvedValue(MockAddress);

      const result = await addressRepository.create(MockAddress);

      // Assert
      expect(MockAddress).toEqual(result);
      expect(mockAddressRepository.create).toBeCalledTimes(1);
      expect(mockAddressRepository.save).toBeCalledTimes(1);
    });
  });
});
