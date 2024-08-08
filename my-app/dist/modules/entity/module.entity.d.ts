import { Chapter } from './../../chapters/entity/chapter.entity';
import { Specialty } from 'src/specialties/entity/specialty.entity';
export declare class Module {
    id: number;
    name: string;
    specialty: Specialty;
    chapters: Chapter[];
}
