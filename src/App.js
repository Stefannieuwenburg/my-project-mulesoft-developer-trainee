import * as React from "react";
import NavToolBar from "./components/NavToolBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Album from "./components/Album";

import "./App.css";

function App() {
  return (
    <>
      <NavToolBar/>
      <Home />
      <Album/>
      <Footer/>
    </>
  )
}

export default App;
