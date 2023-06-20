import React from "react";
import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsFillCaretDownFill, BsDot } from "react-icons/bs";
import girl from "../image/girl.jpg";
function Navbar() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#242424] w-full h-1/6 rounded-lg items-center flex">
        <div className="flex flex-col">
          <div className="flex flex-row p-3 items-center text-white text-2xl font-mono">
            <AiFillHome className="" />
            <span className=" pl-4">Home</span>
          </div>
          <div className="flex flex-row p-3 items-center text-white text-2xl font-mono">
            <BiSearch />
            <span className=" pl-4">Search</span>
          </div>
        </div>
      </div>
      <div className="bg-[#242424] w-full h-5/6 mt-5  rounded-lg flex flex-col ">
        <div className="flex flex-row justify-between text-white text-2xl p-2">
          <div className="flex flex-row items-center ">
            <BiLibrary />
            <span>Your Library</span>
          </div>
          <div className="flex flex-row items-center mt-1">
            <FiPlus />
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className=" w-full  h-fit flex flex-row ">
          <span className="w-fit h-fit p-2 bg-gray-800 rounded-3xl text-white hover:bg-gray-700 ml-2 ">
            Playlists
          </span>
          <span className="w-fit h-fit p-2 bg-gray-800 rounded-3xl text-white  hover:bg-gray-700 mx-3">
            Artists
          </span>
          <span className="w-fit h-fit p-2 bg-gray-800 rounded-3xl text-white  hover:bg-gray-700">
            Podcasts & shows
          </span>
        </div>
        <div className=" w-full h-fit flex flex-row items-center text-slate-200 text-xl justify-between px-2 mt-4">
          <BiSearch />
          <div className="flex flex-row items-center">
            <span className=" ">Recents</span>
            <BsFillCaretDownFill className="ml-1 mt-1" />
          </div>
        </div>
        <div className="overflow-y-hidden hover:overflow-y-scroll ">
          {[...Array(25)].map((_, index) => (
            <div
              key={index}
              className=" w-full h-fit mt-5 flex flex-row items-center p-2 text-white font-semibold"
            >
              <img src={girl} alt="" className="w-14 h-14 rounded-xl" />
              <div className="pl-3">
                <p>Liked songs</p>
                <div className="flex flex-row">
                  <p>Play list</p>
                  <BsDot className="" />
                  <p>92 Songs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
