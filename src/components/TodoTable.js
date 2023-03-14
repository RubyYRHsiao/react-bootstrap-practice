import TodoRowItems from "./TodoRowItems";

const TodoTable = (props) => {
  return (
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
        rowNumber={props.todos[0].rowNumber}
        rowDescription={props.todos[0].rowDescription}
        rowAssigned={props.todos[0].rowAssigned}
      />
      <TodoRowItems
        rowNumber={props.todos[1].rowNumber}
        rowDescription={props.todos[1].rowDescription}
        rowAssigned={props.todos[1].rowAssigned}
      />
      <TodoRowItems
        rowNumber={props.todos[2].rowNumber}
        rowDescription={props.todos[2].rowDescription}
        rowAssigned={props.todos[2].rowAssigned}
      />
      </tbody>
    </table>
  )
}

export default TodoTable;