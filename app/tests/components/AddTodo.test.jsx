import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import AddTodo from 'AddTodo';

describe('AddTodo:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(AddTodo);
    });

    it('should call onAddTodo prop with valid data', () => {
        var testText = 'test text';
        var spy = jasmine.createSpy();
        var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = testText;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(testText);
    });

    it('should not call onAddTodo prop with invalid data', () => {
        var testText = '';
        var spy = jasmine.createSpy();
        var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = testText;
        ReactTestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).not.toHaveBeenCalled();
    })
});
