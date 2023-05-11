import loader from './assets/loader.gif';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function App() {

  const [images, setImages] = useState([]);

  const getImages = async (count = 1) => {
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${count}&limit=8`
      )
      // console.log(res.data);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [])

  let imageList = [];
  if (images.length > 0) {
    imageList = images.map((image, indx) => {
      return (
        <div
          className='card rounded mt-3 me-3 mb-3 shadow-lg'
          style={{ height: "15vmax", width: "15vmax" }}
          key={indx}
        >
          <div
            style={{ height: "13vmax", width: "15vmax", overflow: "hidden" }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={image.download_url}
              alt={image.download_url}
            />
          </div>
          <div>
            <p className='p-1 text-center'>{image.author}</p>
          </div>
        </div>
      )
    })
  }

  const handlePageClick = (e) => {
    // console.log(e);
    let flag = 1;
    if (flag === 1) {
      getImages(e.selected + 1);
      flag = 0;
    }
    else {
      <img
        style={{ height: "25vmax" }}
        src={loader}
        alt=''
      />
      flag = 1;
    }
  }


  return (
    <div className='p-5 container' style={{ height: "100vh", width1: "100vw" }}>

      <div className='bg-dark shadow-lg rounded d-flex justify-content-center'>
        <h1 className='text-white'>Gallery App.</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {images.length > 0 ?
          (imageList) : (
            <img
              style={{ height: "25vmax" }}
              src={loader}
              alt=''
            />
          )
        }
      </div>

      <ReactPaginate
        className='pagination'
        breakLabel="..."
        nextLabel="🢧"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel="🢠"
      />

      {/* <button onClick={getImages}>get images</button> */}
    </div>
  );
}

export default App;
