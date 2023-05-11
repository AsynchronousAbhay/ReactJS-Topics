import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/Datacontext'

const Dets = () => {
    const { dets, setdets, getday } = useContext(GlobalContext);
    var day = "sunday";
    // useEffect(() => {
    //     getday(day);
    // }, [])

    return (
        <div>
            <h3>Extra child component of Details</h3>
            <p>{dets}</p>
            <button onClick={() => {getday(day)}}>click me</button>
        </div>
    )
}

export default Dets