import React from "react";
import About from "./components/About"
import Home from "./components/Home"
import Nav from "./components/Nav"
import User from "./components/User"
import Details from "./components/Details"
import { Route, Routes } from "react-router-dom";
import Parent from "./pract/Parent";
import { useState } from "react";

function App() {
  const [Day, setDay] = useState("monday");

  const getDay = (day) =>{
    setDay(day);
  }

  return (
    <div className="container mt-5">
      <Nav />
      <hr />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />}>
          <Route path="/User/:name" element={<Details />} />
        </Route>
        <Route path="/About" element={<About />} />
      </Routes> */}

      <Parent getDay={getDay} status={Day}/>

    </div>
  );
}

export default App;
