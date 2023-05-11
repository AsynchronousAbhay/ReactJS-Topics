import Nav from "./components/Nav";
import About from "./components/About";
import User from "./components/User"
import Home from "./components/Home"
import Detail from "./components/Detail"
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Nav />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />|
          <Route path="/About" element={<About />} />
          <Route path="/User" element={<User />}>
            <Route path="/User/:name" element={<Detail />} />
          </Route>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
