import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BearTrap from "./pages/info/events/BearTrap";
import Swordland from "./pages/info/events/Swordland";
import EternityReach from "./pages/info/events/EternityReach";
import LanguageToggle from "./components/LanguageToggle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info/events/bear-trap" element={<BearTrap />} />
        <Route path="/info/events/sword-land" element={<Swordland />} />
        <Route path="/info/events/eternity-reach" element={<EternityReach />} />
      </Routes>
    </BrowserRouter>
  );
}
