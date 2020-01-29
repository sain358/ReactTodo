import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component {
    render() {
        return (
            <>
                <h1 className="text-center py-4">Todo 358</h1>
                <div className="bg-light">
                    <TodoSearch/>
                    <TodoList/>
                    <AddTodo/>
                </div>
            </>
        )
    }
}
