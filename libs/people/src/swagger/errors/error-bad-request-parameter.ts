import { ApiProperty } from '@nestjs/swagger';

class ErrorBadRequestParameter {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Parametro passado é inválido',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;
}

export { ErrorBadRequestParameter };
