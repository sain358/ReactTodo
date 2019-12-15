import './styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Main from 'Main';

ReactDOM.render(
    <div className="container">
        <Router>
            <Route exact path="/" component={Main}/>
        </Router>
    </div>
    ,
    document.getElementById('app')
);
