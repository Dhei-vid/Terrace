import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../src/components/home/home.component";
import Page2 from "./components/page2/page2.component";
import Page3 from "./components/page3/page3.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
    </Routes>
  );
}

export default App;
