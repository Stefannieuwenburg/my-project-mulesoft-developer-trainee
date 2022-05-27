import * as React from "react";
import Home from "./components/Home"
import Album from "./components/Album"
import NavToolBar from "./components/NavToolBar"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <>
      <NavToolBar/>
      <Home />
      <Album />
      <Footer/>
    </>
  )
}

export default App;
