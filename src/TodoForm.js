import React from 'react';


function TodoForm(props){

        const todoForm = props.formData
        return (
            <form onSubmit={ props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" id="title" name="title" value={todoForm.title} onChange={props.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">dueDate</label>
                    <input className="form-control" type="date" id="dueDate" name="dueDate" value={todoForm.dueDate} onChange={props.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="done">Done ?</label>
                    <input className="form-control" type="checkbox" id="done" name="completed" checked={todoForm.completed} onChange={props.handleChange}/>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        )


}


export default TodoForm;


