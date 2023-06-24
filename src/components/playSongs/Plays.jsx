import React from "react";

function Plays({ items }) {
  return (
    <div className="bg-black h-20 w-3/5 absolute bottom-0 flex flex-row justify-between items-center ">
      <div></div>
      <div className="">
        <audio src={items?.hub?.actions?.[1]?.uri} controls className="" />
      </div>
      <div></div>
    </div>
  );
}

export default Plays;
