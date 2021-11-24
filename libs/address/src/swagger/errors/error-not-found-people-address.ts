import { ApiProperty } from '@nestjs/swagger';

class ErrorNotFoundPeopleAddress {
  @ApiProperty({
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Entidade não encontrada',
  })
  message: string;

  @ApiProperty({
    example: 'Not Found',
  })
  error: string;
}

export { ErrorNotFoundPeopleAddress };
