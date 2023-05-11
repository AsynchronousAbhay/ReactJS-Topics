import React, { useContext } from 'react'
import { Datacontext } from './App'
import Superchild from './Superchild';

const OtherChild = () => {
    const { color } = useContext(Datacontext);
    console.log(color);
    return (
        <div style={{ color: color }}>
            <h1>OtherChild</h1>
            <Superchild/>
        </div>
    )
}

export default OtherChild;