import React, { useState } from 'react';

const SearchBar = (props) => {


        return (
                <form onSubmit={props.searchBy}className="search-bar col d-flex justify-content-center">
                <div class="form-group">
                </div>
                    <div class="form-group search-bar">
                    <input type="text" className="form-control" id="search-term-input" placeholder="search here"></input>
                    </div>
                    <div class="form-group search-bar">
                    <select class="form-select" aria-label="Default select example" id="select-box">
                        <option selected>Search By...</option>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="phoneNumber">Phone Number</option>
                        </select>
                        </div>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                </form>

        );
 
}

export default SearchBar;