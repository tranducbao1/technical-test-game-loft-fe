export interface ApiResponseType<T> {
  data: T;
  message?: string;
  statusCode?: string;
  meta?: any;
  error?: any;
}

export type Callback = (..._args: any[]) => void;
