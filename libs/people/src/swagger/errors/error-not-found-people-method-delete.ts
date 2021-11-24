import { ApiProperty } from '@nestjs/swagger';

class ErrorNotFoundPeopleMethodDelete {
  @ApiProperty({
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Não é possível excluir. Entidade não existe',
  })
  message: string;

  @ApiProperty({
    example: 'Not Found',
  })
  error: string;
}

export { ErrorNotFoundPeopleMethodDelete };
