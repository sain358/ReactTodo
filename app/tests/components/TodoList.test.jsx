import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {Provider} from 'react-redux';
import {getStore} from "store";
import {TodoList} from 'TodoList';
import {Todo} from 'Todo';
import {TodoApp} from "TodoApp";

describe('TodoList:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(TodoList);
    });

    it('should render one Todo component for each Todo item', () => {
        var todos = [
            {
                id: 11,
                text: "Walk a dog",
                completed: false,
                createdOn: 500,
                completedOn: undefined
            },
            {
                id: 22,
                text: "Hate a cat",
                completed: false,
                createdOn: 500,
                completedOn: undefined
            }
        ];
        var store = getStore({todos});
        let appRef = React.createRef();
        ReactTestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp ref={appRef}/>
            </Provider>
        );
        var todoList = ReactTestUtils.scryRenderedComponentsWithType(appRef.current, TodoList);
        var todoComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList[0], Todo);
        expect(todoComponents.length).toBe(2)
    });
});
