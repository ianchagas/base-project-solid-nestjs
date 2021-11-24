import { ApiProperty } from '@nestjs/swagger';

class ErrorParseUUID {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Você precisa passar o UUID no params do tipo uuidv4',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;
}

export { ErrorParseUUID };
