import React from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import girl from "../../image/girl.jpg";

function Header() {
  return (
    <div className="flex flex-row text-2xl text-white w-full h-fit bg-yellow-200 p-3 justify-between items-center ">
      <span className="flex flex-row text-2xl text-black">
        <BiLeftArrow className="hover:scale-150 transition-transform duration-300" />
        <BiRightArrow className="hover:scale-150 transition-transform duration-300 ml-2" />
      </span>
      <span className="flex flex-row ">
        <p className="text-black text-lg bg-white rounded-2xl p-1 ml-5 hover:scale-110 transition-transform duration-300">
          Explore Premium
        </p>
        <p className="text-white text-lg bg-black rounded-2xl p-1 ml-5 hover:scale-110 transition-transform duration-300">
          Install App
        </p>
        <img src={girl} alt="" className="w-9 h-9 rounded-full ml-5" />
      </span>
    </div>
  );
}

export default Header;
