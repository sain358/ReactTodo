import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TodoApp from 'TodoApp';
import {Provider} from 'react-redux';
import {getStore} from "store";
import {TodoList} from "TodoList";

describe('TodoApp:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(TodoApp);
    });

    it('should render TodoList', function () {
        var store = getStore();
        let appRef = React.createRef();
        ReactTestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp ref={appRef}/>
            </Provider>
        );
        var todoList = ReactTestUtils.scryRenderedComponentsWithType(appRef.current, TodoList);
        expect(todoList.length).toEqual(1);
    });
});
