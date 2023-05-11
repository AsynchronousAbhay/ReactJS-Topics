import React from 'react'
import { Link, useParams, useLocation } from "react-router-dom"
import  Dets from "./Dets";
a
const Detail = () => {
    const params = useParams();
    const location = useLocation();
    console.log(params, location);
    return (
        <div>
            <h1>Hi, i am {params.name}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, itaque.
            </p>
            <Link to="/User">Back</Link>
            <Dets />
        </div>
}

export default Detail