import React from 'react';
import SelectedplayerCard from '../SelectedPlayerCard/SelectedPlayerCard';
 
const Selectedplayers = ({purchasedPlayers}) => {
    
    return (
       <>
       <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedplayerCard player = {player} key={player.id}></SelectedplayerCard>)
            }
       </div>
       </>
    );
};

export default Selectedplayers;