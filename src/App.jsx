import "./App.css";
import navImg from './assets/logo.png'
import dollarSign from './assets/dollar-1.png'
import Availableplayers from "./Components/AvailablePlayers/Availableplayers";
import Selectedplayers from "./Components/SelectedPlayers/Selectedplayers";
import { Suspense } from "react";

const fetchPlayers = async () =>{
  const r = await fetch('/players.json')
  return r.json()
}

function App() {
  const playerPromise = fetchPlayers()
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
          <span>6000000000</span>
          <span>coin</span>
          <img src={dollarSign} alt="" />
        </div>
      </div>
        
      <div>
        <Suspense fallback = {<span className="loading loading-ring loading-xl"></span>}>
          <Availableplayers playerPromise ={playerPromise}></Availableplayers>
        </Suspense>
        {/* <Selectedplayers></Selectedplayers> */}
      </div>
    </>
  );
}

export default App;
