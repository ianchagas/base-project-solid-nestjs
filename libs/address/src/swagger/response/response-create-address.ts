import { ApiProperty } from '@nestjs/swagger';

class ResponseCreateAddress {
  @ApiProperty({
    example: '3352db8a-a0dc-408e-bcab-580cf4d2fbc0',
    description: 'Campo referente ao UUID do cadastro da pessoa',
  })
  id_people: string;

  @ApiProperty({
    example: 'Rua Trav. Paulo Grah',
    description: 'Campo referente a rua do cadastro',
  })
  street: string;

  @ApiProperty({
    example: 'Laranjeiras',
    description: 'Campo referente ao bairro/distrito do cadastro',
  })
  district: string;

  @ApiProperty({
    example: 'Rio do Sul',
    description: 'Campo referente a cidade do cadastro',
  })
  city: string;

  @ApiProperty({
    example: 'SC',
    description: 'Campo referente a Unidade da Federação do cadastro',
  })
  uf: string;

  @ApiProperty({
    example: '286',
    description: 'Campo referente ao número do endereço do cadastro',
  })
  number: number;

  @ApiProperty({
    example: 'Ao lado do mercadinho de exemplo',
    description: 'Campo referente ao complemento do endereço',
  })
  complement?: string;

  @ApiProperty({
    example: 'Só se encontra em casa das 19hr as 21hr',
    description: 'Campo referente a uma observação ou comentário do cadastro',
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

export { ResponseCreateAddress };
