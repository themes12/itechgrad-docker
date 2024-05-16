import { Degree } from "./degree";
import { Localizations } from "./localizations_data";
import { Plans } from "./plans";

export interface ProgramAttributes {
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    locale?: string;
    plans: Plans;
    degree: {
        data: Degree;
    };
    localizations: Localizations;
}

export interface Program {
    id: number;
    attributes: ProgramAttributes;
}

export interface Programs {
    data: Program[];
}