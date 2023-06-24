import React from "react";
import Header from "./items/header";
import Content from "./items/contents";
import Plays from "./playSongs/Plays";
function Main() {
  return (
    <div className="h-screen bg-black p-2 flex flex-col  overflow-y-scroll">
      <Header />
      <Content />
    </div>
  );
}

export default Main;
