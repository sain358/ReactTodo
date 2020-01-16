import 'styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import TodoApp from 'TodoApp';

ReactDOM.render(
    <div className="container">
        <Router>
            <Route exact path="/" component={TodoApp}/>
        </Router>
    </div>
    ,
    document.getElementById('app')
);
