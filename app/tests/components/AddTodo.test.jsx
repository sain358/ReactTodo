import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import {AddTodo} from 'AddTodo';

describe('AddTodo:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(AddTodo);
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var text = 'test text';
        var action = {
            type: "ADD_TODO",
            text
        };
        var spy = jasmine.createSpy();
        var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = text;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var text = '';
        var spy = jasmine.createSpy();
        var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = text;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).not.toHaveBeenCalled();
    })
});
