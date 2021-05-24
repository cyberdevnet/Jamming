import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
import { trackInterface } from "../App/App";

type Props = {
  playlistName: any;
  playlistTracks: trackInterface[];
  onNameChange: (name: string) => void;
  onRemove: (track: trackInterface) => void;
  onSave: () => void;
  onAdd: (track: trackInterface) => void;
};

const Playlist: React.FC<Props> = ({
  playlistName,
  playlistTracks,
  onNameChange,
  onRemove,
  onSave,
  onAdd,
}) => {
  function handleNamechange(event: any) {
    onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNamechange} />
      <TrackList
        onAdd={onAdd}
        onRemove={onRemove}
        isRemoval={true}
        // playlistName={playlistName}
        tracks={playlistTracks}
      />
      <button onClick={onSave} className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
