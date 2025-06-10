import { HortifrutiService } from './hortifruti.service';
import { CreateHortifrutiDto } from './dto/create-hortifruti.dto';
import { UpdateHortifrutiDto } from './dto/update-hortifruti.dto';
export declare class HortifrutiController {
    private readonly hortifrutiService;
    constructor(hortifrutiService: HortifrutiService);
    create(createHortifrutiDto: CreateHortifrutiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHortifrutiDto: UpdateHortifrutiDto): string;
    remove(id: string): string;
}
