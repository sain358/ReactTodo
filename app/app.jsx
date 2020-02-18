import 'styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import TodoApp from 'TodoApp';
import Login from 'Login';
import {getStore} from './store';
import * as actions from 'actions';
import firebase from "_firebase";

//TODO: replace redirection to use React history
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddTodos());
        window.location.replace('/#/todos');
    } else {
        store.dispatch(actions.logout());
        window.location.replace('/#');
    }
});

const store = getStore();

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <Router>
                <Route exact path="/" render={() => firebase.auth().currentUser ? <Redirect to="/todos"/> : <Login/>}/>
                <Route path="/todos" render={() => firebase.auth().currentUser ? <TodoApp/> : <Redirect to="/"/>}/>
            </Router>
        </Provider>
    </div>
    ,
    document.getElementById('app')
);
