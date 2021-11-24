import { ApiProperty } from '@nestjs/swagger';

class ValidatorErrorsUpdatePeople {
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
      'Você precisa passar o UUID no params do tipo uuidv4',
    ],
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;
}

export { ValidatorErrorsUpdatePeople };
