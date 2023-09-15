import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './createPessoas.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoasRepository {
  constructor(private prisma: PrismaService) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    return this.prisma.pessoa.create({
      data: createPessoaDto,
    });
  }

  findById(id: string): Promise<Pessoa> {
    return this.prisma.pessoa.findUnique({
      where: { id },
    });
  }

  async findByTerm(): Promise<Pessoa> {
    return null;
  }

  async count(): Promise<number> {
    return this.prisma.pessoa.count();
  }
}
