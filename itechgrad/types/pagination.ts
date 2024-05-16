export interface Pagination {
    pagination: PaginationAttributes;
}

export interface PaginationAttributes {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}