import React from 'react';
import backgroundImage from '../assets/MainBG.jpg'; // Importing MainBG.jpg as background for our Home landing page.

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="text-center">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6x1 xl:text-7xl">Welcome to Fashion Hub</h2>
      </div>
    </div>
  );
};

export default Home;
