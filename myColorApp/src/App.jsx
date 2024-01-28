import './index.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");

  const colorClasses = {
    customRed: "bg-red-500",
    customPurple: "bg-purple-500",
    customGreen: "bg-green-500",
    customYellow: "bg-yellow-500",
    customOrange: "bg-orange-500",
    White: "bg-white",
    customBlue: "bg-blue-500"
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className={`h-screen flex flex-col justify-between ${colorClasses[color]}`}>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-black text-center mt-10">Hello from React</h1>
      </div>

      <div className="flex justify-center gap-6 pb-8">
        <button onClick={() => handleColorChange("customRed")} className="bg-red-500 text-white px-4 py-2 rounded">RED</button>
        <button onClick={() => handleColorChange("customPurple")} className="bg-purple-500 text-white px-4 py-2 rounded">PURPLE</button>
        <button onClick={() => handleColorChange("customGreen")} className="bg-green-500 text-white px-4 py-2 rounded">GREEN</button>
        <button onClick={() => handleColorChange("customYellow")} className="bg-yellow-500 text-white px-4 py-2 rounded">YELLOW</button>
        <button onClick={() => handleColorChange("customOrange")} className="bg-orange-500 text-white px-4 py-2 rounded">ORANGE</button>
        <button onClick={() => handleColorChange("White")} className="bg-white text-black px-4 py-2 rounded">WHITE</button>
        <button onClick={() => handleColorChange("customBlue")} className="bg-sky-500 text-white px-4 py-2 rounded">BLUE</button>
      </div>
    </div>
  );
}

export default App;
