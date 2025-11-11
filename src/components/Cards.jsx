import React from 'react';
import { Link } from 'react-router';

const Cards = ({bill}) => {
    return (
       <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div>
        <img className="w-52 h-40 rounded-2xl" src= {bill.image} alt="" />
      </div>
      <div className = "space-y-2">
        <p className="font-extrabold">{bill.title}</p>
        <p className>{bill.location}</p>
         <p className>Please Pay:${bill.amount}</p>
      </div>
      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
        <Link to = {'/bill/details'}>See Details</Link>
        
        </button>
    </div>
        
    );
};

export default Cards;