// TodoList.js
import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, onToggle, onRemove, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
