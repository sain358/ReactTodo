import 'styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import TodoApp from 'TodoApp';
import {getStore} from './store';
import * as actions from 'actions';

const store = getStore();

store.dispatch(actions.startAddTodos());

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
