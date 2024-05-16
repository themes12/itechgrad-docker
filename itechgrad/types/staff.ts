export interface Staffs {
    data: Staff[];
}

export interface Staff {
    id:         number;
    attributes: StaffAttributes;
}

export interface StaffAttributes {
    name:              string;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    title:             string | null;
    affiliation:       string;
    job_type:          JobType;
    personal_web:      null | string;
    e_affiliation:     string;
    e_title:           string | null;
    e_name:            null | string;
    picture:           Picture;
    research_interest: EPosition[];
    position:          EPosition[];
    email:             Email[];
    telephone:         Telephone[];
    e_position:        EPosition[];
}


export interface EPosition {
    id:   number;
    name: string;
}

export interface Email {
    id:    number;
    email: string;
}

export enum JobType {
    Academic = "academic",
    Support = "support",
}

export interface Pictures {
    data: DataPicture[] | null;
}

export interface Picture {
    data: DataPicture | null;
}

export interface DataPicture {
    id:         number;
    attributes: DataPictureAttributes;
}

export interface DataPictureAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}


export interface Formats {
    thumbnail: Large;
    medium?:   Large;
    small?:    Large;
    large?:    Large;
}

export interface Large {
    name:   string;
    hash:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Telephone {
    id:        number;
    number:    Number;
    extension: null | string;
}