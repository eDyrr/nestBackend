import { Module } from './../../modules/entity/module.entity';
export declare class Chapter {
    id: number;
    title: string;
    order: number;
    is_paid: boolean;
    module: Module;
}
