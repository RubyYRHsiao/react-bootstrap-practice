import './App.css';
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: 'task1', rowAssigned: 'user1' },
    { rowNumber: 2, rowDescription: 'task2', rowAssigned: 'user2' },
    { rowNumber: 3, rowDescription: 'task3', rowAssigned: 'user3' }
  ];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todolist
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
