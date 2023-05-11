import React from 'react'
import { useState } from 'react';

const Child = (props) => {
    var day = "sunday";
    // console.log(props);
    const {getDay, status} = props;

  return (
    <div>
        <h3>Child comp.</h3>
        <p>{status}</p>
        <button onClick={() => { getDay(day) }}>Change Day</button>
    </div>
  )
}

export default Child