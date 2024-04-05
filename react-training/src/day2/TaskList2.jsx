import React, { useState, useCallback } from 'react';

// Task list component
const TaskList2 = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState([
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: false },
    { id: 3, description: "Task 3", completed: false }
  ]);

  // Function to toggle task completion
  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

// Task item component
const TaskItem = ({ task, toggleTaskCompletion }) => {
  const handleCompleteTask = useCallback(() => {
    toggleTaskCompletion(task.id);
  }, [task.id, toggleTaskCompletion]);

  return (
    <div>
      <span>{task.description}</span>
      <button onClick={handleCompleteTask}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default TaskList2;
