import React from "react";
import "./Navbar.css";
function Navbar({change}) {
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center shadow-md navbar">
      <h1 className="text-2xl font-bold">Student ID Card</h1>
      <button className="relative bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
        Friends
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
          {change.filter(item => item.friend).length}
        </span>
      </button>
    </div>
  );
}

export default Navbar;
