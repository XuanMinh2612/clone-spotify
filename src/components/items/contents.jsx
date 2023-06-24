import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import girl from "../../image/girl.jpg";
import Plays from "../playSongs/Plays";

function Content(items) {
  const [playlist, setPlaylist] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [playSong, setPlaySongs] = useState("");
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    const getPlayList = async () => {
      const options = {
        method: "GET",
        url: "https://shazam-core.p.rapidapi.com/v1/charts/country",
        params: { country_code: "VN" },
        headers: {
          "X-RapidAPI-Key":
            "25afd00c31msh690f22c6a3516c0p1799adjsn0eade0e56e0b",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setPlaylist(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPlayList();
    console.log();
  }, []);
  return (
    <div className="bg-black w-full h-fit flex flex-col p-3">
      <div>
        <span className="text-white font-semibold text-5xl px-5 mt-3">
          All music
        </span>
        <div className="grid grid-cols-3 gap-4">
          {playlist?.map((items, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between h-fit bg-customItem mt-5 rounded-sm"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setPlaySongs(items)}
            >
              <div className="flex flex-row items-center">
                <img
                  src={items?.images?.coverart}
                  alt=""
                  className="w-24 h-24 rounded-sm"
                />
                <p className="font-medium text-xl relative left-5 max-w-[200px]">
                  {items.title}
                </p>
              </div>
              {hoveredIndex === index && (
                <BiRightArrow
                  onClick={() => setPlaySongs(items)}
                  className="h-fit w-fit p-3 rounded-full bg-green-400 text-black ml-4 mr-2  hover:scale-125 transition-transform duration-300 "
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Plays items={playSong} />
    </div>
  );
}

export default Content;
