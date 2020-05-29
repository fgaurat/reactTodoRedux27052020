import TodoList from './TodoList';
import { connect } from 'react-redux';
import { loadTodos } from './actions/todo.actions';

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    onDeleteTodo: todo => dispatch({ type: "DELETE_TODO", payload: todo }),
    loadTodos: _ => dispatch(loadTodos())
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer