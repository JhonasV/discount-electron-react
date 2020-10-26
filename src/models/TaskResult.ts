export interface TaskResult<T> {
  data: T;
  messages: string;
  success: boolean;
}
