/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';
import { PeopleRepository } from '@people/people/infra/typeORM/repositories/people.repository';
import { PeopleMock } from '@people/people/test/mock/people-mock';

import { FindAllPeopleWithAddressService } from './find-all-people-with-address.service';

describe('People', () => {
  let findAllPeopleWithAddressService: FindAllPeopleWithAddressService;
  let peopleRepository: PeopleRepository;

  const mockPeopleRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllPeopleWithAddressService,
        PeopleRepository,
        {
          provide: getRepositoryToken(PeopleEntity),
          useValue: mockPeopleRepository,
        },
      ],
    }).compile();

    findAllPeopleWithAddressService =
      module.get<FindAllPeopleWithAddressService>(
        FindAllPeopleWithAddressService,
      );
    peopleRepository = module.get<PeopleRepository>(PeopleRepository);
  });

  it('Should be defined', () => {
    expect(findAllPeopleWithAddressService).toBeDefined();
    expect(peopleRepository).toBeDefined();
  });
  describe('Find All People With Address', () => {
    it('Should Find All Peoples With Address in Find method', async () => {
      const Mock = PeopleMock.CreatedPeopleWithAddressSeed();

      mockPeopleRepository.find.mockReturnValue(Mock);

      const GetPeoplesWithAddress = await peopleRepository.findAllWithAddress();

      expect(mockPeopleRepository.find).toBeCalledTimes(1);
      expect(Mock).toEqual(GetPeoplesWithAddress);
    });
  });
});
