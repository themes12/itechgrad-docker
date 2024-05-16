import { Localizations } from "./localizations_data";
import { Sections } from "./section";

export interface PlansAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    sections:    Sections;
    localizations: Localizations;
}

export interface Plan {
    id:         number;
    attributes: PlansAttributes;
}

export interface Plans {
    data: Plan[];
}
