import { CreateHortifrutiDto } from './dto/create-hortifruti.dto';
import { UpdateHortifrutiDto } from './dto/update-hortifruti.dto';
export declare class HortifrutiService {
    create(createHortifrutiDto: CreateHortifrutiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHortifrutiDto: UpdateHortifrutiDto): string;
    remove(id: number): string;
}
