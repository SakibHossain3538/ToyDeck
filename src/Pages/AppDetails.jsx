import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ToysContext } from '../Context/Context'
import MyContainer from '../MyContainer.jsx/MyContainer'
import { FaRegStar } from "react-icons/fa";

function AppDetails() {
    const { toyId } = useParams()
    const { toys } = useContext(ToysContext)
  const [submitted, setSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)
    setSubmitted(true)
  }
    const toyDetail = toys.find(product => product.id === toyId)
    if (!toyDetail) return <p>Toy not found</p>;
 
  return (
      <MyContainer className='h-full'>
          <div className=' pt-40 flex flex-col lg:flex-row lg:justify-between'>
              <img src={toyDetail.pictureURL} alt=""
                  className='h-[300px] w-[300px] rounded-2xl' />
              <div className='lg:pl-12 pt-16'>
                  <div className='text-3xl font-bold'>{toyDetail.toyName}</div>
                  <div className='py-3.5 text-xl font-semibold'>Seller : {toyDetail.sellerName}</div>
                 
                  <div className='text-xl '>Contact Email : {toyDetail.sellerEmail}</div>
          <div className='text-xl text-gray-500 mb-6'>{toyDetail.description}</div>
          <button className='btn' onClick={()=>{setShowForm(true)}} disabled={submitted}>{submitted ? "Submitted" : "Try Now"}</button>
          {showForm && !submitted && (
            <form onSubmit={handleSubmit} className='mt-6 p-10 md:w-[700px] space-y-3 bg-base-100 rounded-2xl'>
              <input type="text" placeholder='Enter Your Name' className='border p-2 w-full rounded-2xl'
                required />
                  <input type="email" placeholder='Enter Your E-mail' className='border p-2 w-full rounded-2xl'
                required />
              <button className='btn'>Submit</button>
              <p className='mt-2.5 text-xl font-semibold text-gray-400'>After Submitted The Form,Our Agent Will Cantact You Soon.</p>
            </form>

          )}
              </div>
             
          </div>
          <div className='text-xl flex flex-row justify-around mt-6 p-7 bg-toy font-semibold rounded-2xl lg:mt-[250px]'>
           <div className=''>
            Price : ${toyDetail.price}
          </div>
          <div className='flex flex-row'>
                  Ratings : <span className='mt-1 ml-1'> <FaRegStar /> </span>
                  <span>{toyDetail.rating}</span>
          </div>
          <div className='text-'>
            Available : {toyDetail.availableQuantity}
              </div>
      </div>
      </MyContainer>
  )
}
export default AppDetails;
