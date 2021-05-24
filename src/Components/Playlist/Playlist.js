import React, {useState,useEffect} from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";





export default function Playlist(props) {


  function handleNamechange(event) {
    props.onNameChange(event.target.value);
  }


  return (
    <div className="Playlist">
    <input defaultValue={"New Playlist"} onChange={handleNamechange} />
    <TrackList
      onRemove={props.onRemove}
      isRemoval={true}
      playlistName={props.playlistName}
      tracks={props.playlistTracks}
    />
    <button onClick={props.onSave} className="Playlist-save">
      SAVE TO SPOTIFY
    </button>
  </div>
  )
}
