import React from 'react';
import { Row, Tag, Checkbox } from 'antd';
import { ITodo } from '@/types';

interface ITodoProps extends ITodo {
  onToggleStatus(id: ITodo['id']): void;
}

const Todo: React.FC<ITodoProps> = ({
  content, created, id, priority, status, onToggleStatus,
}) => {
  const isCompleted = status === 'COMPLETED';
  console.log('todo refreshed');

  return (<Row>
    <Checkbox onChange={() => onToggleStatus(id)} checked={isCompleted}>
      { `${content} (${created})` }
    </Checkbox>
    <Tag autoCapitalize="on">
      {priority}
    </Tag>
  </Row>);
};

export {
  Todo,
};
