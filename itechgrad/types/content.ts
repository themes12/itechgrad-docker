export interface Row {
    id:      number;
    columns: Column[];
}

export interface Column {
    id:      number;
    content?: string;
}

export interface PlainTextContentType {
    id:          number;
    __component: ContentType;
    text: string
}

export interface TextContentType {
    id:          number;
    __component: ContentType;
    rows: Row[];
}

export interface HeaderTextContentType {
    id:          number;
    __component: ContentType;
    name:        string;
    text:        string;
}

export interface TableContentType {
    id:          number;
    __component: ContentType;
    name?: string;
    header?: Row;
    rows: Row[];
}

export enum ContentType {
    PlainTextContent = "content.plain-text-content",
    TableContent = "content.table-content",
    TextContent = "content.text-content",
    HeaderTextContent = "content.header-text-content",
}
