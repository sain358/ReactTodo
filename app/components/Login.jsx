import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class Login extends React.Component {

    render() {
            return (
                <>
                    <h1 className="text-center py-4">Todo 358</h1>
                    <div className="bg-light border rounded p-3 text-center">
                        <h3 className="mb-3">Login</h3>
                        <button className="btn btn-primary w-50" onClick={this.onLogin}>Login with GitHub</button>
                    </div>
                </>
            )
        }

    onLogin = () => {
        this.props.dispatch(actions.startLogin());
    }
}

export default connect()(Login);