import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';

@Module({
  imports: [],
  controllers: [PessoasController],
  // providers: [AppService],
})
export class PessoasModule {}
