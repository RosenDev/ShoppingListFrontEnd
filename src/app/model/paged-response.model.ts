export interface PagedResponse<T> {
  result: T[];
  page: number;
  size: number;
  totalRecords: number;
}
