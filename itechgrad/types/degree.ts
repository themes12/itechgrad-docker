import { Programs } from "./program";

export interface Degree {
    id:         number;
    attributes: DegreeAttributes;
}

export interface DegreeAttributes {
    full_name:    string;
    abbreviation: string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       string;
    slug:         string;
    title:        string;
    sub_title:    string;
    programs?:     Programs;
    general_name:   string;
}