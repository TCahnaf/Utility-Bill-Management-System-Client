import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
             <nav className='flex flex-col md:flex-row gap-3 justify-between items-center font-bold py-3 lg:py-6 px-4 lg:px-16 border-b-2 bg-gray-400 '>
                <div> <p>Image</p>
                </div>
                <div className='flex gap-3 text-lg'>
                    {/* <NavLink  to = {'/about'}>About</NavLink> */}
                    <NavLink  to = {'/'}>Home</NavLink>
                 
                    <NavLink  to = {'/bills'}>Bills</NavLink>
                    <NavLink to = {'/mybills'}>Manage Your Bills</NavLink>
                </div>

              

               


               
            </nav>


            
        </div>)
    
};

export default Navbar;