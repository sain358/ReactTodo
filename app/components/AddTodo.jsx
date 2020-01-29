import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {

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
            this.refs.todoText.value = "";
            this.props.dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    };
}

export default connect()(AddTodo);
