import { Chapter } from './chapters.module';
export declare class ChaptersService {
    chapters: Chapter[];
    getAllChapter(): Chapter[];
    getChapterById(id: number): Chapter;
    createChapter(order: number, title: string, summary: string): Chapter;
    deleteChapter(id: number): void;
}
