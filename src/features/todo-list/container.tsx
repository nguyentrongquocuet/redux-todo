import React from 'react';
import { allTodoSelector } from '@/app/store/selectors';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { TodoList } from './todo-list';
import { Todo } from '../todo';
import { toggleStatus } from './store';

const MemorizedTodo = React.memo(Todo);

const TodoListContainer = () => {
  const todoList = useAppSelector(allTodoSelector);
  const dispatch = useAppDispatch();

  const onToggleStatus = React.useCallback((id: string) => {
    dispatch(toggleStatus(id));
  }, [dispatch]);

  return (
    <TodoList
      todoList={todoList}
      renderItem={(todo) => (
        <MemorizedTodo key={todo.id} {...todo} onToggleStatus={onToggleStatus} />
      )}
    />
  );
};

export { TodoListContainer };
