import React, { createContext, useState } from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";
import superchlid from "./Superchild";

export const Datacontext = createContext(null);

function App() {
  const [color, setcolor] = useState("green")
  const [day, setday] = useState("monday");

  const getDay = (data)=>{
    // console.log(data);
    setday(data);
  }

  return (
    <Datacontext.Provider value={{color:color, getDay:getDay}}>
      <div >
        <h1>superme component {day}</h1>
        <hr />
        <Child />
        <hr />
        <OtherChild/>
      </div>
    </Datacontext.Provider>
  );
}

export default App;
