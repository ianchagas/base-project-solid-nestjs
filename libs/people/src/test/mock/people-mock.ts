import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';

import { AddressMock } from './address-mock';

export class PeopleMock {
  static CreatePeopleSeed(): PeopleEntity {
    const createPeopleSeed = new PeopleEntity();
    createPeopleSeed.id = '8ae9515e-6ce6-470c-9282-05bad3ee914e';
    createPeopleSeed.name = 'Ian Chagas';
    createPeopleSeed.email = 'ianchagassalgado@hotmail.com';
    createPeopleSeed.cpf = '46971401093';
    createPeopleSeed.cnpj = '88827796000100';
    createPeopleSeed.ie = '901069094164';
    createPeopleSeed.corporate_name = 'Empresa de Teste';
    createPeopleSeed.fantasy_name = 'Nome Fantasia de Teste';
    createPeopleSeed.comments = 'Observação de teste';
    createPeopleSeed.address = [AddressMock.CreateAddressSeed()];

    return createPeopleSeed;
  }

  static CreatedPeopleSeed(): PeopleEntity {
    const createdPeopleSeed = new PeopleEntity();
    createdPeopleSeed.id = '8ae9515e-6ce6-470c-9282-05bad3ee914e';
    createdPeopleSeed.name = 'Ian Chagas';
    createdPeopleSeed.email = 'ianchagassalgado@hotmail.com';
    createdPeopleSeed.cpf = '46971401093';
    createdPeopleSeed.cnpj = '88827796000100';
    createdPeopleSeed.ie = '901069094164';
    createdPeopleSeed.corporate_name = 'Empresa de Teste';
    createdPeopleSeed.fantasy_name = 'Nome Fantasia de Teste';
    createdPeopleSeed.comments = 'Observação de teste';

    return createdPeopleSeed;
  }

  static CreatedPeopleWithAddressSeed(): PeopleEntity {
    const createdPeopleWithAddressSeed = new PeopleEntity();
    createdPeopleWithAddressSeed.id = '8ae9515e-6ce6-470c-9282-05bad3ee914e';
    createdPeopleWithAddressSeed.name = 'Ian Chagas';
    createdPeopleWithAddressSeed.email = 'ianchagassalgado@hotmail.com';
    createdPeopleWithAddressSeed.cpf = '46971401093';
    createdPeopleWithAddressSeed.cnpj = '88827796000100';
    createdPeopleWithAddressSeed.ie = '901069094164';
    createdPeopleWithAddressSeed.corporate_name = 'Empresa de Teste';
    createdPeopleWithAddressSeed.fantasy_name = 'Nome Fantasia de Teste';
    createdPeopleWithAddressSeed.comments = 'Observação de teste';
    createdPeopleWithAddressSeed.address = [AddressMock.CreateAddressSeed()];

    return createdPeopleWithAddressSeed;
  }
}
