import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoApp extends React.Component {
    render() {
        return (
            <>
                <div className="float-right mt-2" onClick={this.onLogout}>
                    <a href="/">Logout</a>
                </div>
                <h1 className="text-center py-4">Todo 358</h1>
                <div className="bg-light">
                    <TodoSearch/>
                    <TodoList/>
                    <AddTodo/>
                </div>
            </>
        )
    }

    onLogout = (event) => {
        event.preventDefault();
        this.props.dispatch(actions.startLogout());
    }
}

export default connect()(TodoApp);
