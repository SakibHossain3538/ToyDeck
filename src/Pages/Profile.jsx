import React, { useContext } from 'react'
import { ToysContext } from '../Context/Context'
import MyContainer from '../MyContainer.jsx/MyContainer'
import { useNavigate } from "react-router";

function Profile() {
  const { user, updatePr, setLoading, setUser } = useContext(ToysContext)
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
      e.preventDefault();
    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
            updatePr(name, photoUrl)
              .then(() => {
                   navigate(`/profile?name=${encodeURIComponent(name)}&photo=${encodeURIComponent(photoUrl)}`, { replace: true });
                 console.log("Updated:", name, photoUrl)
                form.reset()
      })
      .catch((err) => {
        console.log("Error updating profile:",err)
      })
   }
  return (
    <MyContainer>
      <div className='flex flex-col md:flex-row items-center
      md:items-start m-5 md:m-20 gap-6 md:gap-12 mt-16'>
      <div>
        <img src={user.photoURL} alt="" className='rounded-2xl h-[150px] w-[150px] lg:h-[300px] lg:w-[300px]'/>
      </div>
      <div className='m-4 mt-10 md:m-12 flex flex-col items-center text-base-400'>
        <div className='text-xl'>Your Name :{user.displayName}</div>
        <div className='text-xl'>{user.email}</div>
      </div>
      </div>
      <form onSubmit={handleSubmit} className='mt-6 p-10 md:w-[700px] space-y-3 bg-base-100 rounded-2xl'>
                      <p className='mt-2.5 text-xl font-semibold text-gray-400'>If You Want To Edit Your Name or Photo You Can Do It !!</p>
              <input name='name' type="text" placeholder='Enter Your Name' className='border p-2 w-full rounded-2xl'
                 />
                  <input type="text" placeholder='Enter Your photoURL' name='photoUrl' className='border p-2 w-full rounded-2xl'
                 />
              <button className='btn'>Submit</button>
            </form>
    </MyContainer>
  )
}

export default Profile