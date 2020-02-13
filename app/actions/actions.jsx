import {firebaseRef} from "_firebase";
import moment from "moment";

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdOn: moment().unix(),
            completedOn: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    }
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var todosRef = firebaseRef.child('todos');
        return todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};
            var parseTodos = [];
            Object.keys(todos).forEach((todoId) => {
                parseTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            dispatch(addTodos(parseTodos));
        });
    }
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedOn: completed ? moment().unix() : null
        };
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    }
};
