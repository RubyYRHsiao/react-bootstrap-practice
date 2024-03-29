import React from 'react';

export const TodoRowItems = (props: {
  rowNumber: number,
  rowDescription: string,
  rowAssigned: string,
  deleteTodo: Function
}) => {
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  )
}