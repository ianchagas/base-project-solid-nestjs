import { UpdateResult } from 'typeorm';

import { AddressDto } from '../dto/request/address.dto';
import { AddressEntity } from '../infra/typeORM/entities/address.entity';

interface IAddressRepository {
  create(data: AddressDto): Promise<AddressEntity>;

  update(data: AddressDto): Promise<UpdateResult>;

  delete(id: string): Promise<void>;
}

export { IAddressRepository };
