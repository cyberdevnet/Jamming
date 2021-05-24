import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
import { trackInterface } from "../App/App";

type Props = {
  onAdd: (track: trackInterface) => void;
  onRemove: (track: trackInterface) => void;
  tracks: trackInterface[];
  isRemoval: boolean;
};

const TrackList: React.FC<Props> = ({ isRemoval, onAdd, onRemove, tracks }) => {
  return (
    <div className="TrackList">
      {tracks.map((track: any) => {
        return (
          <Track
            onAdd={onAdd}
            onRemove={onRemove}
            track={track}
            key={track.id}
            isRemoval={isRemoval}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
