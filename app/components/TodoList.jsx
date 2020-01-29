import React from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';
import TodoAPI from 'TodoAPI';

export class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }

    renderTodos = () => {
        var {todos, showCompleted, searchText} = this.props;
        return TodoAPI.filterTodos(todos, showCompleted, searchText).map(todo => {
            return <Todo key={todo.id} {...todo}/>
        })
    }

}

export default connect(state => state)(TodoList)
