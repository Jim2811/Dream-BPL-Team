import "./App.css";
import navImg from "./assets/logo.png";
import dollarSign from "./assets/dollar-1.png";
import Availableplayers from "./Components/AvailablePlayers/Availableplayers";
import Selectedplayers from "./Components/SelectedPlayers/Selectedplayers";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const r = await fetch("/players.json");
  return r.json();
};
const playerPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [coin, setCoin] = useState(6000000000);
  return (
    <>
      {/* navbar */}
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="cursor-pointer">
            <img className="h-[50px] w-[50px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span>{coin}</span>
          <span>coin</span>
          <img src={dollarSign} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto py-4">
        <h2 className="font-bold text-2xl">Available Players</h2>
        <div>
          <button
            className={`btn rounded-l-xl border-r-0  ${
              toggle === true ? "bg-[#E7fe29]" : ""
            }`}
            onClick={() => setToggle(true)}
          >
            Available Players
          </button>
          <button
            className={`btn rounded-r-xl border-l-0 ${
              toggle === false ? "bg-[#E7fe29]" : ""
            }`}
            onClick={() => setToggle(false)}
          >
            Selected Players
          </button>
        </div>
      </div>
      <div>
        {toggle === true ? (
          <Suspense
            fallback={
              <div className="max-w-[1200px] mx-auto flex justify-center items-center">
                <span className="loading loading-ring loading-xl"></span>
              </div>
            }
          >
            <Availableplayers
              setCoin={setCoin}
              coin = {coin}
              playerPromise={playerPromise}
            ></Availableplayers>
          </Suspense>
        ) : (
          <Selectedplayers></Selectedplayers>
        )}
      </div>
    </>
  );
}

export default App;
