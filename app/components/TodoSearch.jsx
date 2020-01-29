import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends React.Component {

    render() {
        return (
            <div className="border rounded-top p-3">
                <div className="mb-2">
                    <input className="form-control"
                           type="search"
                           ref="searchText"
                           placeholder="Search todos"
                           value={this.props.searchText}
                           onChange={this.handleSearch}/>
                </div>
                <div className="custom-control custom-checkbox">
                    <input id="showCompleted"
                           className="custom-control-input"
                           type="checkbox"
                           ref="showCompleted"
                           checked={this.props.showCompleted}
                           onChange={this.handleChecked}/>
                    <label className="custom-control-label" htmlFor="showCompleted">Show completed todos</label>
                </div>
            </div>
        )
    };

    handleSearch = () => {
        this.props.dispatch(actions.setSearchText(this.refs.searchText.value));
    };

    handleChecked = () => {
        this.props.dispatch(actions.toggleShowCompleted());
    };
}

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);
