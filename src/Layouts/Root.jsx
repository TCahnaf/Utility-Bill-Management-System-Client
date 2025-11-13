import React, { Suspense } from 'react';

import Footer from '../components/Footer';
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar';




const Root = () => {
    return (
        <div>
         
            <Navbar></Navbar>
            <Suspense fallback = {<div className='min-h-screen'>
                <span className="loading loading-bars loading-xl"></span>
            </div>}>
             <Outlet></Outlet></Suspense>
           
            <Footer></Footer>

            

            
        </div>
    );
};

export default Root;