import React from 'react';
import TodoItem from './TodoItem';


function TodoList(props) {


    let arr = props.todos.map(
        theTodo => (<TodoItem key={theTodo.id} todo={theTodo} onDeleteTodo={_ => props.onDeleteTodo(theTodo)} />)
    );

    return (
        <div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>

                    {arr}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;
