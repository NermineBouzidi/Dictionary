import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [word, setword] = useState();
  return (
    <form
      onSubmit={() => {
        navigate("/word/" + word);
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setword(e.target.value);
        }}
      />
      <button>search</button>
    </form>
  );
}

export default SearchBar;
