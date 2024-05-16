import { HeaderTextContentType, PlainTextContentType, TableContentType, TextContentType } from "./content";
import { Plans } from "./plans";

export interface SectionAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    content?:    Array<PlainTextContentType | TextContentType | TableContentType | HeaderTextContentType>;
    link?:       string;
}

export interface Section {
    id:         number;
    attributes: SectionAttributes;
}

export interface Sections {
    data: Section[];
}
