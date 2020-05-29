const todoList = []

const reducerTodos = (state={todos:todoList},action)=>{
    console.log(state,action);
    let newState = {...state}

    switch(action.type){
        case 'TODO_LOADED':
            newState.todos = action.payload
            break;

    }    
    return newState;

}

export default reducerTodos

