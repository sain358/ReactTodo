import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(TodoList);
    });

    it('should render one Todo component for each Todo item', () => {
        var data = {
            id: 1,
            text: "Walk a dog",
            completed: false,
        };
        var todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={[data, data, data]}/>);
        var todoComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(3)
    });
});
