import React, { useState } from "react";
import manIcon from "../../assets/user-1.png";
import report from "../../assets/report-1.png";
const PlayerCard = ({ player, setCoin, coin, purchasedPlayers, setPurchasedPlayers }) => {
  const handlePlayer = (pData) =>{
    setSelected(true);
    setCoin(coin - player.price)
    setPurchasedPlayers([...purchasedPlayers,pData])
  }
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div class="card bg-base-100 shadow-sm p-[4px]">
        <figure>
          <img
            src={player.player_image}
            alt="Shoes"
            className="rounded-lg w-full h-[300px] object-cover"
          />
        </figure>
        <div className="flex mt-4 gap-1">
          <img src={manIcon} />
          <h2 class="card-title">{player.player_name}</h2>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img src={report} alt="" />
            <p>{player.player_country}</p>
          </div>
          <div>
            <button className="btn">{player.playing_role}</button>
          </div>
        </div>
        <hr className="my-5" />
        {/* rating */}
        <div>
          <div className="flex justify-between items-center font-bold">
            <span>Rating</span>
            <span>{player.rating}</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="font-bold">{player.bating_style}</span>
            <span>{player.bowling_style}</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="font-bold">
              Price: $<span>{player.price}</span>
            </p>
            <button
              disabled={selected === false ? false : true}
              onClick={()=>handlePlayer(player)}
              className="btn cursor-pointer"
            >
              {selected === false ? "Choose Player" : "Selected"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
