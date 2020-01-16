import React from 'react';
import Todo from 'Todo'

export default class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }

    renderTodos = () => {
        return this.props.todos.map(todo => {
            return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        })
    }

}
