import React from "react";
import Header from "./items/header";
import Content from "./items/contents";

function Main() {
  return (
    <div className="h-screen bg-green-300 p-2 flex flex-col">
      <Header />
      <Content />
    </div>
  );
}

export default Main;
