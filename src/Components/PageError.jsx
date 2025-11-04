import React from 'react'
import { Link } from 'react-router'
import MyContainer from '../MyContainer.jsx/MyContainer'
function PageError() {
  return (
    <MyContainer className='flex flex-col items-center justify-center min-h-screen'>
        
        <div>
            
          <h1 className='text-5xl text-[#001931] text-center font-bold py-6'>
         Oops, page not found!</h1>
           <p className='text-3xl  text-center text-[#627382]'>
         The page you are looking for is not available.</p>
 
        </div>
        <div className='mx-auto my-12'>
            <Link to='/'><a className="btn">Go Back!</a></Link>
        </div>
    </MyContainer>
  )
}

export default PageError