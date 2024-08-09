import { Repository } from 'typeorm';
import { Chapter } from './entity/chapter.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { ModulesService } from 'src/modules/modules.service';
export declare class ChaptersService {
    private readonly chaptersRepository;
    private readonly modulesService;
    constructor(chaptersRepository: Repository<Chapter>, modulesService: ModulesService);
    findAll(): Promise<Chapter[]>;
    findById(id: number): Promise<Chapter>;
    createChapter(createdChapter: CreateChapterDto, module_id: number): Promise<Chapter>;
}
