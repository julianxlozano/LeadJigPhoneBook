import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
          
                <form className="search-bar col d-flex justify-content-center">
                <div class="form-group">
                </div>
                    <div class="form-group search-bar">
                    <input type="text" className="form-control" id="staticEmail2" value="search here"></input>
                    </div>
                    <div class="form-group search-bar">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Search By...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        </div>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                </form>

        );
    }
}

export default SearchBar;