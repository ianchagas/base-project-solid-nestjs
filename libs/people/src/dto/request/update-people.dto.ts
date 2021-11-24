import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsNotBlank } from '@shared/shared/decorators/is-not-blank.decorator';

class UpdatePeopleDto {
  @ApiHideProperty()
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty({
    example: 'Ian Chagas Salgado',
    description: 'Campo referente ao nome da entidade.',
  })
  @IsNotBlank('name', {
    message: 'Campo "name" não pode ser null ou vazio.',
  })
  name: string;

  @ApiProperty({
    example: 'ianchagassalgado@hotmail.com',
    description: 'Campo referente ao e-mail de contato da entidade',
  })
  @IsOptional()
  @IsEmail()
  @IsNotBlank('email', {
    message: 'Campo "email" não pode ser null ou vazio.',
  })
  email?: string;

  @ApiProperty({
    example: '46971401093',
    description: 'Campo referente ao CPF da entidade',
  })
  @IsOptional()
  @IsString()
  cpf?: string;

  @ApiProperty({
    example: '88827796000100',
    description: 'Campo referente ao CNPJ da entidade',
  })
  @IsOptional()
  @IsString()
  cnpj?: string;

  @ApiProperty({
    example: '901069094164',
    description: 'Campo referente a Inscrição Estadual da entidade',
  })
  @IsOptional()
  @IsString()
  ie?: string;

  @ApiProperty({
    example: 'Chagas Enterprise LTDA',
    description: 'Campo referente ao nome da empresa (contrato)',
  })
  @IsOptional()
  @IsString()
  @IsNotBlank('corporate_name', {
    message: 'Campo "corporate_name" não pode ser null ou vazio.',
  })
  corporate_name?: string;

  @ApiProperty({
    example: 'Dev.Web Ian Chagas',
    description: 'Campo referente ao nome da empresa (fantasia)',
  })
  @IsOptional()
  @IsString()
  @IsNotBlank('fantasy_name', {
    message: 'Campo "fantasy_name" não pode ser null ou vazio.',
  })
  fantasy_name?: string;

  @ApiProperty({
    example:
      'Dar atenção para a empresa X pois ela é fornecedora com os melhores preços',
    description: 'Campo referente a uma observação para empresa ou pessoa',
  })
  @IsOptional()
  @IsString()
  @IsNotBlank('comments', {
    message: 'Campo "comments" não pode ser null ou vazio.',
  })
  comments?: string;
}

export { UpdatePeopleDto };
