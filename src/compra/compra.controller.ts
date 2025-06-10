import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CompraService } from './compra.service';
import { ProdutoDto } from './dto/produto.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('compra')
export class CompraController {
  constructor(private service: CompraService) {}

  @Get('index')
  index() {
    return this.service.listarProdutos();
  }

  @Get('buscar')
  buscar(@Query('nome') nome: string) {
    return this.service.buscarPorNome(nome);
  }

  @Get('detalhes/:id')
  detalhes(@Param('id') id: number) {
    return this.service.detalhesProduto(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('produto')
  criarProduto(@Body() dto: ProdutoDto) {
    return this.service.criarProduto(dto);
  }
}
