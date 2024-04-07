import React, { useState } from 'react';

// ToDoList component
const ToDoList = () => {
  // State to manage todos
  const [todos, setTodos] = useState([]);
  // State to manage new todo input
  const [newTodo, setNewTodo] = useState('');

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo(''); // Clear input field after adding todo
    }
  };

  // Function to handle toggling completion status of todo
  const handleToggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle removing todo
  const handleRemoveTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
