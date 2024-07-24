import React from 'react';

const Task = ({ task, toggleTaskCompletion, removeTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={toggleTaskCompletion}>{task.text}</span>
      <button onClick={removeTask}>Remove</button>
    </li>
  );
};

export default Task;