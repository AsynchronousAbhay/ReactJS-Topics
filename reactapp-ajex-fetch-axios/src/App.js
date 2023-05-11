import React, { useState, useEffect } from "react";

function App() {
  const [Images, setImages] = useState(null);

  const getImages = () => {
    fetch("https://picsum.photos/v2/list")
      .then((d) => d.json())
      .then((data) => {
        setImages(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getImages();
  }, [Images]);


  return (
    <div className="App">
      {/* <button onClick={getImages}>Get Images</button> */}
      {Images ? JSON.stringify(Images) : "Loading...."}
    </div>
  );
}

export default App;
