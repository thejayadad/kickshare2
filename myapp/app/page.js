'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home() {
  const imagesWithText = [
    {
      url:
        'https://images.pexels.com/photos/6591579/pexels-photo-6591579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'pic1',
      text: 'KickShare',
    },
    {
      url:
        'https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'pic2',
      text: 'Kickshare',
    },
  ];
  
  return (
    <main>
        <section className="mx-auto max-w-screen-lg py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center px-3">
        <div className="col-span-2 sm:col-span-2 md:col-span-2 p-4 relative">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            dynamicHeight={true}
            renderArrowPrev={(clickHandler) => (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
              >
                Previous
              </button>
            )}
            renderArrowNext={(clickHandler) => (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
              >
                Next
              </button>
            )}
          >
            {imagesWithText.map((image, index) => (
              <div className='py-2' key={index}>
                <img src={image.url} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transform transition-transform" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <p className="text-3xl font-semibold cursor-pointer">{image.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="col-span-2 sm:col-span-2 md:col-span-2">
          <div className="grid grid-cols-1 gap-4">
            <div className="hover:scale-105 transform transition-transform">
              <img
                src="https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hover:scale-105 transform transition-transform">
              <img
                src="https://images.pexels.com/photos/2351858/pexels-photo-2351858.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
