
import React from 'react'
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className='container mt-5'>
      <ol className='nav nav-tabs'>
        <li className='nav-item'>
          <NavLink
            className={(e) => { return e.isActive ? "text-danger nav-link active" : "nav-link active" }}
            to="/" >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(e) => { return e.isActive ? "text-danger nav-link active" : "nav-link active" }}
            to="/About" >
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(e) => { return e.isActive ? "text-danger nav-link active" : "nav-link active" }}
            to="/User" >
            User
          </NavLink>
        </li>
      </ol>
    </div>
  )
}

export default Nav