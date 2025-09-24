export default function SelectedplayerCard({player}){
    return(
        <>
        <div className='flex justify-between p-3 border-gray-400 border-2 items-center rounded-2xl my-4'>
                <div className='flex items-center gap-3 '>
                    <img src={player.player_image} className="w-[60px] h-[50px] rounded-xl" />
                    <div>
                        <h2 className='font-bold text-xl'>{player.player_name}</h2>
                        <p>{player.playing_role}</p>
                    </div>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/8567/8567786.png" className="w-[30px] h-[30px] cursor-pointer" />
                </div>
        </div>
        </>
    )
}