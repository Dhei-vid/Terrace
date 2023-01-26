import React, { useState } from "react";
import { TerData } from "./data";

// import Home from "../src/components/home/home.component";

console.log(TerData);

type TerraceData = {
  id: number;
  image: string;
  header: string;
  text: string;
};

function App() {
  const [data, setData] = useState<TerraceData[]>([]);

  setData(TerData);

  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        Calm I am building
      </header>
      {/* <Home Tdata={data} /> */}
    </div>
  );
}

export default App;
