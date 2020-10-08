import React from 'react';

export default function EachEmployee(props) {
  return (
    <tr>
      <th scope="row">{props.employeeId}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.jobTitle}</td>
      <td>
        <button className="btn btn-primary view" onClick={() => { actionViewButton(props); }} >
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-badge mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10.795a4.2 4.2 0 0 1 .776-.492C4.608 12.387 5.937 12 8 12s3.392.387 4.224.803a4.2 4.2 0 0 1 .776.492V2.5A1.5 1.5 0 0 0 11.5 1h-7z"/>
            <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
          </svg>
                View
        </button>

        <button className="btn btn-danger view ml-2" onClick={() => { deleteButton(props); }} >
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-x mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
                Delete
        </button>
      </td>
    </tr>
  );
}

function actionViewButton(props) {
  props.selectedUser();
  props.setView('view-employee');
}

function deleteButton(props) {
  props.deleteEmployee(props.employeeId);
}
