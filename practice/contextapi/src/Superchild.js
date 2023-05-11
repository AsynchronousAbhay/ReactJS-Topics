import React, { useContext, useEffect } from 'react'
import { Datacontext } from './App'

const Superchild = () => {
    const { color, getDay } = useContext(Datacontext);
    var day = "sunday";
    // useEffect(() => {
    //     getDay(day);
    // },[])

    return (
        <div>
            <h1 style={{ color: color }}>Superchild</h1>
            <button onClick={() => { getDay(day) }}>click</button>
        </div>
    )
}

export default Superchild