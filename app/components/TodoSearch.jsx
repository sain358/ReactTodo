import React from 'react';

export default class TodoSearch extends React.Component {

    render() {
        return (
            <div className="border rounded-top p-3">
                <div className="mb-2">
                    <input className="form-control"
                           type="search"
                           ref="searchText"
                           placeholder="Search todos"
                           onChange={this.handleSearch}/>
                </div>
                <div className="custom-control custom-checkbox">
                    <input id="showCompleted"
                           className="custom-control-input"
                           type="checkbox"
                           ref="showCompleted"
                           onChange={this.handleSearch}/>
                    <label className="custom-control-label" htmlFor="showCompleted">Show completed todos</label>
                </div>
            </div>
        )
    };

    handleSearch = () => {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    };
}
