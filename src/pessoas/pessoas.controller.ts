import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePessoaDto } from './createPessoas.dto';
import { PessoasService } from './pessoas.service';
import { Pessoa } from './pessoa.entity';

@Controller()
export class PessoasController {
  constructor(private readonly pessoaService: PessoasService) {}

  @Post('/pessoas')
  create(
    @Body(new ValidationPipe()) createPessoaDto: CreatePessoaDto,
  ): Promise<Pessoa> {
    return this.pessoaService.create(createPessoaDto);
  }

  @Get('/pessoas/:id')
  findById(@Param('id') id: string): Promise<Pessoa> {
    return this.pessoaService.findById(id);
  }

  @Get('/pessoas')
  findByTerm(@Query('t') term: string) {
    return `findByTerm ${term}`;
  }

  @Get('/contagem-pessoas')
  count(): Promise<number> {
    return this.pessoaService.count();
  }
}
