import React from 'react';
import { Link } from 'react-router';

const Cards = ({bill}) => {
    return (
       <div className="w-60 h-100 bg-[#1B3D81] rounded-4xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div>
        <img className="w-52 h-40 rounded-2xl" src= {bill.image} alt="" />
      </div>
      {/* card content */}
      <div className = " flex-1 flex flex-col card justify-center items-center space-y-2 ">
        <div className=' border-4 border-[#C9AE5D] rounded-lg p-3 h-24'>
        <h2 className="font-extrabold line-clamp-2  ">{bill.title}</h2>
        </div>
        <div>
          <p className>{bill.location}</p>
         <p className>Please Pay:${bill.amount}</p>
      </div>
         <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
        <Link to = {`/bill/details/${bill._id}`}>See Details</Link>
        
        </button>
        </div>
        
   
    </div>
        
    );
};

export default Cards;