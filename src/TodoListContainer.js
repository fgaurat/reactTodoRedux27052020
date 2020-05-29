import TodoList from './TodoList';
import { connect } from 'react-redux';
import { loadTodos,deleteTodo } from './actions/todo.actions';

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    onDeleteTodo: todo => dispatch(deleteTodo(todo)),
    loadTodos: _ => dispatch(loadTodos())
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer