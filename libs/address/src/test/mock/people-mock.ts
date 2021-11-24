import { PeopleEntity } from '@people/people/infra/typeORM/entities/people.entity';

export class PeopleMock {
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
}
