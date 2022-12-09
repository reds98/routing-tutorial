import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Help from "./Help";
import Tutorials from "./Tutorials";
import Home from "./Home";
import Navbar from "./Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </div>
  );
}

export default App;
