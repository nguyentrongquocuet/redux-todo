import React from 'react';
import { allTodoSelector } from '@/app/store/selectors';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { TodoList } from './todo-list';
import { Todo } from '../todo';
import { toggleStatus } from './store';

const TodoListContainer = () => {
  const todoList = useAppSelector(allTodoSelector);
  const dispatch = useAppDispatch();

  const onToggleStatus = (id: string) => {
    dispatch(toggleStatus(id));
  };

  return (
    <TodoList
      todoList={todoList}
      renderItem={(todo) => (
        <Todo key={todo.id} {...todo} onToggleStatus={onToggleStatus} />
      )}
    />
  );
};

export { TodoListContainer };
