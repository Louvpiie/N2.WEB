import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HortifrutiService } from './hortifruti.service';
import { CreateHortifrutiDto } from './dto/create-hortifruti.dto';
import { UpdateHortifrutiDto } from './dto/update-hortifruti.dto';

@Controller('hortifruti')
export class HortifrutiController {
  constructor(private readonly hortifrutiService: HortifrutiService) {}

  @Post()
  create(@Body() createHortifrutiDto: CreateHortifrutiDto) {
    return this.hortifrutiService.create(createHortifrutiDto);
  }

  @Get()
  findAll() {
    return this.hortifrutiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hortifrutiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHortifrutiDto: UpdateHortifrutiDto) {
    return this.hortifrutiService.update(+id, updateHortifrutiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hortifrutiService.remove(+id);
  }
}
