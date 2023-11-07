export interface PagingDataResponse<T> {
  paging: {
    hasNext: boolean;
    size: number;
    nextCursor: number;
    nextCursorId: number;
  },
  body: T[];
}
