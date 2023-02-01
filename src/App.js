import React from "react";
/* import Estado from "./components/Estado"; */
import Navbar from "./components/Navbar";
import RickMorty from "./components/RickMorty";
import "../src/styles/styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Estado /> */}
      <RickMorty />
    </>
  );
};

export default App;
