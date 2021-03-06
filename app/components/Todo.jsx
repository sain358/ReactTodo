import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class Todo extends React.Component {

    render() {
        return (
            <div className="border border-top-0 p-3" onClick={this.handleClick}>
                <div className="custom-control custom-checkbox">
                    <input id="completed"
                           className="custom-control-input"
                           type="checkbox"
                           ref="showCompleted"
                           checked={this.props.completed}/>
                    <label className={`custom-control-label ${this.getClass()}`}>{this.props.text}</label>
                    <small className={`form-text text-muted ${this.getClass()}`}>{this.renderDate()}</small>
                </div>
            </div>
        )
    };

    renderDate = () => {
        if (this.props.completed) {
            return <span>Completed on: {moment.unix(this.props.completedOn).format("DD.MM.YYYY @ HH:mm")}</span>
        } else {
            return <span>Created on: {moment.unix(this.props.createdOn).format("DD.MM.YYYY @ HH:mm")}</span>
        }
    };

    handleClick = () => {
        this.props.dispatch(actions.startToggleTodo(this.props.id, !this.props.completed));
    };

    getClass = () => {
        return this.props.completed && "completed"
    };
}

export default connect()(Todo);
