import {React, useState} from "react";

function Search({setSearchText}) {
  

  function handleOnChange(e){
    setSearchText(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
