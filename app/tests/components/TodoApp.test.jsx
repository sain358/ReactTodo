import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TodoApp from 'TodoApp';

describe('TodoApp:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(TodoApp);
    });

    it('should add todo to the todos state on handleAddTodo', function () {
        var testText = 'test text';
        var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(testText);
        expect(todoApp.state.todos[0].text).toBe(testText);
        expect(todoApp.state.todos[0].createdOn).toEqual(jasmine.any(Number));
    });

    it('should toggle completed value when handleToggle called', function () {
        var todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos});
        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedOn).toEqual(jasmine.any(Number));
    });
});

const todos = [
    {
        id: 11,
        text: "Walk a dog",
        completed: false,
    },
    {
        id: 22,
        text: "Hate a cat",
        completed: true,
    },
    {
        id: 33,
        text: "Feed the dog",
        completed: false,
    },
    {
        id: 44,
        text: "Poison the cat",
        completed: false,
    }
];

