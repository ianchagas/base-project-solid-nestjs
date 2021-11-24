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

import { UpdateAddressService } from './update-address.service';

describe('Address', () => {
  let updateAddressService: UpdateAddressService;
  let addressRepository: AddressRepository;
  let peopleRepository: PeopleRepository;

  const mockAddressRepository = {
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

  const mockPeopleRepository = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateAddressService,
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

    updateAddressService =
      module.get<UpdateAddressService>(UpdateAddressService);
    addressRepository = module.get<AddressRepository>(AddressRepository);
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(updateAddressService).toBeDefined();
    expect(addressRepository).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Update Address', () => {
    it('Should Update Address in update method', async () => {
      // Act
      const CreatedAddress = AddressMock.CreateAddressSeed();
      const CreatedPeople = PeopleMock.CreatedPeopleSeed().id;

      mockPeopleRepository.findOne.mockResolvedValue(CreatedPeople);
      mockAddressRepository.create.mockResolvedValue(CreatedAddress);

      const Mock = mockAddressRepository
        .createQueryBuilder()
        .update()
        .where()
        .returning()
        .execute();
      const result = await addressRepository.update(CreatedAddress);

      // Assert
      expect(
        mockAddressRepository.create.mockResolvedValue(CreatedAddress),
      ).toBeCalledTimes(1);
      expect(result).toEqual(Mock);
    });
  });
});
