import './App.css';
import TodoRowItems from "./components/TodoRowItems";

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
          <table className='table table-hover'>
            <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
            </thead>
            <tbody>
            <TodoRowItems
              rowNumber={todos[0].rowNumber}
              rowDescription={todos[0].rowDescription}
              rowAssigned={todos[0].rowAssigned}
            />
            <TodoRowItems
              rowNumber={todos[1].rowNumber}
              rowDescription={todos[1].rowDescription}
              rowAssigned={todos[1].rowAssigned}
            />
            <TodoRowItems
              rowNumber={todos[2].rowNumber}
              rowDescription={todos[2].rowDescription}
              rowAssigned={todos[2].rowAssigned}
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
