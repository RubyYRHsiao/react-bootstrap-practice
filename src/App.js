import './App.css';

function App() {
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
            <tr>
              <th scope='row'>1</th>
              <td>task1</td>
              <td>Eric</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>task2</td>
              <td>Eric</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
