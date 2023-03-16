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
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo]);
    console.log(todos);
  }
  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(todo => todo.rowNumber != deleteTodoRowNumber);
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todolist
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'Add New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
