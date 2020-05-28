import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: []
    };

    this.deleteTodo = this.deleteTodo.bind(this)
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }))
  }

  deleteTodo = (theTodo) => {
    const todo = theTodo
    const url = `http://localhost:3001/todos/${todo.id}`

    fetch(url, { method: 'DELETE' }).then(_ => this.loadTodos())
  }



  render() {
    const todoList = this.state.todos

    return (
      <div className="container">
        <h1>Todo Form</h1>
        <TodoForm />

        <h1>Todo List</h1>
        <TodoList todos={todoList} onDeleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
