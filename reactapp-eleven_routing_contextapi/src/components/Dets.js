import React, { useContext } from 'react'
import { DataContext } from "../context/Datacontext";

const Dets = () => {
  const [Data, setData] = useContext(DataContext)

  return (
    <div>
      <h3>Child Component of details</h3>
      <p>{Data}</p>
    </div>
  )
}

export default Dets