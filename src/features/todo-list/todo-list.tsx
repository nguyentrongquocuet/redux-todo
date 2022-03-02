import { Col, Row } from 'antd';
import React from 'react';
import { ITodo } from '@/types';

interface ITodoListProps {
  todoList: ITodo[];
  renderItem: (todo: ITodo) => React.ReactNode;
}

const TodoList: React.FC<ITodoListProps> = ({ renderItem, todoList }) => (
  <Row>
    <Col span={24}>
      {todoList.map(renderItem)}
    </Col>
  </Row>
);

export {
  TodoList,
};
