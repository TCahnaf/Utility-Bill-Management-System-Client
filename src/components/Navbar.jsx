import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';





const Navbar = () => {

     const {user,logOut} =  use(AuthContext)
    
  

    return (
        <div className=''>
             <nav className = 'flex flex-col md:flex-row gap-3 justify-between items-center font-bold py-3 lg:py-6 px-4 lg:px-16 text-white  bg-gradient-to-r from-[#C28840] via-[#C9AE5D] to-[#E6C200] ' >
                <div> <img className='h-18 w-18' src='/images/burj-al-arab.png'  alt="" />
                </div>

                <div className=' font-bold flex flex-col items-center text-[#1B3D81]'>
                    <h1 className='font-poppins text-xl w-full '>Palm</h1>
                    <h2 className='font-poppins text-xl w-3/4 ' >Jumerirah</h2>
                    <h3 className='font-poppins text-lg w-1/2' >Aparments</h3>
                    
                </div>
               
              

                    {!user?( <div className='flex flex-col items-center gap-3'>
             <Link to = '/login'>
           <button className='button2'>Login</button>
             
             </Link>
                
               
<div>
    <Link to = '/register'>  <button className='flex justify-center items-center gap-2 button2'> Register Here !!!</button></Link>
  
    
    
</div>
</div>):<div className='flex flex-col gap-y-2'>
    <p className='text-center text-xl text-[#1B3D81]'>Hi, {user.displayName} !!!</p>
    <div className='flex items-center gap-3'><img className='rounded-xl h-[56px] w-[56px]' src= {user.photoURL} alt="" />
    
    <button className='button2' onClick={logOut}>Log Out</button>
    {console.log(user.photoURL)}</div>
    
    
    </div>}
               


               
            </nav>

            <div className='color-selection1 text-white flex justify-center items-center gap-7 text-lg font-poppins '>

          
              <div>
                    <Link  to = {'/'}>Home</Link> </div>
              <div> <Link  to = {'/bills'}>Bills</Link></div>
              <div> <Link to = {'/mybills'}>Manage Your Bills</Link></div>
 
                   
                   
                    

              


            </div>
        </div>

        
        
        
    
    )
    
};

export default Navbar;