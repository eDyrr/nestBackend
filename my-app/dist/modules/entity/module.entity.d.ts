import { Chapter } from './../../chapters/entity/chapter.entity';
export declare class Module {
    id: number;
    name: string;
    specialty_id: number;
    chapters: Chapter[];
}
