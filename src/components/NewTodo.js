import React from 'react';

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    handleInputChange(evt){
        //console.log(evt.target.value);
        this.setState({input: evt.target.value});
    }

    saveTodo(evt){
        console.log('save todo');
        this.props.onSaveTodo(this.state.input);
        this.setState({input: ''});
        evt.preventDefault();
    }

    render () {
        return (
            <div className="jumbotron">
                <form onSubmit={this.saveTodo}>
                    <div className="from-group">
                        <label htmlFor="todoInput">New Todo</label>
                        <input onChange={this.handleInputChange} value={this.state.input} type="text" className="form-control" id="todoInput" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodo;