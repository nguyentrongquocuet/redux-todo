/* eslint-disable @typescript-eslint/default-param-last */
import { ITodo, PRIORITY, STATUS } from '@/types';
import { TAction } from './actionCreator';

const initialState:ITodo[] = [
  {
    content: 'todo1', created: 123, id: 12344, priority: PRIORITY.HIGH, status: STATUS.COMPLETED,
  },
  {
    content: 'todo2', created: 123, id: 12345, priority: PRIORITY.HIGH, status: STATUS.UNCOMPLETED,
  }
];

const todoListReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case 'todolist/togglestatus':
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;

        const { status } = todo;

        const newStatus = status === STATUS.COMPLETED ? STATUS.UNCOMPLETED : STATUS.COMPLETED;

        return {
          ...todo,
          status: newStatus,
        };
      });
    default:
      return state;
  }
};

export {
  todoListReducer,
};
