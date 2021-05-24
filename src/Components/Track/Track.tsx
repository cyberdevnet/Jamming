import React from "react";
import "./Track.css";
import { trackInterface } from "../App/App";

type Props = {
  onAdd: (track: trackInterface) => void;
  onRemove: (track: trackInterface) => void;
  track: trackInterface;
  isRemoval: boolean;
};

const Track: React.FC<Props> = ({ isRemoval, onAdd, onRemove, track }) => {
  function addTrack() {
    onAdd(track);
  }

  function removeTrack() {
    onRemove(track);
  }

  function renderAction() {
    if (isRemoval) {
      return (
        <button onClick={removeTrack} className="Track-action">
          -
        </button>
      );
    } else {
      return (
        <button onClick={addTrack} className="Track-action">
          +
        </button>
      );
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
