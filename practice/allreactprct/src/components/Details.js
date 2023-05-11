import React, { useContext, useState } from 'react'
import { Link, useParams, useLocation } from "react-router-dom";
import { GlobalContext } from '../context/Datacontext';
import Dets from './Dets';

const Details = () => {
  const parmas = useParams();
  const Location = useLocation();
  // console.log(parmas, Location);
  const {day} = useContext(GlobalContext)
  return (
    <div>
      <h1>hi i am {parmas.name}</h1>
      <h4>Today is {day}</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quas.</p>
      <Link to={"/User"}>Back</Link>
      <hr />
      <Dets/>
    </div>
  )
}

export default Details