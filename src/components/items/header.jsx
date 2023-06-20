import React from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import girl from "../../image/girl.jpg";
import { useState } from "react";

function Header() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-col bg-yellow-200 p-3 w-full h-fit rounded-t-xl">
      <div className="flex flex-row text-2xl text-white justify-between items-center px-5">
        <span className="flex flex-row text-2xl text-black">
          <BiLeftArrow className="hover:scale-150 transition-transform duration-300" />
          <BiRightArrow className="hover:scale-150 transition-transform duration-300 ml-2" />
        </span>
        <span className="flex flex-row">
          <p className="text-black text-lg bg-white rounded-2xl p-1 ml-5 hover:scale-110 transition-transform duration-300">
            Explore Premium
          </p>
          <p className="text-white text-lg bg-black rounded-2xl p-1 ml-5 hover:scale-110 transition-transform duration-300">
            Install App
          </p>
          <img src={girl} alt="" className="w-9 h-9 rounded-full ml-5" />
        </span>
      </div>
      <p className="text-black font-semibold text-5xl px-5 mt-3">
        Gút Gút Gút x3.14
      </p>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between h-fit bg-red-500 mt-5"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row items-center">
              <img src={girl} alt="" className="w-24 h-24" />
              <p className="font-medium text-2xl relative left-5">
                Liked Songs
              </p>
            </div>
            {hoveredIndex === index && (
              <BiRightArrow className="h-fit w-fit p-3 rounded-full bg-green-400 text-black ml-4 mr-2  hover:scale-125 transition-transform duration-300 " />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
