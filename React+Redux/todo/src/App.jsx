import React, { useState } from 'react';
import Heading from './components/Heading';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([]);
  const [dates, setDates] = useState([]);

  const addTodo = (newTodo, dueDate) => {
    setTodos([...todos, newTodo]);
    setDates([...dates, dueDate]);
  };

  return (
    <>
      <center>
        <Heading />
        <Input addTodo={addTodo} />
        {todos.map((todo, index) => (
          <div key={index}>
            {todo} - Due Date: {dates[index]}
          </div>
        ))}
      </center>
    </>
  );
}

export default App;