import React,{useContext} from 'react';
import sideImage from "../assets/images/coder.jpg";
import { AppContext } from '../Context';

function Herosection() {

  const firstName = useContext(AppContext);  // Get value from context
  return (

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
      
      {/* Left Side (Text) */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <p className="text-xl mb-4">This is me,</p>
        <h1 className="text-4xl font-bold mb-4">Jiya Agrawal</h1>
        <p className="text-lg mb-6">I'm {firstName}.A passionate web developer, always curious to learn and create beautiful digital experiences.</p>


        <button className="bg-blue-600 text-white py-1 px-4 rounded-md text-base hover:bg-blue-700 transition duration-300 w-fit mx-auto md:mx-0">
          Hire me
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="flex justify-center">
        <img 
          src={sideImage}
          alt="Jiya Agrawal" 
      className="w-[300px] h-[300px] object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default Herosection;
