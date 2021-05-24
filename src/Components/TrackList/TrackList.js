import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";


export default function TrackList(props) {
  return (
    <div className="TrackList">
        {props.tracks.map((track) => {
          return (
            <Track
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              track={track}
              key={track.id}
              isRemoval={props.isRemoval}
            />
          );
        })}
      </div>
  );;
}


// export default class TrackList extends React.Component {
//   render() {
//     return (
//       <div className="TrackList">
//         {this.props.tracks.map((track) => {
//           return (
//             <Track
//               onAdd={this.props.onAdd}
//               onRemove={this.props.onRemove}
//               track={track}
//               key={track.id}
//               isRemoval={this.props.isRemoval}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }
