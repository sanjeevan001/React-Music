// import "./App.css";

// import Player from "./components/Player";

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [songs, setsongs] = useState([]);

//   const [nextsong, setnextsong] = useState(0);
//   const [currentsong, setcurrentsong] = useState(0);

//   useEffect(() => {
//     let tmp = currentsong + 1;
//     if (tmp >= songs.length) {
//       tmp = 0;
//     }
//     setnextsong(tmp);
//   }, [currentsong]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const {
//           data: { data },
//         } = await axios.get(
//           "http://localhost:1337/api/music-players?populate=*"
//         );
//         console.log(data);

//         const songarray = data.map((song) => ({
//           title: song.attributes.title,
//           artist: song.attributes.artist,
//           img_src:
//             "http://localhost:1337/" +
//             song.attributes.img_src.data[0].attributes.url,
//           music_src:
//             "http://localhost:1337/" +
//             song.attributes.music_src.data[0].attributes.url,
//         }));

//         // console.log(songarray);
//         setsongs(songarray);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchdata();
//   }, []);

//   return (
//     <div>
//       <h1>sanjee</h1>
//       {/* <pre>{JSON.stringify(songs, null, 2)}</pre> */}

//       {songs.length > 0 && (
//         <Player
//           songs={songs}
//           currentsong={currentsong}
//           nextsong={nextsong}
//           setcurrentsong={setcurrentsong}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import Player from "./components/Player";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [nextSongIndex, setNextSingIndex] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    let tmp = currentSongIndex + 1;
    if (tmp >= songs.length) {
      tmp = 0;
    }
    setNextSingIndex(tmp);
  }, [currentSongIndex, songs.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          "http://localhost:1337/api/music-players?populate=*"
        );
        console.log("data---", data);
        const songArray = data.map((song) => ({
          title: song.attributes.title,
          artist: song.attributes.artist,
          img_src:
            "http://localhost:1337" +
            song.attributes.img_src.data[0].attributes.url,
          music_src:
            "http://localhost:1337" +
            song.attributes.music_src.data[0].attributes.url,
        }));
        setSongs(songArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {songs.length > 0 && (
        <Player
          songs={songs}
          currentSongIndex={currentSongIndex}
          nextSongIndex={nextSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
      )}
    </div>
  );
}

export default App;
