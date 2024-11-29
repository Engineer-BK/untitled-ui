import React from "react";
import Hero from "./components/Hero";
import DashBoardStats from "./components/DashBoardStats";
import AppNavbar from "./components/AppNavbar";
import "./App.css";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";

function App() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <DashBoardStats />
      <Comp5 />
      <Comp6 />
      <Comp7 />
      <Comp8 />
      <Comp9 />
    </>
  );
}

export default App;
