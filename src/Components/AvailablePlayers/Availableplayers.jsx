import React, { use } from "react";
import manIcon from '../../assets/user-1.png'
import report from '../../assets/report-1.png'
const Availableplayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div class="card bg-base-100 w-96 shadow-sm p-[4px]">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-lg"
          />
        </figure>
        <div className="flex mt-4 gap-1">
            <img src={manIcon} />  
            <h2 class="card-title">Virat Kohli</h2>
        </div>
        <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-1 items-center">
                <img src={report} alt="" />
                <p>Country</p>
            </div>
            <div>
                <button className="btn">PlayerType</button>
            </div>
        </div>
        <hr className="my-5"/>
        {/* rating */}
        <div>
            <div className="flex justify-between items-center font-bold">
                <span>Rating</span>
                <span>5</span>
            </div>
            <div className="flex justify-between items-center my-2">
                <span className="font-bold">left ha ba</span>
                <span>lef</span>
            </div>
            <div className="flex justify-between items-center my-2">
                <p className="font-bold">Price: $<span>0000</span></p>
                <button className="btn">Choose Player</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Availableplayers;
