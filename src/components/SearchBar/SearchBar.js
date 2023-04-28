import React, {useState} from "react";
import SearchBar from "./SearchBar.css";

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
        </div>
    )
}

export default SearchBar;