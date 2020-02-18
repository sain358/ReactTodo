import * as redux from 'redux';
import * as reducers from 'reducers';
import thunk from 'redux-thunk';

var state = {
    searchText: '',
    showCompleted: true,
    todos: [],
    auth: {}
};

export var getStore = (initialState = state) => {
    var reducer = redux.combineReducers({
        searchText: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer,
        auth: reducers.authReducer
    });
    return redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};