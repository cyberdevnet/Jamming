import React, { useState } from "react";
import Spotify from "../../util/Spotify";
import { trackInterface } from "../App/App";

import "./SearchBar.css";

type Props = {
  setsearchResults: any;
};

const SearchBar: React.FC<Props> = ({ setsearchResults }) => {
  const [term, setterm] = useState("");

  function handleTermChange(event: any) {
    setterm(event.target.value);
  }

  function search() {
    Spotify.search(term).then((searchResults) => {
      setsearchResults(searchResults as trackInterface[]);
    });
  }

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
      <button type="button" onClick={search} className="SearchButton">
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
