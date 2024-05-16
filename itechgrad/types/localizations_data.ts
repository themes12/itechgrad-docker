import { Plans } from "./plans";

export interface LocalizationAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    plans:      Plans;
}

export interface Localization {
    id:         number;
    attributes: LocalizationAttributes;
}

export interface Localizations {
    data: Localization[];
}