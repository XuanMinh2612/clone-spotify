import React from "react";

function Plays({ items }) {
  return (
    <div className="bg-yellow-200 h-20 w-full absolute bottom-0 flex flex-row justify-between">
      <div></div>
      <div>
        <audio src={items?.hub?.actions?.[1]?.uri} controls />
      </div>
      <div></div>
    </div>
  );
}

export default Plays;
