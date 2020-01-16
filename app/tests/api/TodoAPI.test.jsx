import ReactTestUtils from "react-dom/test-utils";
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', function () {
        ReactTestUtils.isElement(TodoAPI);
    });

    describe('setTodos', () => {
        it('should set valid todos array', function () {
            TodoAPI.setTodos(todos);
            var storedData = JSON.parse(localStorage.getItem('todos'));
            expect(storedData).toEqual(todos);
        });

        it('should not set invalid todos array', function () {
            var data = {1: 2};
            TodoAPI.setTodos(data);
            var storedData = JSON.parse(localStorage.getItem('todos'));
            expect(storedData).toEqual(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad data', function () {
            expect(TodoAPI.getTodos()).toEqual([]);
        });

        it('should return todos if valid data', function () {
            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoAPI.getTodos()).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        it('should return all items if showCompleted is true', function () {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(2);
        });

        it('should return non-completed if showCompleted is false', function () {
            var filterTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filterTodos.length).toBe(1);
        });

        it('should sort by completed status', function () {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos[0].completed).toBe(false);
            expect(filterTodos[0].id).toBe(22);
        });

        it('should filter todos by searchText', function () {
            var filterTodos = TodoAPI.filterTodos(todos, true, 'Walk');
            expect(filterTodos.length).toBe(1);
            expect(filterTodos[0].id).toBe(11);
        });
    });
});

const todos = [
    {
        id: 11,
        text: "Walk a dog",
        completed: true,
    },
    {
        id: 22,
        text: "Hate a cat",
        completed: false,
    }
];
