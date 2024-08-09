import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function getImages(getUrl) {
    const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
    const data = await response.json();
    setImages(data);
  }

  useEffect(() => {
    getImages(url);
  }, [url]);

  const Previous = () => {
    setCurrentIndex(currentIndex == 0 ? images.length - 1 : currentIndex - 1)
  }
  const Next = () => {
    setCurrentIndex(currentIndex == images.length ? 0 : currentIndex + 1)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='relative w-[550px] h-auto'>
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt={''}
            className={currentIndex == img.id ? 'block w-full rounded-2xl' : 'hidden'}
          />
        ))}


        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={Previous}
        >
          <BsArrowLeftCircleFill className="w-10 h-10" />
        </button>


        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={Next}
        >
          <BsArrowRightCircleFill className="w-10 h-10" />
        </button>

        <div className='flex justify-center space-x-2 mt-4'>
          {images.map((_, index) => {
            return (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`inline-block w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-500' : 'bg-gray-300'}`}
              >
              </span>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default ImageSlider;
