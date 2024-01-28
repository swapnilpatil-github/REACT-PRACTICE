import React, { useState } from 'react';

function Input({ addTodo }) {
  const [todoInput, setTodoInput] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleDueDate = (event) => {
    setTodoDate(event.target.value);
  };

  const handleSubmit = () => {
    if (todoInput.trim() !== '') {
      const newTodo = todoInput;
      const dueDate = todoDate;
      addTodo(newTodo, dueDate);
      setTodoInput('');
      setTodoDate('');
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter todo here'
        value={todoInput}
        onChange={handleInput}
      />
      <input
        type='date'
        value={todoDate}
        onChange={handleDueDate}
      />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
}

export default Input;