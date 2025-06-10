import { Test, TestingModule } from '@nestjs/testing';
import { HortifrutiService } from './hortifruti.service';

describe('HortifrutiService', () => {
  let service: HortifrutiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HortifrutiService],
    }).compile();

    service = module.get<HortifrutiService>(HortifrutiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
