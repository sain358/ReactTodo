import 'styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import TodoApp from 'TodoApp';
import Login from 'Login';
import Register from "Register";
import Spinner from "Spinner";
import {getStore} from './store';
import * as actions from 'actions';
import firebase, {getCurrentUser} from "_firebase";

class App extends React.Component {

    state = {
        isLoading: true,
        isAuthenticated: false
    };

    componentDidMount() {
        getCurrentUser().then(
            (result) => this.setState({isLoading: false}),
            (error) => console.log(error)
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.store.dispatch(actions.login(user.uid));
                this.props.store.dispatch(actions.startAddTodos());
                this.setState({isAuthenticated: true});
            } else {
                this.props.store.dispatch(actions.logout());
                this.setState({isAuthenticated: false});
            }
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner show/>
            )
        } else {
            return (
                <div className="container">
                    <Provider store={this.props.store}>
                        <Router>
                            <Route exact path="/" render={() => this.state.isAuthenticated ? <Redirect to="/todos"/> : <Login/>}/>
                            <Route path="/register" render={() => this.state.isAuthenticated ? <Redirect to="/todos"/> : <Register/>}/>
                            <Route path="/todos" render={() => this.state.isAuthenticated ? <TodoApp/> : <Redirect to="/"/>}/>
                        </Router>
                    </Provider>
                </div>
            );
        }
    }
}

ReactDOM.render(<App store={getStore()}/>, document.getElementById('app'));
