import React, { useCallback, useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = useCallback((e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(searchInput);
    }, [props, searchInput]);

    return (
        <div className="searchDiv">
            <input
                className="searchInput"
                type="search"
                placeholder="Search a song"
                onChange={handleChange}
            />
            <button className="searchBtn" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;