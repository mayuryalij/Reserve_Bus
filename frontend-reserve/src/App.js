import { Home } from "./pages/Home";
import BusDisplay from "./pages/BusDisplay";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus-display" element={<BusDisplay />} />
      </Routes>
    </>
  );
}

export default App;
