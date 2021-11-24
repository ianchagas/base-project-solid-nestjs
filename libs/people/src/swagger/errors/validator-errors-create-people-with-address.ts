import { ApiProperty } from '@nestjs/swagger';

class ValidatorErrorsCreatePeopleWithAddress {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    example: [
      'Campo "name" não pode ser null ou vazio.',
      'Campo "email" não pode ser null ou vazio',
      'email must be an email',
      'cpf must be a number conforming to the specified constraints',
      'cnpj must be a number conforming to the specified constraints',
      'ie must be a number conforming to the specified constraints',
      'Campo "corporate_name" não pode ser null ou vazio.',
      'Campo "fantasy_name" não pode ser null ou vazio.',
      'Campo "comments" não pode ser null ou vazio.',
      'address.0.Campo "street" enviado aninhado não pode ser vazio ou null.',
      'address.0.Campo "district" enviado aninhado não pode ser vazio ou null.',
      'address.0.Campo "city" enviado aninhado não pode ser vazio ou null.',
      'address.0.Campo "uf" enviado aninhado não pode ser vazio ou null.',
      'address.0.number must be a number conforming to the specified constraints',
      'address.0.Campo "complements" enviado aninhado não pode ser vazio ou null.',
      'address.0.Campo "comments" enviado aninhado não pode ser vazio ou null.',
    ],
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;
}

export { ValidatorErrorsCreatePeopleWithAddress };
