/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { AddressEntity } from '@address/address/infra/typeORM/entities/address.entity';
import { AddressRepository } from '@address/address/infra/typeORM/repositories/address.repository';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { DeleteAddressService } from './delete-address.service';

describe('Address', () => {
  let deleteAddressService: DeleteAddressService;
  let addressRepository: AddressRepository;
  let peopleRepository: PeopleRepository;

  const mockAddressRepository = {
    delete: jest.fn(),
  };

  const mockPeopleRepository = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteAddressService,
        AddressRepository,
        PeopleRepository,
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: mockAddressRepository,
        },
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    deleteAddressService =
      module.get<DeleteAddressService>(DeleteAddressService);
    addressRepository = module.get<AddressRepository>(AddressRepository);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(deleteAddressService).toBeDefined();
    expect(addressRepository).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Delete Address', () => {
    it('Should delete Address in delete method', async () => {
      // Act
      const People = PeopleMock.CreatePeopleSeed().id;

      await peopleRepository.findById(People).catch((e) => {
        expect(e).toBeInstanceOf(NotFoundException);
      });

      await addressRepository.delete(People).catch((e) => {
        expect(e).toBeInstanceOf(NotFoundException);
      });

      // Assert
      expect(mockAddressRepository.delete).toBeCalledTimes(1);
    });
  });
});
