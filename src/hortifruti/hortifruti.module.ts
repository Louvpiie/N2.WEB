import { Module } from '@nestjs/common';
import { HortifrutiService } from './hortifruti.service';
import { HortifrutiController } from './hortifruti.controller';

@Module({
  controllers: [HortifrutiController],
  providers: [HortifrutiService],
})
export class HortifrutiModule {}
