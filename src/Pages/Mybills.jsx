import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Mybills = () => {

  const [bills, setBills] = useState([]);

  const {user} = use(AuthContext);

  useEffect(()=>{ if(user.email){ fetch(`http://localhost:3000/mybills?email=${user.email}`).
    then(res => res.json()).
    then(data => setBills(data) )}}
  , [user?.email])

  const totalBills = bills.length;
  let totalAmount = 0

  bills.forEach(bill => {
    totalAmount += parseInt(bill.amount)
  })



    return (
        <div className='p-20 space-y-6 rounded-lg'>


          <div className='border-2 border-sky-700'><h1>You have paid: {totalBills} bills till now</h1>
          <h1>Total Amount Paid: ${totalAmount}</h1></div>
          

          <div></div>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Email</th>
        <th>Amount</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Date</th>
        <th className='text-center'>Update</th>
        <th className='text-center'>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        bills.map((bill,index) => (

          <tr key = {bill._id}>
            <td> {index+1}</td>
            <td>{bill.user_name}</td>
            <td>{bill.email}</td>
            <td>{bill.amount}</td>
            <td>{bill.address}</td>
            <td>{bill.phone}</td>
            <td>{bill.date}</td>
            <td><button className='button'>Update This Payment</button></td>
             <td><button className='button'>Delete This Payment</button></td>
          </tr>
      
      
        ))
      }
      



    </tbody>
  </table>
</div>




          
            

            
        </div>
    );
};

export default Mybills;