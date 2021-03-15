import React from 'react';
import './Todo.css';
import TodoButton from './TodoButton';

function Todo(props) {
    return (
        <div className="todo-wrapper"><span>{props.todo.title}</span><TodoButton actions={props.actions} completed={props.todo.completed} todoId={props.todo.id} /></div>
    );
}

export default Todo;