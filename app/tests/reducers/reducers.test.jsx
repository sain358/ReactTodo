import * as reducers from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers:', () => {
    describe('searchTextReducer', () => {
        it('should set search text', function () {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', function () {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', function () {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo', function () {
            var todos = [{
                id: 11,
                text: 'Hate the cat',
                completed: true,
                createdOn: 123,
                completedOn: 125
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            };
            var res =  reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedOn).toEqual(undefined);
        });

        it('should add existing todos', function () {
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
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});