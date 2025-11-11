import React from 'react';
import Slider from '../components/Slider';
import { Typewriter } from 'react-simple-typewriter';

const Homepage = () => {
    return (
        <div className='bg-[#d4af37]'>
            <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className = "flex gap-5 items-center justify-center">
            <Slider></Slider>
            <div className='max-w-lg p-6 bg-gradient-to-r from-[#0b1e3d] via-[#13284f] to-[#1a3570] rounded-2xl shadow-lg font-poppins text-white font-bold '>
                <Typewriter words = {['Thank you for being a resident at Palm Jumerirah Apartments !!! Please pay your utlility bills on time so that we can ensure world class luxury !!   ']}
                 loop={0}  cursor  cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={2000}
                ></Typewriter>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Homepage;