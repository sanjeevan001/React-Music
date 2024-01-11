// import {
//   faBackward,
//   faForward,
//   faPlay,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";

// function Controls() {
//   return (
//     <div className="my-player--controls">
//       Controls
//       <button className="skip-btn">
//         <FontAwesomeIcon icon={faBackward} />
//       </button>
//       <button className="play-btn">
//         <FontAwesomeIcon icon={faPlay} />
//       </button>
//       <button className="skip-btn">
//         <FontAwesomeIcon icon={faForward} />
//       </button>
//     </div>
//   );
// }

// export default Controls;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const Controls = ({ skipSong, isPlaying, setIsPlaying }) => {
  return (
    <div className="my-player--controls">
      <button className="skip-btn" onClick={() => skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn">
        <FontAwesomeIcon icon={faForward} onClick={() => skipSong()} />
      </button>
    </div>
  );
};

export default Controls;
