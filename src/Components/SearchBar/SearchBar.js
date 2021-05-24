import React, {useState} from "react";
import Spotify from "../../util/Spotify";
import "./SearchBar.css";



export default function SearchBar(props) {
const [term, setterm] = useState("")


function handleTermChange(event) {
  setterm(event.target.value);
}


function search(e) {
  e.preventDefault();
  Spotify.search(term,e).then((searchResults) => {
    props.setsearchResults(searchResults);
  });
}


  return (
    <div className="SearchBar">
    <input
      onChange={handleTermChange}
      placeholder="Enter A Song, Album, or Artist"
    />
    <button type="button" onClick={(e) => search(e)} className="SearchButton">
      SEARCH
    </button>
  </div>
  )
}
