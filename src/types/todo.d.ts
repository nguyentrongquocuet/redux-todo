enum STATUS {
  COMPLETED,
  UNCOMPLETED,
  CANCELLED,
}

enum PRIORITY {
  HIGH,
  MEDIUM,
  LOW,
}

export type TTodoStatus = keyof typeof STATUS;

export type TTodoPriority = keyof typeof PRIORITY;

export interface ITodo {
  id: string | number;
  content: string;
  created: number;
  status: TTodoStatus;
  priority: TTodoPriority;
}
