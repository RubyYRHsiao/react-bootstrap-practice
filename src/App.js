import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from "./components/NewTodoForm ";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'task1', rowAssigned: 'user1' },
    { rowNumber: 2, rowDescription: 'task2', rowAssigned: 'user2' },
    { rowNumber: 3, rowDescription: 'task3', rowAssigned: 'user3' }
  ]);

  const addTodo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todolist
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
