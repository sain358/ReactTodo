import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(Todo);
    });
    it('should dispatch UPDATE_TODO action on click', function () {
        var data = {
            id: 11,
            text: "Walk a dog",
            completed: false,
        };
        var action = actions.startToggleTodo(data.id, !data.completed);
        var spy = jasmine.createSpy();
        var todo = ReactTestUtils.renderIntoDocument(<Todo {...data} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        ReactTestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
});
