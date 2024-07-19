import { Injectable } from '@nestjs/common';
import { Chapter } from './chapters.module';

@Injectable()
export class ChaptersService {
    chapters: Chapter[] = [] ;

    getAllChapter(): Chapter[] {
        return this.chapters ;
    }

    getChapterById(id: number): Chapter {
        return this.chapters.find((chapter) => chapter.id === id) ;
    }

    createChapter(order: number, title: string, summary: string): Chapter {
        const id: number = this.chapters.length + 1 ;

        const chapter: Chapter = {
            id,
            order,
            title,
            summary
        } ;

        this.chapters.push(chapter) ;
        return chapter ;
    }

    deleteChapter(id: number): void {
        const _chapter: Chapter = this.getChapterById(id) ;
        if(_chapter) {
            this.chapters = this.chapters.filter((chapter) => chapter.id !== id) ;
        }
    }
}
