import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsNotBlank } from '@shared/shared/decorators/is-not-blank.decorator';

class AddressDto {
  @ApiHideProperty()
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  id_people?: string;

  @ApiProperty({
    example: 'Rua Trav. Paulo Grah',
    description: 'Campo referente a rua do cadastro',
  })
  @IsString()
  @IsNotBlank('street', {
    message: 'Campo "street" enviado aninhado não pode ser vazio ou null.',
  })
  street: string;

  @ApiProperty({
    example: 'Laranjeiras',
    description: 'Campo referente ao bairro/distrito do cadastro',
  })
  @IsString()
  @IsOptional()
  @IsNotBlank('district', {
    message: 'Campo "district" enviado aninhado não pode ser vazio ou null.',
  })
  district: string;

  @ApiProperty({
    example: 'Rio do Sul',
    description: 'Campo referente a cidade do cadastro',
  })
  @IsString()
  @IsNotBlank('city', {
    message: 'Campo "city" enviado aninhado não pode ser vazio ou null.',
  })
  city: string;

  @ApiProperty({
    example: 'SC',
    description: 'Campo referente a Unidade da Federação do cadastro',
  })
  @IsString()
  @IsNotBlank('uf', {
    message: 'Campo "uf" enviado aninhado não pode ser vazio ou null.',
  })
  uf: string;

  @ApiProperty({
    example: '286',
    description: 'Campo referente ao número do endereço do cadastro',
  })
  @IsNumber()
  number: number;

  @ApiProperty({
    example: 'Ao lado do mercadinho de exemplo',
    description: 'Campo referente ao complemento do endereço',
  })
  @IsString()
  @IsOptional()
  @IsNotBlank('complement', {
    message: 'Campo "complement" enviado aninhado não pode ser vazio ou null.',
  })
  complement?: string;

  @ApiProperty({
    example: 'Só se encontra em casa das 19hr as 21hr',
    description: 'Campo referente a uma observação ou comentário do cadastro',
  })
  @IsString()
  @IsOptional()
  @IsNotBlank('comments', {
    message: 'Campo "comments" enviado aninhado não pode ser vazio ou null.',
  })
  comments?: string;
}

export { AddressDto };
