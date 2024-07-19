import { Module } from '@nestjs/common';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';

export class Chapter {
  id: number ;
  order: number ;
  title: string ;
  summary: string ;
}

@Module({
  controllers: [ChaptersController],
  providers: [ChaptersService]
})
export class ChaptersModule {}
