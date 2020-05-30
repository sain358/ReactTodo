import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {Link} from "react-router-dom";

export class Login extends React.Component {

    render() {
        return (
            <>
                <h1 className="text-center py-4">Todo 358</h1>
                <div className="bg-light border rounded auth-panel">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="email">Email address</label>
                        <input className="form-control mb-3" type="email" id="email" name="email" ref="email" placeholder="Enter email"/>
                        <label htmlFor="password">Password</label>
                        <input className="form-control mb-3" type="password" id="password" name="password" ref="password" placeholder="Enter password"/>
                        <button className="btn btn-primary btn-block mb-1" type="submit">Login</button>
                    </form>
                    <div className="text-right mb-3">
                        Don't have an account? <Link to="/register">Register</Link>
                    </div>
                    <div className="text-center">
                        <div className="mb-3">or</div>
                        <div>
                            <button className="btn btn-secondary mb-3 mx-2" onClick={this.onLoginWithGoogle}>Login with Google</button>
                            <button className="btn btn-secondary mb-3 mx-2" onClick={this.onLoginWithGitHub}>Login with GitHub</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(actions.startLoginWithEmail(this.refs.email.value, this.refs.password.value));
    };

    onLoginWithGoogle = () => {
        this.props.dispatch(actions.startLoginWithGoogle());
    };

    onLoginWithGitHub = () => {
        this.props.dispatch(actions.startLoginWithGitHub());
    };
}

export default connect()(Login);