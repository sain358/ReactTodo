import uuid from 'node-uuid';
import moment from 'moment';

export var searchTextReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_SEARCH_TEXT":
            return action.searchText;
        default:
            return state;
    }
};

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_COMPLETED":
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdOn: moment().unix(),
                    completedOn: undefined
                }
            ];
        case "ADD_TODOS":
            return [
                ...state,
                ...action.todos
            ];
        case "TOGGLE_TODO":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    var completed = !todo.completed;
                    return {
                        ...todo,
                        completed: completed,
                        completedOn: completed ? moment().unix() : undefined
                    }
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};
