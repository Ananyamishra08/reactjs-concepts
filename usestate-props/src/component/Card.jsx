import React from "react";
import "./Card.css";
function Card({value, handleClick, index}) {
  const { name, profession, image, friend } = value;
  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col  items-center transition-transform hover:scale-105 duration-300 ease-in-out cardcontainer">
      <div className="flex items-center justify-center  overflow-hidden mb-4">
      <img className="w-full h-48 object-contain object-[top_30%]" src={image} alt="picture"/>
      </div>
      <h1 className="font-bold text-lg text-gray-950">{name}</h1>
      <p className="text-gray-500">{profession}</p>
      <div className="flex items-center justify-center mt-3 mb-4">
        <button onClick={()=>handleClick(index)} className={`${!friend ? "bg-blue-500":"bg-teal-700"} text-white px-4 py-2 rounded-lg ${!friend ?"hover:bg-blue-600":"hover:bg-teal-700"} transition duration-300 ease-in-out`}>
          {!friend ? "Add Friend" :"Added"}
        </button>
      </div>
      </div>
    </>
  );
}

export default Card;
