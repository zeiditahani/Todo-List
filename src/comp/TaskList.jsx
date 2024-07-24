import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTaskCompletion, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleTaskCompletion={() => toggleTaskCompletion(index)}
          removeTask={() => removeTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;