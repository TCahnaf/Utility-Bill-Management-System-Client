import React, { use, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';


const BillDetails = () => {

    const {user} = use(AuthContext);

    const bill = useLoaderData();
    const billDate = new Date(bill.date)
    const currentDate = new Date();
    const billValidation = billDate.getFullYear() === currentDate.getFullYear() && billDate.getMonth() === currentDate.getMonth();
    console.log(billValidation)
    const modalRef = useRef(null)

    const handleModal = () => {
        modalRef.current.showModal();

    }


    return (
        <div className='bg-sky-700 min-h-screen'>

            <div className='flex flex-col lg:flex-row gap-5  justify-center items-center  p-20'>

            <div className = "flex flex-col space-y-5 lg:w-[600px]">
                  <div>
                <img className='h-[500px] rounded-2xl' src= {bill.image}></img>
            </div>

            
               
               <div className='border-2  border-amber-200 rounded-2xl  bg-[#d4af37] shadow-2xl  '>
                 <h1 className=''>Bill Description</h1>
                 <div className='border-t  border-sky-700 '></div>
                 <p>{bill.description}Dubai Al Jumairah Limited is a corporation dedicated to providing top-tier luxury and unmatched service to our valued customers. We take pride in maintaining the highest standards of excellence across all our offerings. To continue delivering the quality our clients deserve, it is essential that monthly bills are paid on time. Our advanced online payment management system ensures every customer stays informed and in control of their payments. </p>
                
                 </div>
            
            
            </div>

            <div className='flex flex-col space-y-4'>

                <div className='border-3  flex items-center justify-center  border-amber-200 rounded-lg h-[109px] pt-3'>
                  <h1>{bill.title}</h1>
                </div>
                 <div className='border-3   border-amber-200 flex items-center justify-center rounded-lg h-[109px]'>
                  <h1>Your located at {bill.location}</h1>
                </div>
                 <div className='border-3 flex justify-center items-center border-amber-200 rounded-lg h-[109px]'>
                  <h1>Please Pay${bill.amount}</h1>
                </div>
                   <div className='border-3 flex justify-center items-center border-amber-200 rounded-lg h-[109px]'>
                  <h1> Due On: {bill.date}</h1>
                </div>

                <button onClick={handleModal} className = "button" disabled = {!billValidation}>{!billValidation?"Sorry This Bill Is Already Past Due":"Pay Now"}</button>

            </div>

          
<dialog ref = {modalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Please fill out the feilds!</h3>
    <form >
         <fieldset className="fieldset">
     {/* username */}
        <label className='label'>Email</label>
        <input type="email" name = "email" value = {user.email} className='input' readOnly/>

        <label className='label'>BillId</label>
        <input type="text" name = "" value={bill._id} className='input' readOnly/>
        

         <label className='label'>Amount Due</label>
        <input type="text" name='amount' value={bill.amount} className='input' readOnly/>

        <label className='label'>Username</label>
        <input type="text" name = 'username' placeholder='your username'   className='input' />

           <label className='label'>Address</label>
        <input type="text" name = 'address' placeholder='provide address '  className='input' />

              <label className='label'>Phone</label>
        <input type="text" name = 'phone' placeholder='your number'  className='input ' />

           <label className='label'>Date</label>
        <input type="text" value = {bill.date} name = 'date'  className='input' />
         <button className='button mt-2 '>Pay Now</button>
        </fieldset>

       
        </form>

    <div className="modal-action">

      <form method="dialog">
        
       
       


       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    


            </div>

            

          


          
        </div>
    );
};

export default BillDetails;