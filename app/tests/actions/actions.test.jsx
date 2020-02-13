import * as actions from 'actions';

describe('Actions:', () => {
    it('should generate search text action', function () {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', function () {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: 11,
                text: "Walk a dog",
                completed: false,
                completedOn: undefined,
                createdOn: 500
            }
        };
        var res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    });

    it('should generate add todos action', function () {
        var todos =[{
            id: 11,
            text: "Walk a dog",
            completed: false,
            completedOn: undefined,
            createdOn: 500
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', function () {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should generate update todo action', function () {
        var action = {
            type: 'UPDATE_TODO',
            id: 11,
            updates: {completed: false}
        };
        var res = actions.updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });
});