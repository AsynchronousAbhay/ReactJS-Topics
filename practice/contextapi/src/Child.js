import React, { useContext } from 'react'
import { Datacontext } from './App'
import Superchild from './Superchild';

const Child = () => {
    const { color } = useContext(Datacontext);
    console.log(color);
    return (
        <div style={{ color: color }}>
            <h1>Child</h1>
            <Superchild/>
        </div>
    )
}

export default Child