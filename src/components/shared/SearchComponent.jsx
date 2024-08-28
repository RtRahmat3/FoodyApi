import React, { useState } from "react";

function SearchComponent() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Here, you can add the logic to handle the search action
    console.log(`Searching for: ${searchText}`);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="border rounded-sm px-2 py-1"
        placeholder="Search here"
        value={searchText}
        onChange={handleChange}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
}

export default SearchComponent;
