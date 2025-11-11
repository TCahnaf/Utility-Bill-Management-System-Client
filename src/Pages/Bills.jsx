import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../components/Cards';


const Bills = () => {
    const totalBills = useLoaderData();
     const [category, setCategory] = useState("");
     const [bills, setBills] = useState(totalBills);

     const handleCategory = (e) => {
        setCategory(e.target.value)
     }

     useEffect(()=> {
        if(category){
        fetch(`http://localhost:3000/bills?category=${category}`).then(res => res.json())
        .then(data => setBills(data))
     } else {
      setBills(totalBills)
     }}, [category, totalBills])





    return (
        <div className=' bg-[#d4af37] min-h-screen   '>
            
<div className="p-4 flex flex-col space-y-2 ">
  <label>
    Filter Bills By Categories
  </label>

    <select 
      value={category}
      onChange={handleCategory}
      className="select w-[200px]"
    >
      <option value="">All Available Bills</option>
      <option value="Electricity">Electricity</option>
      <option value="Gas">Gas</option>
      <option value="Water">Water</option>
      <option value="Parking">Parking</option>
      <option value="Heating">Heating</option>
      <option value="Waste">Waste Management</option>
      <option value="Internet">Internet</option>
    </select>

<div className='flex justify-center'><div className='grid grid-cols-2 lg:grid-cols-3 gap-10 '>

    {
      bills.length === 0 ? <div className='text-center min-h-screen flex flex-col items-center justify-center'><h1 >You currently don't have any {category} Bills Available Now</h1></div>:
  
      bills.map(bill => <Cards key = {bill._id} bill = {bill}></Cards>)
    }</div>

    
    </div>





</div>


            
        </div>
    );
};

export default Bills;