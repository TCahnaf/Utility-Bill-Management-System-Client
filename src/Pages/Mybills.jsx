import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Mybills = () => {

  document.title = "mybills"

  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  const {user} = use(AuthContext);

  const updateModalRef = useRef(null);
  const deleteModalRef = useRef(null);

  const fetchBills = () => {
    if (user?.email) {
      fetch(`https://ph-assignment10-server-livid.vercel.app/mybills?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBills(data));
    }
  }

  useEffect(() => {
    fetchBills();
  }, [user?.email])

  const totalBills = bills.length;
  let totalAmount = 0

  bills.forEach(bill => {
    totalAmount += parseInt(bill.amount)
  })

const handleUpdateModal = (bill) =>{
  setSelectedBill(bill)
  updateModalRef.current.showModal();
}

const handleDeleteModal = (bill) =>{
  setSelectedBill(bill)
  deleteModalRef.current.showModal();
}




  const updateBill = (e, id) => {
    e.preventDefault();
  
    if (!selectedBill) return; 

    const amount = e.target.amount.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value

    const updatedInfo = {
       
        amount,
        address,
        phone,
        date
      }
    

    fetch(`https://ph-assignment10-server-livid.vercel.app/mybills/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(updatedInfo)
    }).then(res => res.json()).then(data => {
      if (data.modifiedCount > 0){
        toast.success("Bill Updated Successfully");
        updateModalRef.current.close();
  
        fetchBills(); 

      }  else {
        toast.error("Something went wrong !!!")
      }
    }
  )
  }

  const deleteBill = (e,id) => {
    e.preventDefault();
  
    if (!selectedBill) return; 

    fetch(`https://ph-assignment10-server-livid.vercel.app/mybills/${id}`, {
      method: 'DELETE'

    }).then(res => res.json()).
    then(data => {
      if(data.deletedCount) {
        toast.success("Bill deleted Successfully")
         deleteModalRef.current.close();
      }

      else {
        toast.error("something went wrong !!!")
      }

      setBills(bills.filter(bill => bill._id !== id))
    })

  }

  const reportDownload = () => {
    const doc = new jsPDF();
    doc.text('Bill Information Downloaded',20,10)
    const columns = ["#", "Amount", "Address", "Phone", "Date"];
  const rows = bills.map((bill, index) => [
    index + 1,
    bill.amount,
    bill.address,
    bill.phone,
    bill.date
  ]);

 autoTable(doc, {
    head: [columns],
    body: rows
  });

  doc.save("my-bills-report.pdf");

  }

    return (
        <div className='p-20 space-y-6 rounded-lg bg-[#C9AE5D] min-h-screen '>
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
            <td><button onClick={()=>{handleUpdateModal(bill)}} className='button'>Update This Payment</button></td>
           
             <td><button onClick={()=>{handleDeleteModal(bill)}} className='button'>Delete This Payment</button></td>
          </tr>
        ))
      }     
    </tbody>
  </table>
  
</div>
<div className='flex mt-10 justify-center'>
  <button className={`${bills.length === 0?"hidden":"button2"} `} onClick = {reportDownload}>Download Bill Information</button>
</div>


{/* modal for handling update operation */}
 <dialog ref = {updateModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Please fill out the fields!</h3>
    
    <form onSubmit={ (e) => updateBill(e,selectedBill._id)} > 
         <fieldset className="fieldset">
         <label className='label'>Amount Due</label>
        <input type="text" name='amount' defaultValue={selectedBill?.amount || '' } className='input'/>
           <label className='label'>Address</label>
        <input type="text" name = 'address' defaultValue={selectedBill?.address || '' }  className='input' />
              <label className='label'>Phone</label>
        <input type="text" name = 'phone' defaultValue={selectedBill?.phone || '' }  className='input ' />
           <label className='label'>Date</label>
        <input type="text" defaultValue = {selectedBill?.date  || ''} name = 'date'  className='input' />
        
         <button type = "submit" className='button mt-2  '>Update Now</button> 
        </fieldset>
        </form>

    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

{/* modal for deleting bill */}
 <dialog ref = {deleteModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   
    
    <form onSubmit={ (e) => deleteBill(e,selectedBill._id)} > 
        <div className='flex justify-center'>
          <button type = "submit" className='button  '>Click to Confirm Deletion </button> 
          </div>

        </form>

    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>







<Toaster position='top-right'></Toaster>
</div>
    );
};

export default Mybills;