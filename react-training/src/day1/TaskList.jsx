/* 5.Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks. */
import React from 'react';

const TaskList = ({ tasks }) => (
  <div>
    <h2>Task List</h2>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  </div>
);

export default TaskList;
