import { Chapter } from './../../chapters/entity/chapter.entity';
import { Specialty } from 'src/specialties/entity/specialty.entity';
import { Problem } from 'src/problems/entity/problem.entity';
export declare class Module {
    id: number;
    name: string;
    specialty: Specialty;
    chapters: Chapter[];
    problems: Problem[];
}
