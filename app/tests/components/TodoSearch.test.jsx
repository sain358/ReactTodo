import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TodoSearch from 'TodoSearch';

describe('TodoSearch:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(TodoSearch);
    });

    it('should call onSearch with entered input text', () => {
        var testText = 'test text';
        var spy = jasmine.createSpy();
        var todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = testText;
        ReactTestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, testText);
    });

    it('should call onSearch with checked value', () => {
        var spy = jasmine.createSpy();
        var todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
