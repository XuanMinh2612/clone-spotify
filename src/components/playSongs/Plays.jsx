import React, { useEffect } from "react";

function Plays({ song }) {
  useEffect(() => {
    const audioElement = document.getElementById("audio");
    let uri = "";

    if (song?.hub?.actions?.[1]?.uri) {
      uri = song.hub.actions[1].uri;
    } else if (song?.hub?.options?.[1]?.actions?.[1]?.uri) {
      uri = song.hub.options[0].actions[1].uri;
    }

    if (uri) {
      audioElement.src = uri;
      audioElement.play();
    }
  }, [song]);

  return (
    <div className="bg-black h-20 w-3/5 absolute bottom-0 flex flex-row justify-between items-center">
      <div></div>
      <div className="">
        <audio id="audio" controls className="" />
      </div>
      <div></div>
    </div>
  );
}

export default Plays;
