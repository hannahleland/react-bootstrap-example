import React from 'react';

function TodoButton(props){
    if (props.completed === true) {
        return (<button onClick={() => props.actions.delete(props.todoId)} type="button" className="btn btn-primary">Delete</button>);
    } else {
        return (<button onClick={() => props.actions.markComplete(props.todoId)} type="button" className="btn btn-primary">Complete</button>);
    }
}

export default TodoButton;