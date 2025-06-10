import { Injectable } from '@nestjs/common';
import { CreateHortifrutiDto } from './dto/create-hortifruti.dto';
import { UpdateHortifrutiDto } from './dto/update-hortifruti.dto';

@Injectable()
export class HortifrutiService {
  create(createHortifrutiDto: CreateHortifrutiDto) {
    return 'This action adds a new hortifruti';
  }

  findAll() {
    return `This action returns all hortifruti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hortifruti`;
  }

  update(id: number, updateHortifrutiDto: UpdateHortifrutiDto) {
    return `This action updates a #${id} hortifruti`;
  }

  remove(id: number) {
    return `This action removes a #${id} hortifruti`;
  }
}
