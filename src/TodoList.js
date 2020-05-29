import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadTodos()
    }

    render() {
        let arr = this.props.todos.map(
            theTodo => (<TodoItem key={theTodo.id} todo={theTodo} onDeleteTodo={_ => this.props.onDeleteTodo(theTodo)} />)
        );

        return (
            <div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>dueDate</th>
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
}

export default TodoList;
