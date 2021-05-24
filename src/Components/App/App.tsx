import React, { useState } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

export type trackInterface = {
  album: string;
  artist: string;
  id: string;
  name: string;
  uri: string;
};

export default function App() {
  const [searchResults, setsearchResults] = useState([] as trackInterface[]);
  const [playlistName, setplaylistName] = useState<any>("New Playlist");
  const [playlistTracks, setplaylistTracks] = useState<trackInterface[]>([]);

  function addTrack(track: trackInterface) {
    let tracks = playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    setplaylistTracks(tracks);
  }

  const removeTrack = (track: trackInterface) => {
    let tracks = playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    setplaylistTracks(tracks);
  };

  function updatePlaylistName(name: string) {
    setplaylistName(name);
  }

  function savePlaylist() {
    const trackUris: any = playlistTracks.map((track) => track.uri);

    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setplaylistName("New Playlist");
      setplaylistTracks([]);
    });
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar setsearchResults={setsearchResults} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} onRemove={removeTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
            onAdd={addTrack}
          />
        </div>
      </div>
    </div>
  );
}
