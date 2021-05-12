export type ValueOf<T> = T[keyof T];

export const COMPLETE_STATUS = {
  UNCOMPLETED: '-1',
  COMPLETED: '1',
} as const;

export const FILTER_COMPLETE_STATUS = {
  UNCOMPLETED: '-1',
  ALL: '0',
  COMPLETED: '1',
} as const;

export type Todo = {
  id: string;
  text: string;
  isComplete: ValueOf<typeof COMPLETE_STATUS>;
};
