




export const loadTodos = () => {

    return async (dispatch) => {
        const response = await fetch('http://localhost:3001/todos')
        const todos = await response.json()
        const action = { type:'TODO_LOADED', payload:todos}
        dispatch(action)
    }

}
