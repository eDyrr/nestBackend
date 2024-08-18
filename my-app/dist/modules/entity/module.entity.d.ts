import { Chapter } from './../../chapters/entity/chapter.entity';
import { Specialty } from 'src/specialties/entity/specialty.entity';
import { Problem } from 'src/problems/entity/problem.entity';
import { Progress } from './../../progress/entity/progress.entity';
export declare class _Module {
    id: number;
    name: string;
    specialty: Specialty;
    chapters: Chapter[];
    problems: Problem[];
    progress: Progress[];
}
