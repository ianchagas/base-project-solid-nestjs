import { ApiProperty } from '@nestjs/swagger';

class ValidatorErrorsCreateOrUpdateAddress {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    example: [
      'Campo "street" enviado aninhado não pode ser vazio ou null.',
      'Campo "district" enviado aninhado não pode ser vazio ou null.',
      'Campo "city" enviado aninhado não pode ser vazio ou null.',
      'Campo "uf" enviado aninhado não pode ser vazio ou null.',
      'number must be a number conforming to the specified constraints',
      'Campo "complements" enviado aninhado não pode ser vazio ou null.',
      'Campo "comments" enviado aninhado não pode ser vazio ou null.',
      'Você precisa passar o UUID no params do tipo uuidv4',
    ],
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;
}

export { ValidatorErrorsCreateOrUpdateAddress };
