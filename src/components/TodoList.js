import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    const filteredTodos = props.todos.filter(todo => todo.completed === props.completed);

    return (
        <React.Fragment>
            <h2>{props.headline}</h2>
            <ul className="list-group">
                {filteredTodos.map(todo => {
                    return (<li key={todo.id} className="list-group-item"><Todo actions={props.actions} todo={todo} /></li>);
                })}
            </ul>
        </React.Fragment>
    );
}

export default TodoList;