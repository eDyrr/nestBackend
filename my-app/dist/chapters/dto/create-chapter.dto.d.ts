import { studies } from './../../modules/entity/module.entity';
export declare class CreateChapterDto {
    paid: boolean;
    title: string;
    order: number;
    module: studies.Module;
}
