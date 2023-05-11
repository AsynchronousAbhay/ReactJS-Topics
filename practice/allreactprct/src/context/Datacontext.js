import React, { createContext, useState } from 'react'
export const GlobalContext = createContext(null);

const Datacontext = (props) => {
    const [dets, setdets] = useState("this is supreme chlid!");
    const [Profiles, setProfiles] = useState([
        { name: "abhay", id: "347hj" },
        { name: "john_doe", id: "56gj" },
        { name: "hitesh", id: "86fbhj" },
    ]);
    const [day, setday] = useState("Monday")
    const getday = (data) => {
        // console.log(data);
        setday(data);
    }
    // console.log(props);
    return (
        <GlobalContext.Provider value={{ dets: dets, setdets: setdets, getday: getday, day: day, setday: setday,Profiles:Profiles }}>
            <div>{props.children}</div>
        </GlobalContext.Provider>
    )
}

export default Datacontext