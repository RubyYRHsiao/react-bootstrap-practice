import React, { useState } from 'react';

export const NewTodoForm = (props: { addTodo: Function }) => {

  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState('');

  const submitTodo = () => {
    if (description !== '' && assigned !== '') {
      props.addTodo(description, assigned);
      setDescription('');
      setAssigned('');
    }
  }

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input type="text"
                 className="form-control"
                 required
                 onChange={event => setAssigned(event.target.value)}
                 value={assigned}>
          </input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control"
                    rows={3}
                    required
                    onChange={event => setDescription(event.target.value)}
                    value={description}>
          </textarea>
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add todo</button>
      </form>
    </div>
  )
}