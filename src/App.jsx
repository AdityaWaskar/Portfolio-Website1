import {
  Topbar,
  Intro,
  Contact,
  Feedbacks,
  Portfolio,
  Works,
  Menu,
} from "./components";
import "./app.css";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </div>
  );
}

export default App;
