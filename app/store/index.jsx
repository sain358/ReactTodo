import * as redux from 'redux';
import * as reducers from 'reducers';

export var getStore = (initialState = {}) => {
    var reducer = redux.combineReducers({
        searchText: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer
    });
    return redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};