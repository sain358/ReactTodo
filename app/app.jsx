import 'styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import TodoApp from 'TodoApp';
import {getStore} from './store';
import * as actions from 'actions';
import TodoAPI from 'TodoAPI';

const store = getStore();
store.subscribe(() => {
   var state = store.getState();
   TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={TodoApp}/>
            </Router>
        </Provider>
    </div>
    ,
    document.getElementById('app')
);
