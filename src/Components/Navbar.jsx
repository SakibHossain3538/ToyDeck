import React, { useContext } from 'react'
import MyContainer from '../MyContainer.jsx/MyContainer'
import { Link, NavLink } from 'react-router'
import { ToysContext } from '../Context/Context'

function Navbar() {
  const { user, setuser, logOut } = useContext(ToysContext) 
  const handleLogout = () => {
    logOut()
      .then(() => {
      setuser(null)
      }).catch((e) => {
      console.log(e)
    })
  }
  return (
      <MyContainer className="">
          <div className="navbar bg-base-100 shadow-sm bg-toy rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">ToyTopia</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile">My Profile</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
    </ul>
  </div>
        
      {user?  <div className="gap-2 navbar-end">
              <div className=''>
    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="avatar">
        <div className="w-10  rounded-full">
                  <img
                    className="cursor-pointer rounded-2xl"
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || "https://i.ibb.co.com/V0NKMLfC/31046197.jpg"}
                      title={user.displayName}
                  />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
      </ul>
    </div>
              </div>
               <div onClick={handleLogout}>
  <button className="btn">LogOut</button>
</div>
              
          </div>:  <div className="gap-2 navbar-end">
              <div className=''>
    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/V0NKMLfC/31046197.jpg" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
      </ul>
    </div>
              </div>
                <div>
                <Link to='/login' className="btn">LogIn</Link>
               </div>
              
          </div>}
          </div>
          
     
    </MyContainer>
  )
}

export default Navbar