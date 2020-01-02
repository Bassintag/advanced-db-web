export interface Page<T = any> {

  total: number;

  count: number;

  items: T[];

  page: number;

  size: number;
}
