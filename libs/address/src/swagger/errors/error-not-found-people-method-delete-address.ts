import { ApiProperty } from '@nestjs/swagger';

class ErrorNotFoundPeopleMethodDeleteAddress {
  @ApiProperty({
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    example: [
      'Não é possível excluir. Entidade relacionada ao endereço não existe',
      'Entidade não encontrada',
    ],
  })
  message: string;

  @ApiProperty({
    example: 'Not Found',
  })
  error: string;
}

export { ErrorNotFoundPeopleMethodDeleteAddress };
