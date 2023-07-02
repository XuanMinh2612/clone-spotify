import React, { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

function Plays({ song }) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audioElement = document.getElementById("audio");
    let uri = "";

    if (song?.hub?.actions?.[1]?.uri) {
      uri = song.hub.actions[1].uri;
    }
    // else if (song?.hub?.options?.[1]?.actions?.[1]?.uri) {
    //   uri = song.hub.options[0].actions[1].uri;
    // }

    if (uri) {
      audioElement.src = uri;
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [song, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-black h-20 w-3/5 absolute bottom-0 flex flex-row justify-between items-center">
      <div className="flex flex-row">
        <img
          src={song?.images?.coverart}
          alt=""
          className="w-16 h-16 rounded"
        />
        <span className="flex flex-col ml-5">
          <p className="text-2xl text-white">{song?.title}</p>
          <p className="text-2xl text-white"> {song?.subtitle}</p>
        </span>
      </div>
      <div className="text-4xl text-white flex flex-row mx-2  w-44 justify-around">
        <BiSkipPrevious className="hover:scale-150 transition-transform duration-300" />
        <AiFillPlayCircle
          className="hover:scale-150 transition-transform duration-300"
          onClick={handlePlayPause}
        />
        <BiSkipNext className="hover:scale-150 transition-transform duration-300" />
        <audio id="audio" controls className="hidden" />
      </div>
      <div></div>
    </div>
  );
}

export default Plays;
