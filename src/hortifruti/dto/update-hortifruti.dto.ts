import { PartialType } from '@nestjs/mapped-types';
import { CreateHortifrutiDto } from './create-hortifruti.dto';

export class UpdateHortifrutiDto extends PartialType(CreateHortifrutiDto) {}
