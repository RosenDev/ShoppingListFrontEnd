/**
 * Interface representing an API response.
 * @template T The type of the result.
 */
export interface ApiResponse<T> {
  status: number;
  result: T;
  error: string;
}
