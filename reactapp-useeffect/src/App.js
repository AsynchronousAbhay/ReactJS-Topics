import React, { useEffect, useState } from "react";

function App() {
  const [User, setUser] = useState("user.....")
  const [Admin, setAdmin] = useState("admin....")

  useEffect(() => {
    console.log("inside useEffect!");
    return () => {
      console.log("deletion and refreshing!");
    }
  }, [Admin])


  // useEffect(() => {
  //   console.log("create");
  //   return () => {
  //     console.log("delete");
  //   }
  // }, ["updating"])

  const changeUser = () => {
    setUser("Hey user");
  }

  const changeAdmin = () => {
    setAdmin("Hey admin");
  }

  return (
    <div>
      <h1>{User}</h1>
      <button onClick={changeUser}>change user</button>
      <h1>{Admin}</h1>
      <button onClick={changeAdmin}>change admin</button>
    </div>
  );
}

export default App;
