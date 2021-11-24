/* eslint-disable no-useless-return */
import { Repository, UpdateResult } from 'typeorm';

import { AddressDto } from '@address/address/dto/request/address.dto';
import { IAddressRepository } from '@address/address/implementations/address.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AddressEntity } from '../entities/address.entity';

@Injectable()
class AddressRepository implements IAddressRepository {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) {}

  async create(CreateAddress: AddressDto): Promise<AddressEntity> {
    const CreatedAddress = this.addressRepository.create(CreateAddress);
    const SaveAddress = this.addressRepository.save(CreatedAddress);

    return SaveAddress;
  }

  async update({
    id_people,
    street,
    district,
    city,
    uf,
    number,
    complement,
    comments,
  }: AddressDto): Promise<UpdateResult> {
    const UpdateAddress = this.addressRepository.create({
      id_people,
      street,
      district,
      city,
      uf,
      number,
      complement,
      comments,
    });

    const Update = await this.addressRepository
      .createQueryBuilder()
      .update(UpdateAddress)
      .where({ id_people })
      .returning([
        'id',
        'id_people',
        'street',
        'district',
        'city',
        'uf',
        'number',
        'complement',
        'comments',
        'created_at',
        'updated_at',
      ])
      .execute();

    return Update;
  }

  async delete(id: string): Promise<void> {
    try {
      const DeleteAddress = await this.addressRepository.delete({
        id_people: id,
      });
      const { affected } = DeleteAddress;

      if (affected === 0) {
        throw new NotFoundException(
          'Não é possível excluir. Entidade relacionada ao endereço não existe',
        );
      }
    } catch (Error) {
      throw new NotFoundException(
        'Não é possível excluir. Entidade relacionada ao endereço não existe',
      );
    }
  }
}

export { AddressRepository };
