/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
import { Repository, UpdateResult } from 'typeorm';

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeopleDto } from '@people/people/dto/request/people.dto';
import { QueryPeopleDto } from '@people/people/dto/request/query-people.dto';
import { IPeopleRepository } from '@people/people/implementations/people.interface';

import { PeopleEntity } from '../entities/people.entity';

@Injectable()
class PeopleRepository implements IPeopleRepository {
  constructor(
    @InjectRepository(PeopleEntity)
    private peopleRepository: Repository<PeopleEntity>,
  ) {}

  async create(CreatePeople: PeopleDto): Promise<PeopleEntity> {
    const CreatedPeople = this.peopleRepository.create(CreatePeople);
    const SavePeople = await this.peopleRepository.save(CreatedPeople);

    return SavePeople;
  }

  async findById(id: string): Promise<PeopleEntity> {
    try {
      const FindPeopleById = await this.peopleRepository.findOne({
        where: {
          id,
        },
      });

      return FindPeopleById;
    } catch (Error) {
      throw new NotFoundException('Entidade não encontrada');
    }
  }

  async update({
    id,
    name,
    email,
    cpf,
    cnpj,
    ie,
    corporate_name,
    fantasy_name,
    comments,
  }: PeopleDto): Promise<UpdateResult> {
    const UpdatePeople = this.peopleRepository.create({
      name,
      email,
      cpf,
      cnpj,
      ie,
      corporate_name,
      fantasy_name,
      comments,
    });

    const Update = await this.peopleRepository
      .createQueryBuilder()
      .update(UpdatePeople)
      .where({ id })
      .returning([
        'id',
        'name',
        'email',
        'cpf',
        'cnpj',
        'ie',
        'corporate_name',
        'fantasy_name',
        'comments',
        'created_at',
        'updated_at',
      ])
      .execute();

    return Update;
  }

  async delete(id: string): Promise<void> {
    try {
      const DeletePeople = await this.peopleRepository.delete({ id });
      const { affected } = DeletePeople;

      if (affected === 0) {
        throw new NotFoundException(
          'Não é possível excluir. Entidade não existe.',
        );
      }
    } catch (Error) {
      throw new NotFoundException(
        'Não é possível excluir. Entidade não existe.',
      );
    }
  }

  async findAll(): Promise<PeopleEntity[]> {
    return this.peopleRepository.find();
  }

  async findAllWithAddress(): Promise<PeopleEntity[]> {
    return this.peopleRepository.find({
      relations: ['address'],
    });
  }

  async findPeopleByQueryWithAddress({
    id,
    name,
    email,
    cpf,
    cnpj,
    ie,
    corporate_name,
    fantasy_name,
    comments,
  }: QueryPeopleDto): Promise<PeopleEntity[]> {
    try {
      const FindWithQueryParams = this.peopleRepository
        .createQueryBuilder('people')
        .leftJoinAndSelect('people.address', 'address');
      if (id) {
        FindWithQueryParams.where('people.id = :id', { id });
      }

      if (name) {
        FindWithQueryParams.where('people.name like :name', {
          name: `%${name}%`,
        });
      }

      if (email) {
        FindWithQueryParams.where('people.email like :email', {
          email: `%${email}%`,
        });
      }

      if (cpf) {
        FindWithQueryParams.where('people.cpf like :cpf', { cpf: `%${cpf}%` });
      }

      if (cnpj) {
        FindWithQueryParams.where('people.cnpj like :cnpj', {
          cnpj: `%${cnpj}%`,
        });
      }

      if (ie) {
        FindWithQueryParams.where('people.ie like :ie', { ie: `%${ie}%` });
      }

      if (corporate_name) {
        FindWithQueryParams.where(
          'people.corporate_name like :corporate_name',
          {
            corporate_name: `%${corporate_name}%`,
          },
        );
      }

      if (fantasy_name) {
        FindWithQueryParams.where('people.fantasy_name like :fantasy_name', {
          fantasy_name: `%${fantasy_name}%`,
        });
      }

      if (comments) {
        FindWithQueryParams.where('people.comments = :comments', { comments });
      }

      const FilterPeoples = await FindWithQueryParams.getMany();
      return FilterPeoples;
    } catch (Error) {
      throw new BadRequestException('Parametro passado é inválido');
    }
  }

  async findPeopleByQuery({
    id,
    name,
    email,
    cpf,
    cnpj,
    ie,
    corporate_name,
    fantasy_name,
    comments,
  }: QueryPeopleDto): Promise<PeopleEntity[]> {
    try {
      const FindWithQueryParams =
        this.peopleRepository.createQueryBuilder('people');
      if (id) {
        FindWithQueryParams.where('people.id = :id', { id });
      }

      if (name) {
        FindWithQueryParams.where('people.name like :name', {
          name: `%${name}%`,
        });
      }

      if (email) {
        FindWithQueryParams.where('people.email like :email', {
          email: `%${email}%`,
        });
      }

      if (cpf) {
        FindWithQueryParams.where('people.cpf like :cpf', { cpf: `%${cpf}%` });
      }

      if (cnpj) {
        FindWithQueryParams.where('people.cnpj like :cnpj', {
          cnpj: `%${cnpj}%`,
        });
      }

      if (ie) {
        FindWithQueryParams.where('people.ie like :ie', { ie: `%${ie}%` });
      }

      if (corporate_name) {
        FindWithQueryParams.where(
          'people.corporate_name like :corporate_name',
          {
            corporate_name: `%${corporate_name}%`,
          },
        );
      }

      if (fantasy_name) {
        FindWithQueryParams.where('people.fantasy_name like :fantasy_name', {
          fantasy_name: `%${fantasy_name}%`,
        });
      }

      if (comments) {
        FindWithQueryParams.where('people.comments like :comments', {
          comments: `%${comments}%`,
        });
      }

      const FilterPeoples = await FindWithQueryParams.getMany();
      return FilterPeoples;
    } catch (Error) {
      throw new BadRequestException('Parametro passado é inválido');
    }
  }
}

export { PeopleRepository };
