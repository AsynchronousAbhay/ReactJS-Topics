import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { asyncLoadImages } from "./store/slice/imageSlice";

function App() {
  const { images } = useSelector((getState) => getState.imageReducre);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asyncLoadImages());
  }, []);

  return (
    <div>
      {
        images ? JSON.stringify(images) : "no images"
      }
    </div>
  );
}

export default App;
