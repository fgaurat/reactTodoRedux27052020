import React from 'react';

function TodoItem(props) {

    const todo = props.todo
    const onDeleteTodo = props.onDeleteTodo
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.dueDate}</td>
            <td>{todo.completed?'done':'! done'}</td>
            <td><button className="btn btn-danger" onClick={onDeleteTodo} >delete</button></td>
        </tr>
    );
}


export default TodoItem;
