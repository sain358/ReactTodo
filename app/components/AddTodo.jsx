import React from 'react';

export default class AddTodo extends React.Component {

    render() {
        return (
            <div className="border border-top-0 rounded-bottom p-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control"
                               type="text"
                               ref="todoText"
                               placeholder="What do you need to do?"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
                </form>
            </div>
        )
    };

    handleSubmit = (event) => {
        event.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.props.onAddTodo(todoText);
            this.refs.todoText.value = "";
        } else {
            this.refs.todoText.focus();
        }
    };
}
