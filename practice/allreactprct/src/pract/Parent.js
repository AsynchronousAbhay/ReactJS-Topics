import React from 'react'
import Child from './Child'

const Parent = (props) => {
    const {getDay, status} = props;
    return (
        <div>
            <h1>Parent comp,</h1>
            <div>
                <Child getDay={getDay} status={status}/>
            </div>
        </div>
    )
}

export default Parent
