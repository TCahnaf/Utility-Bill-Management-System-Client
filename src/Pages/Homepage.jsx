import React, { useState } from 'react';
import Slider from '../components/Slider';
import { Typewriter } from 'react-simple-typewriter';
import { useLoaderData } from 'react-router';
import Cards from '../components/Cards';
import Newsletter from '../components/Newsletter';


const Homepage = () => {
  document.title = "home"

  const[theme, setTheme] = useState('bg-[#C9AE5D]')

  const toggleTheme = () =>{
    if (theme === "bg-[#C9AE5D]") {
      setTheme('bg-black')
    }

    else {
      setTheme("bg-[#C9AE5D]")

    }

  }

  const data = useLoaderData();

  

    return (

        <div className={` min-h-screen flex flex-col justify-center items-center p-20 space-y-8 ${theme}`}>
            <div className=' self-start pr-10'>
                <button onClick={toggleTheme} className='button2 '>{theme==='bg-[#C9AE5D]'?"view in dark mode":"view in light mode"}</button>
            </div>
        

            <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-center'>
                <div className="container mx-auto px-4 py-8 max-w-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 rounded-lg p-6 shadow-lg text-white">
      <h2 className="text-xl font-extrabold tracking-wide font-poppins mb-2">Electricity ⚡</h2>
      <p className="text-gray-200 font-semibold tracking-wide">This month, <span className="text-yellow-300">120</span> residents have already paid their electricity bills.</p>
    </div>

    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg p-6 shadow-lg text-white">
      <h2 className="text-xl font-extrabold tracking-wide font-poppins mb-2">Water 💧</h2>
      <p className="text-gray-200 font-semibold tracking-wide">This month, <span className="text-yellow-300">95</span> residents have already paid their water bills.</p>
    </div>

    <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-lg p-6 shadow-lg text-white">
      <h2 className="text-xl font-extrabold tracking-wide font-poppins mb-2">Gas 🔥</h2>
      <p className="text-gray-200 font-semibold tracking-wide">This month, <span className="text-yellow-300">80</span> residents have already paid their gas bills.</p>
    </div>

    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg p-6 shadow-lg text-white">
      <h2 className="text-xl font-extrabold tracking-wide font-poppins mb-2">Parking 🅿️</h2>
      <p className="text-gray-200 font-semibold tracking-wide">This month, <span className="text-yellow-300">60</span> residents have already paid their parking fees.</p>
    </div>

  </div>
</div>

                
         





<div className='space-y-4'>    <Slider></Slider>
            <div className='max-w-lg p-6 bg-gradient-to-r from-[#0b1e3d] via-[#13284f] to-[#1a3570] rounded-2xl shadow-lg font-poppins text-white font-bold '>
                <Typewriter words = {['Thank you for being a resident at Palm Jumerirah Apartments !!! Please pay your utlility bills on time so that we can ensure world class luxury !!   ']}
                 loop={0}  cursor  cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={2000}
                ></Typewriter>
            </div></div>

           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'> {data.map(bill => <Cards key={bill._id} bill={bill}></Cards>)}</div>

           <div>
            <Newsletter></Newsletter>
           </div>

          
            
             </div >

             
            
            
        
    );
};

export default Homepage;