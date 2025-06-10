import { Test, TestingModule } from '@nestjs/testing';
import { HortifrutiController } from './hortifruti.controller';
import { HortifrutiService } from './hortifruti.service';

describe('HortifrutiController', () => {
  let controller: HortifrutiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HortifrutiController],
      providers: [HortifrutiService],
    }).compile();

    controller = module.get<HortifrutiController>(HortifrutiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
