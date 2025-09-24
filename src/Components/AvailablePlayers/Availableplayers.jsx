import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const Availableplayers = ({ playerPromise, setCoin, coin,purchasedPlayers, setPurchasedPlayers }) => {
  const playerData = use(playerPromise);
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-3 my-5">
        {playerData.map((player) => (
          <PlayerCard
            setCoin={setCoin}
            player={player}
            coin = {coin}
            key={player.id}
            setPurchasedPlayers = {setPurchasedPlayers}
            purchasedPlayers = {purchasedPlayers}
          ></PlayerCard>
        ))}
      </div>
    </>
  );
};

export default Availableplayers;
