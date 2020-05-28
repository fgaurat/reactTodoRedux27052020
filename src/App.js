import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoForm:{
        title:'Todo 1',
        dueDate:'',
        done:true        
      }
      
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

  handleSubmit = (event)=>{
    event.preventDefault();
    const todoForm = this.state.todoForm
    const url = `http://localhost:3001/todos/`
    fetch(url,
        {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },                
            body:JSON.stringify(todoForm)
        }).then(_ => this.loadTodos())

}

handleChange = (event) => {
  event.preventDefault();
  const name = event.target.name
  const value = (name ==='done')? event.target.checked:event.target.value
  this.setState( 
      { [name]:value}
  )

}

  render() {
    const todoList = this.state.todos
    const todoForm = this.state.todoForm

    return (
      <div className="container">
        <h1>Todo Form</h1>
        <TodoForm formData={todoForm} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

        <h1>Todo List</h1>
        <TodoList todos={todoList} onDeleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
