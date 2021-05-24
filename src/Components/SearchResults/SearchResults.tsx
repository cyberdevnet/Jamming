import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";
import { trackInterface } from "../App/App";

type Props = {
  onAdd: (track: trackInterface) => void;
  searchResults: any;
  onRemove: (track: trackInterface) => void;
};

const SearchResults: React.FC<Props> = ({ onAdd, searchResults, onRemove }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList onAdd={onAdd} onRemove={onRemove} isRemoval={false} tracks={searchResults} />
    </div>
  );
};

export default SearchResults;
