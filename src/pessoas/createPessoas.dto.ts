import {
  IsArray,
  IsISO8601,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  @Length(1, 32)
  apelido: string;

  @IsString()
  @Length(1, 100)
  nome: string;

  @IsISO8601({ strict: true })
  // TODO
  // @Type(() => Date)
  // nascimento: Date;
  nascimento: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  stack: string[];
}
