import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';





const Navbar = () => {

     const {user,logOut} =  use(AuthContext)
    
  

    return (
        <div className=''>
             <nav className = 'flex flex-col md:flex-row gap-3 justify-between items-center font-bold py-3 lg:py-6 px-4 lg:px-16 bg-gradient-to-r from-[#0b1e3d] via-[#13284f] to-[#1a3570] text-white '>
                <div> <p>LOGO</p>
                </div>

                <div className=' font-bold flex flex-col items-center'>
                    <h1 className='font-poppins text-xl w-full'>Palm</h1>
                    <h2 className='font-poppins text-lg w-3/4' >Jumerirah</h2>
                    <h3 className='font-poppins text-m w-1/2' >Aparments</h3>
                    
                </div>
               
              

                    {!user?( <div className='flex flex-col items-center gap-3'>
             <Link to = '/login'>
             <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
</button>
             
             </Link>
                
               
<div>
    <Link to = '/register'>  <button className='flex justify-center items-center gap-2 btn btn-primary'> <img className=' rounded-2xl h-11 w-12' src="/images/gamepad.png" alt="" />New To The Club ? Register</button></Link>
  
    
    
</div>
</div>):<div className='flex flex-col gap-y-2'>
    <p className='text-center text-xl'>Hi, {user.displayName} !!!</p>
    <div className='flex items-center gap-3'><Link to ='/user/profile'><img className='rounded-xl h-[56px] w-[56px]' src= {user.photoURL} alt="" /></Link>
    
    <button className='btn btn-primary px-10 ' onClick={logOut}>Log Out</button>
    {console.log(user.photoURL)}</div>
    
    
    </div>}
               


               
            </nav>

            <div className='bg-amber-700'>

          

 <div className='flex gap-6 text-lg justify-center font-poppins'>
                    {/* <NavLink  to = {'/about'}>About</NavLink> */}
                    <Link  to = {'/'}>Home</Link>
                 
                    <Link  to = {'/bills'}>Bills</Link>
                    <Link to = {'/mybills'}>Manage Your Bills</Link>
                    <Link to = {'/bill/details'}>Bill Details</Link>

                </div>


            </div>
        </div>

        
        
        
    
    )
    
};

export default Navbar;