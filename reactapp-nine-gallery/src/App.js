import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import loader from "./assets/loader.gif";
import ReactPaginate from 'react-paginate';

function App() {
  const [images, setImages] = useState(null);


  const getImages = async (count = 1) => {
    console.log(count);
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${count}&limit=9`
      );
      setImages(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImages();
  }, [])


  const onPageChange = ({ selected }) => {
    getImages(selected + 1);
  };


  return (
    <div style={{ height: "100vh" }}
      className="container d-flex justify-content-center align-items-center flex-column"
    >

      {images ? (
        JSON.stringify(images)

      )
        : (
          <img style={{ width: "30vmax" }} src={loader} alt="" />
        )
      }

      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={onPageChange}
        pageRangeDisplayed={9}
        pageCount={10}
        previousLabel="<<"
      />

    </div>
  );
}

export default App;
