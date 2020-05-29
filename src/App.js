import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListContainer from './TodoListContainer';
import TodoForm from './TodoForm';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoForm: {
        title: 'Todo 1',
        dueDate: '',
        completed: true
      }

    };

  }

 

  handleSubmit = (event) => {
    event.preventDefault();
    const todoForm = this.state.todoForm
    const url = `http://localhost:3001/todos/`
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoForm)
      }).then(_ => this.loadTodos())

  }

  handleChange = (event) => {
    const name = event.target.name
    
    const value = (name === 'completed') ? event.target.checked : event.target.value
    
    let {todoForm} = this.state
    todoForm[name] = value
    this.setState({todoForm} )

  }

  render() {

    return (
      <div className="container">
        <h1>Todo List</h1>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;