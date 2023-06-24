import Navbar from "./components/navbar";
import Main from "./components/main";
import Plays from "./components/playSongs/Plays";
function App() {
  return (
    <div className="bg-black w-full h-screen flex flex-row ">
      <div className="w-1/5 p-2 h-full">
        <Navbar />
      </div>
      <div className="w-4/5 ">
        <Main />
      </div>
    </div>
  );
}

export default App;
