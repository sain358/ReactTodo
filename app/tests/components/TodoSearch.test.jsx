import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch:', () => {
    it('should exist', () => {
        ReactTestUtils.isElement(TodoSearch);
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        var searchText = 'test text';
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText
        };
        var spy = jasmine.createSpy();
        var todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        ReactTestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checked', () => {
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"
        };
        var spy = jasmine.createSpy();
        var todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
