import * as redux from 'redux';
import * as reducers from 'reducers';
import thunk from 'redux-thunk';

export var getStore = (initialState = {searchText: '', showCompleted: true, todos: []}) => {
    var reducer = redux.combineReducers({
        searchText: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer
    });
    return redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};