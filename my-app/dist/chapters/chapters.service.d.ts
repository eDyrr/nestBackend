import { Chapter } from './entity/chapter.entity';
export declare class ChaptersService {
    chapters: Chapter[];
    getAllChapter(): Chapter[];
    getChapterById(id: number): Chapter;
    createChapter(order: number, title: string, summary: string): Chapter;
    deleteChapter(id: number): void;
}
