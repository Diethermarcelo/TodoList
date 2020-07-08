import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component{
  state = {
    todos: [{
      id: 1,
      content: "Maghugas ng pinggan"
    }, {
      id: 2,
      content: "Magpakabatugan"
    }, {
      id: 3,
      content: "Kumain"
    }, {
      id: 4,
      content: "Matulog"
    }, {
      id: 5,
      content: "Maglaba"
    }, {
      id: 6,
      content: "Maglaro"
    }, {
      id: 7,
      content: "Kumain maghapon"
    }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id != id;
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  }
  render(){
    return (
      <div className="todo-content container" id="container">
        <h1 className="center white-text card-panel teal darken-2 z-depth-3" id="header"> <span> Todo List </span> </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
