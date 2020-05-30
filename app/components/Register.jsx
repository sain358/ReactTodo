import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {Link} from "react-router-dom";

export class Register extends React.Component {

    render() {
        return (
            <>
                <h1 className="text-center py-4">Todo 358</h1>
                <div className="bg-light border rounded auth-panel">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="email">Email address</label>
                        <input className="form-control mb-3" type="email" id="email" name="email" ref="email" placeholder="Enter email"/>
                        <label htmlFor="password1">Password</label>
                        <input className="form-control mb-3" type="password" id="password1" name="password1" ref="password1" placeholder="Enter password"/>
                        <label htmlFor="password2">Repeat password</label>
                        <input className="form-control mb-3" type="password" id="password2" name="password2" ref="password2" placeholder="Enter password"/>
                        <button className="btn btn-primary btn-block mb-3" type="submit">Register</button>
                    </form>
                    <div className="text-right mb-3">
                        Back to <Link to="/">Login</Link> page
                    </div>
                </div>
            </>
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.refs.password1.value === this.refs.password2.value) {
            this.props.dispatch(actions.startRegisterWithEmail(this.refs.email.value, this.refs.password1.value));
        } else {
            alert('Passwords does not match');
        }
    };
}

export default connect()(Register);