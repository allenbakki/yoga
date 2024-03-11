import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ChooseTeacher from "./components/ChooseTeacher";
import Health from "./components/Health";
import HealthComponent2 from "./components/HealthComponent2";
import Routine from "./components/Routine";
import Follow from "./components/Follow";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
function App() {
  const [mode, setMode] = useState(true);
  const dark = "bg-[#14092A] text-[#D1C0F1]";
  const light = "bg-[#F5F0FF] text-[#220953]";

  return (
    <div className={`${mode ? light : dark}`}>
      <Navbar light={light} dark={dark} setMode={setMode} mode={mode} />
      <ChooseTeacher />
      <Health />
      <HealthComponent2 />
      <Routine />
      <Follow />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
