import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './createPessoas.dto';
import { Pessoa } from './pessoa.entity';
import { PessoasRepository } from './pessoas.repository';

@Injectable()
export class PessoasService {
  constructor(private pessoasRepository: PessoasRepository) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    return this.pessoasRepository.create(createPessoaDto);
  }

  findById(id: string): Promise<Pessoa> {
    return this.pessoasRepository.findById(id);
  }

  async findByTerm(): Promise<Pessoa> {
    return null;
  }

  count(): Promise<number> {
    return this.pessoasRepository.count();
  }
}
