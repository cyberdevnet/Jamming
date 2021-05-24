import React, {useState} from "react";
import "./Track.css";



export default function Track(props) {

  function addTrack() {
    props.onAdd(props.track);
  }


  function removeTrack() {
    props.onRemove(props.track);
  }

  function renderAction() {
    if (props.isRemoval) {
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
      <h3>{props.track.name}</h3>
      <p>
        {props.track.artist} | {props.track.album}
      </p>
    </div>
    {renderAction()}
  </div>
  )
}


// export default class Track extends React.Component {
//   constructor(props) {
//     super(props);

//     this.addTrack = this.addTrack.bind(this);
//     this.removeTrack = this.removeTrack.bind(this);
//   }

//   addTrack() {
//     this.props.onAdd(this.props.track);
//   }

//   removeTrack() {
//     this.props.onRemove(this.props.track);
//   }

//   renderAction() {
//     if (this.props.isRemoval) {
//       return (
//         <button onClick={this.removeTrack} className="Track-action">
//           -
//         </button>
//       );
//     } else {
//       return (
//         <button onClick={this.addTrack} className="Track-action">
//           +
//         </button>
//       );
//     }
//   }

//   render() {
//     return (
//       <div className="Track">
//         <div className="Track-information">
//           <h3>{this.props.track.name}</h3>
//           <p>
//             {this.props.track.artist} | {this.props.track.album}
//           </p>
//         </div>
//         {this.renderAction()}
//       </div>
//     );
//   }
// }
