// import React from "react";
// import Details from "./Details";
// import Controls from "./Controls";

// function Player({ songs, currentsong, nextsong, setcurrentsong }) {
//   const title = "leo song";
//   const artist = "vijay";
//   return (
//     <div className="my-player">
//       <h4>playing noww</h4>
//       <Details currSong={songs[currentsong]} />
//       <Controls />
//       <p>
//         <span>
//           {" "}
//           {/* Nextup{title}by{artist} */}
//           {songs[nextsong]?.title} by {songs[nextsong]?.artist}
//         </span>
//       </p>
//     </div>
//   );
// }

// export default Player;

import React, { useEffect, useRef, useState } from "react";
import Details from "./Details";
import Controls from "./Controls";

const Player = ({
  songs,
  currentSongIndex,
  nextSongIndex,
  setCurrentSongIndex,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioEl = useRef(null);

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  });

  const skipSong = (isForward = true) => {
    if (isForward) {
      setCurrentSongIndex(nextSongIndex);
    } else {
      let tmp = currentSongIndex - 1;
      if (tmp < 0) {
        tmp = songs.length - 1;
      }
      setCurrentSongIndex(tmp);
    }
  };

  return (
    <div className="my-player">
      <audio src={songs[currentSongIndex].music_src} ref={audioEl} />
      <h4>Playing now</h4>
      <Details currSong={songs[currentSongIndex]} />
      <Controls
        skipSong={skipSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <p>
        Next up:{" "}
        <span>
          {songs[nextSongIndex]?.title} by {songs[nextSongIndex]?.artist}
        </span>
      </p>
    </div>
  );
};

export default Player;
