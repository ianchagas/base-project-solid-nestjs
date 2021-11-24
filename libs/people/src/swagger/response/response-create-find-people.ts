import { ApiProperty } from '@nestjs/swagger';

class ResponseCreateFindPeople {
  @ApiProperty({
    example: 'Ian Chagas Salgado',
    description: 'Campo referente ao nome da entidade.',
  })
  name: string;

  @ApiProperty({
    example: 'ianchagassalgado@hotmail.com',
    description: 'Campo referente ao e-mail de contato da entidade',
  })
  email?: string;

  @ApiProperty({
    example: '46971401093',
    description: 'Campo referente ao CPF da entidade',
  })
  cpf?: number;

  @ApiProperty({
    example: '88827796000100',
    description: 'Campo referente ao CNPJ da entidade',
  })
  cnpj?: number;

  @ApiProperty({
    example: '901069094164',
    description: 'Campo referente a Inscrição Estadual da entidade',
  })
  ie?: number;

  @ApiProperty({
    example: 'Chagas Enterprise LTDA',
    description: 'Campo referente ao nome da empresa (contrato)',
  })
  corporate_name?: string;

  @ApiProperty({
    example: 'Dev.Web Ian Chagas',
    description: 'Campo referente ao nome da empresa (fantasia)',
  })
  fantasy_name?: string;

  @ApiProperty({
    example:
      'Dar atenção para a empresa X pois ela é fornecedora com os melhores preços',
    description: 'Campo referente a uma observação para empresa ou pessoa',
  })
  comments?: string;

  @ApiProperty({
    example: '73afa2db-5b62-4e5c-8618-98bc9422f043s',
    description: 'UUID da criação da informação',
  })
  id: string;

  @ApiProperty({
    type: Date,
  })
  created_at: Date;

  @ApiProperty({
    type: Date,
    default: null,
  })
  updated_at: Date;
}

export { ResponseCreateFindPeople };
