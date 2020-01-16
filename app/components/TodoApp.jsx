import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {
    state = {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos(),
    };

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    };

    render() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <>
                <h1 className="text-center py-4">Todo 358</h1>
                <div className="bg-light">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                    <AddTodo onAddTodo={this.handleAddTodo}/>
                </div>
            </>
        )
    };

    handleSearch = (showCompleted, searchText) => {
        this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()})
    };

    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdOn: moment().unix(),
                    completedOn: undefined
                }
            ]
        });
    };

    handleToggle = (id) => {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedOn = todo.completed ? moment().unix() : undefined;
            }
            return todo
        });
        this.setState({todos: updatedTodos});
    }
}
