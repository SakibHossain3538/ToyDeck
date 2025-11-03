import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ToysContext } from '../Context/Context'
import MyContainer from '../MyContainer.jsx/MyContainer'
import { FaRegStar } from "react-icons/fa";

function AppDetails() {
    const { toyId } = useParams()
    const { toys } = useContext(ToysContext)
   
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
                   <div className='text-xl text-gray-500'>{toyDetail.description}</div>
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
