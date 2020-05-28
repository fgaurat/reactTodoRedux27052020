import React from 'react';


class TodoForm extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            title:'Todo 1',
            dueDate:'',
            done:true
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const todoForm = this.state
        const url = `http://localhost:3001/todos/`
        fetch(url,
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },                
                body:JSON.stringify(todoForm)
            })

    }

    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = (name ==='done')? event.target.checked:event.target.value
        this.setState( 
            { [name]:value}
        )

    }

    render(){
        const todoForm = this.state
        console.log(todoForm)
        return (
            <form onSubmit={ this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" id="title" name="title" value={todoForm.title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">dueDate</label>
                    <input className="form-control" type="date" id="dueDate" name="dueDate" value={todoForm.dueDate} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="done">Done ?</label>
                    <input className="form-control" type="checkbox" id="done" name="done" checked={todoForm.done} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        )

    }

}


export default TodoForm;


