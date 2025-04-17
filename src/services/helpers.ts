export interface ApiResponseType<T> {
  data: T;
  message?: string;
  statusCode?: string;
  meta?: any;
  error?: any;
}
