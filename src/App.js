import './App.css';
import AppHeader from './components/AppHeader';
import React from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {todos:[]};
    this.handleMarkCompleted = this.handleMarkCompleted.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSaveTodo = this.handleSaveTodo.bind(this);
  }

  componentDidMount(){
    console.log('--componentDidMount--');
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
      return res.json();
    }).then(json => {
      this.setState({
        todos: json
      });
    });
  }

  handleMarkCompleted(id) {
    this.setState(currentState => {
      const newTodos = currentState.todos.map(todo => {
        if (todo.id === id) {
          //Mark this Complete
          return {
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: true
          };
        } else {
          return todo;
        }
      });

      return {todos: newTodos};
    });
  }

  handleDelete(id) {
    this.setState(currentState => {
      return {
        todos: currentState.todos.filter(todo => todo.id !== id)
      };
    });
  }

  handleSaveTodo(todoText) {
    let todo = {
      title: todoText,
      completed: false,
      id: Math.max(...this.state.todos.map(o => o.id)) + 1
    };
    
    this.setState(currentState => {
      return {
        todos: currentState.todos.concat([todo])
      };
    });
  }

  render(){
    const todoActions = {
      markComplete: this.handleMarkCompleted,
      delete: this.handleDelete
    };

    return (
      <div className="App">
      <div className="container">
        <AppHeader />
        <NewTodo onSaveTodo={this.handleSaveTodo} />
        <div className="row">
          <div className="col">
            <TodoList actions={todoActions} completed={false} headline="My Todos" todos={this.state.todos} />
          </div>
          <div className="col">
            <TodoList actions={todoActions} completed={true} headline="My Completed Todos" todos={this.state.todos} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
