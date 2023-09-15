import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PessoasRepository } from './pessoas.repository';
import { PessoasService } from './pessoas.service';

@Module({
  imports: [PrismaModule],
  controllers: [PessoasController],
  providers: [PessoasRepository, PessoasService],
})
export class PessoasModule {}
