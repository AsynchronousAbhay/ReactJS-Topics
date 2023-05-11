import React, { createContext, useState } from 'react'

export const User = createContext(null);

const Usercontext = (props) => {

    // console.log(props);
    const [Users, setUsers] = useState([
        { _id: "8ihkk", name: "abhay" },
        { _id: "34788", name: "rohit" },
        { _id: "8898u", name: "aman" },
    ])

    return (
        <User.Provider value={[Users, setUsers]}>
            {props.children}
        </User.Provider>
    )
}

export default Usercontext