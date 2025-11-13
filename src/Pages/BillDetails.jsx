import React, { use, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const BillDetails = () => {

    document.title = "bill details";

    const {user} = use(AuthContext);

    const bill = useLoaderData();
    const billDate = new Date(bill.date)
    const currentDate = new Date();
    const billValidation = billDate.getFullYear() === currentDate.getFullYear() && billDate.getMonth() === currentDate.getMonth();
    console.log(billValidation)
    const modalRef = useRef(null)

    const today = currentDate.toISOString().split('T')[0];
    console.log(today)

    const handleModal = () => {
        modalRef.current.showModal();

    }

    const submitPaymentInfo = (e) => {
        e.preventDefault();
        const email = e.target.email.value
          const billId = e.target.billId.value
            const amount = e.target.amount.value
              const username = e.target.username.value
                const address = e.target.address.value
                  const phone = e.target.phone.value
                    const date = e.target.date.value

        const paymentInfo = {
           bill_id:billId,
            email,
            amount,
            user_name: username,
            address:address,
            phone,
            date  
        }

        fetch('https://ph-assignment10-server-livid.vercel.app/mybills', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
              body: JSON.stringify(paymentInfo)  
            }).then(res => res.json()).
            then(data => {
                if(data.insertedId){
                    modalRef.current.close();
                    toast.success('Payment Submitted Successfully')
                }
                else{
                    toast.error('Sorry Something Went Wrong')
                }
            })
        }

      


    return (
    
        <div className='bg-[#1B3D81] min-h-screen'>

            <div className='flex flex-col lg:flex-row gap-5  justify-center items-center  p-20'>

            <div className = "flex flex-col space-y-5 lg:w-[600px]">
                  <div>
                <img className='h-80 lg:h-[500px] rounded-2xl' src= {bill.image}></img>
            </div>

            
               
               <div className='border-2 p-4  border-amber-200 rounded-2xl  bg-[#C9AE5D] shadow-2xl text-[#1B3D81]  '>
                 <h1 className=''>Bill Description</h1>
                 <div className='border-t  border-sky-700 mb-2 '></div>
                 <p>{bill.description}Dubai Al Jumairah Limited is a corporation dedicated to providing top-tier luxury and unmatched service to our valued customers. We take pride in maintaining the highest standards of excellence across all our offerings. To continue delivering the quality our clients deserve, it is essential that monthly bills are paid on time. Our advanced online payment management system ensures every customer stays informed and in control of their payments. </p>
                
                 </div>
            
            
            </div>

            <div className='flex flex-col space-y-4'>

                <div className='border-3  flex items-center justify-center  border-amber-200 rounded-lg h-[109px] pt-3 '>
                  <h1 className='text-[#C9AE5D]'>{bill.title}</h1>
                </div>
                 <div className='border-3   border-amber-200 flex items-center justify-center rounded-lg h-[109px]'>
                  <h1 className='text-[#C9AE5D]'>Your located at {bill.location}</h1>
                </div>
                 <div className='border-3 flex justify-center items-center border-amber-200 rounded-lg h-[109px]'>
                  <h1 className='text-[#C9AE5D]'>Please Pay ${bill.amount}</h1>
                </div>
                   <div className='border-3 flex justify-center items-center border-amber-200 rounded-lg h-[109px]'>
                  <h1 className='text-[#C9AE5D]'> Due On: {bill.date}</h1>
                </div>

                <button onClick={handleModal} className = "button" disabled = {!billValidation}>{!billValidation?"Sorry This Bill Is Already Past Due":"Pay Now"}</button>

            </div>

          
<dialog ref = {modalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Please fill out the feilds!</h3>
    <form onSubmit={submitPaymentInfo}>
         <fieldset className="fieldset">
     {/* username */}
        <label className='label'>Email</label>
        <input type="email" name = "email" defaultValue = {user.email} className='input' readOnly/>

        <label className='label'>BillId</label>
        <input type="text" name = "billId" defaultValue={bill._id} className='input' readOnly/>
        

         <label className='label'>Amount Due</label>
        <input type="text" name='amount' defaultValue={bill.amount} className='input' readOnly/>

        <label className='label'>Username</label>
        <input type="text" name = 'username' placeholder='your username'   className='input' />

           <label className='label'>Address</label>
        <input type="text" name = 'address' placeholder='provide address '  className='input' />

              <label className='label'>Phone</label>
        <input type="text" name = 'phone' placeholder='your number'  className='input ' />

           <label className='label'>Date</label>
        <input type="text" defaultValue = {today} name = 'date'  className='input' />
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

            
<Toaster position='top-right'></Toaster>
          


          
        </div>
    );
};

export default BillDetails;