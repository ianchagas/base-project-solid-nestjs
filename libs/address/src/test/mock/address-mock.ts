import { AddressEntity } from '@address/address/infra/typeORM/entities/address.entity';

export class AddressMock {
  static CreateAddressSeed(): AddressEntity {
    const AddressSeed = new AddressEntity();

    AddressSeed.id = 'ce5b4fe3-ae74-4199-bf19-80d5cc0daee3';
    AddressSeed.street = 'Trav. Paulo Grah';
    AddressSeed.district = 'Laranjeiras';
    AddressSeed.city = 'Rio do Sul';
    AddressSeed.uf = 'SC';
    AddressSeed.number = 286;
    AddressSeed.complement = 'Longe de tudo';
    AddressSeed.comments = 'Obs de Teste';

    return AddressSeed;
  }
}
