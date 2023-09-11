import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreatePessoaDto } from './createPessoas.dto';

@Controller()
export class PessoasController {
  // constructor(private readonly pessoaService: PessoaService) {}

  @Post('/pessoas')
  create(@Body(new ValidationPipe()) createPessoaDto: CreatePessoaDto): string {
    // return this.pessoaService.create();
    console.log('createPessoaDto', createPessoaDto)
    console.log('typeod', typeof createPessoaDto.nascimento)
    return "create"
  }

  @Get('/pessoas/:id')
  findById(@Param('id') id: string): string {
    // return this.pessoaService.getHello();
    return `findById ${id}`
  }

  @Get('/pessoas')
  findByTerm(@Query('t') term: string) {
    // return this.pessoaService.getHello();
    return `findByTerm ${term}`
  }

  @Get('/contagem-pessoas')
  count(): string {
    // return this.pessoaService.getHello();
    return "count"
  }
}
