import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todolist = todos.length ?
    (
        todos.map(todo => {
            return <div class="collection-item" key={todo.id} onClick={()=>{deleteTodo(todo.id)}}>
                {todo.content}
            </div> 
        })
    ):(
        <p class="center"> Wala kang gawain ngayon, lagi naman </p>
    );
    return( 
        <div className="collection z-depth-3" id="todolist"> 
            {todolist}
        </div>
     );   
}

export default Todos;