import React, { createContext, useState } from 'react'

export const DataContext = createContext(null)

const Datacontext = (props) => {

    const [Data, setData] = useState("This is supreme Data!")
    // console.log(props.children);

    return (

        <DataContext.Provider value={[Data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
}

export default Datacontext