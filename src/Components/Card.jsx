import React from 'react'
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

function Card({toy}) {
  return (
     <div className=" bg-white shadow-md rounded-lg px-4 pt-4 pb-2 w-[320px]">
      <img
        src={ toy.pictureURL}
        alt={toy.toyName}
        className="h-[300px] w-[300px] object-cover rounded-2xl"
      />
      <h3 className="font-bold mt-2 text-2xl">{toy.toyName}</h3>
      <div className='flex flex-row justify-between mt-6'>
        <p className="text-gray-500 text-xl flex flex-row">
          <span className='mt-1'><LiaDollarSignSolid /></span>
          {toy.price}</p>
        <p className="text-yellow-500 flex flex-row text-xl">{toy.rating}
          <span className='mt-1'><FaRegStar /></span></p>
      </div>
      <div className='flex flex-row justify-between mt-10'>
        <p className="text-gray-500 text-xl flex flex-row">
    
         <span className='text-bold text-black'>Available:</span> {toy.availableQuantity}</p>
        <Link to={ `/appDetails/${toy.toyId}`}><p className="text-yellow-500 flex flex-row btn text-xl ">View Details
        </p>
          </Link>
      </div></div>
  )
}

export default Card;