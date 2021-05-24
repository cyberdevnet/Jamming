import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNamechange = this.handleNamechange.bind(this);
  }

  handleNamechange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNamechange} />
        <TrackList
          onRemove={this.props.onRemove}
          isRemoval={true}
          playlistName={this.props.playlistName}
          tracks={this.props.playlistTracks}
        />
        <button onClick={this.props.onSave} className="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
