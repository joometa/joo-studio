export interface Response<T> {
  data: T;
  status: string;
  error: {
    message: string;
    code: string;
  } | null;
}
