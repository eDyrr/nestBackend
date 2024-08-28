import { Repository } from 'typeorm';
import { Chapter } from './entity/chapter.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { ModulesService } from 'src/_modules/_modules.service';
export declare class ChaptersService {
    private readonly chapterRepository;
    private readonly modulesService;
    constructor(chapterRepository: Repository<Chapter>, modulesService: ModulesService);
    findAll(): Promise<Chapter[]>;
    findById(id: number): Promise<Chapter>;
    createChapter(createdChapter: CreateChapterDto, module_id: number): Promise<Chapter>;
    deleteChapter(chapter_id: number): Promise<void>;
}
