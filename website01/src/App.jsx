import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: '#1f2937' }} className="flex items-center justify-between text-white px-4 py-2">
        <div>
          <img src="./public/img1" alt="img" className="h-10 w-10" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-5">
            <li>HOME</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>HELP</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <button className="bg-violet-600 px-3 py-2 rounded-xl">LOGIN</button>
          <button className="bg-violet-600 px-3 py-2 rounded-xl">SIGNUP</button>
        </div>
      </nav>

      <div className="flex">
        <div className="w-1/2 h-screen bg-sky-200 border border-red-500">
        <div className="w-1/2 h-screen bg-sky-200 border border-green-500">hello</div>
        <div className="w-1/3 h-screen bg-sky-200 border border-green-500">hello</div>
        <div className="w-1/4 h-screen bg-sky-200 border border-green-500">hello</div>
        </div>
        <div className="w-1/2 h-screen bg-sky-200 border border-green-500"></div>
      
      </div>
    </div>
  );
}

export default App;
