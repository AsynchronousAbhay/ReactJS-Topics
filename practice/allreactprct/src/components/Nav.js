import React from 'react'
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className='container mt-5'>
      <nav>
        <ol>
          <NavLink className={(e) => { return e.isActive ? "text-danger" : "" }} to={"/"}>
            Home
          </NavLink>
          <NavLink className={(e) => { return e.isActive ? "text-danger" : "" }} to={"/User"}>
            User
          </NavLink>
          <NavLink className={(e) => { return e.isActive ? "text-danger" : "" }} to={"/About"}>
            About
          </NavLink>
        </ol>
      </nav>
    </div>
  )
}

export default Nav