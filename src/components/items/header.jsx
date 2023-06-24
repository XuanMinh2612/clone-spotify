import React, { useEffect, useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import girl from "../../image/girl.jpg";

function Header() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [greeting, setGreeting] = useState("");

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 0 && currentHour < 10) {
      setGreeting("Good Morning");
    } else if (currentHour >= 10 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#1c0f3f] to-[#121212] p-3 w-full h-fit rounded-t-xl">
      <div className="flex flex-row text-2xl text-white justify-between items-center px-5">
        <span className="flex flex-row text-2xl text-white">
          <BiLeftArrow className="hover:scale-150 transition-transform duration-300" />
          <BiRightArrow className="hover:scale-150 transition-transform duration-300 ml-2" />
        </span>
        <span className="flex flex-row">
          <p className="text-black text-lg bg-white rounded-2xl py-1 px-3 ml-5 hover:scale-110 transition-transform duration-300 font-semibold">
            Explore Premium
          </p>
          <p className="text-white text-lg bg-black rounded-2xl py-1 px-3 ml-5 hover:scale-110 transition-transform duration-300 flex flex-row items-center font-semibold">
            <AiOutlineCloudDownload className="text-xl mr-2" />
            Install App
          </p>
          <img src={girl} alt="" className="w-9 h-9 rounded-full ml-5" />
        </span>
      </div>
      <p className="text-white font-semibold text-5xl px-5 mt-3">{greeting}</p>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between h-fit bg-customItem mt-5 rounded-sm"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row items-center">
              <img src={girl} alt="" className="w-24 h-24 rounded-sm" />
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
