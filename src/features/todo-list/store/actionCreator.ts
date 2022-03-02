export type TToggleStatus = {
  type: 'todolist/togglestatus',
  payload: string;
};

export type TAction = TToggleStatus;

const toggleStatus = (id: string): TToggleStatus => ({ type: 'todolist/togglestatus', payload: id });

export {
  toggleStatus,
};
