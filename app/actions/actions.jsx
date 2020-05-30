import firebase, {firebaseRef, githubProvider, googleProvider} from "_firebase";
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
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
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
        var uid = getState().auth.uid;
        var todosRef = firebaseRef.child(`users/${uid}/todos`);
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
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        var updates = {
            completed,
            completedOn: completed ? moment().unix() : null
        };
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    }
};

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
};

export var startLoginWithGitHub = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithRedirect(githubProvider).then(
            (result) => {
                console.log('Logged in');
            },
            (error) => {
                console.log('Unable to login', error);
                alert(error.message);
            })
    }
};

export var startLoginWithGoogle = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithRedirect(googleProvider).then(
            (result) => {
                console.log('Logged in');
            },
            (error) => {
                console.log('Unable to login', error);
                alert(error.message);
            })
    }
};

export var startLoginWithEmail = (email, password) => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(
            (result) => {
                console.log('Logged in');
            },
            (error) => {
                console.log('Unable to login', error);
                alert(error.message);
            })
    }
};

export var startRegisterWithEmail = (email, password) => {
    return (dispatch, getState) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(
            (result) => {
                console.log('Logged in');
            },
            (error) => {
                console.log('Unable to login', error);
                alert(error.message);
            })
    }
};

export var logout = () => {
    return {
        type: 'LOGOUT'
    }
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out');
        });
    }
};
