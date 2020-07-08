import React, {Component} from 'react';

class AddTodo extends Component{
    state = {
        id: null,
        content: ""
    }
    taskChange = (e) => {
        const id = Math.random();
        this.setState({
            id,
            content: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault();      
        this.props.addTodo(this.state)
        this.setState({
            content: ""
        })
    }
    render(){
        return(
            <form id="NewTask" onSubmit={this.submitForm}>
                <label> New Task </label>
                <input type="text" onChange={this.taskChange} value= {this.state.content}/> 
            </form>
        )
    }
}

export default AddTodo;
