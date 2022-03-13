import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Testmonials from "./components/testmonials/Testmonials";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {

  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testmonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
