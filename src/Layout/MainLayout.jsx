import React from 'react'
import Navbar from '../Components/Navbar'
import SignupForm from '../Pages/Signup'
import LoginForm from '../Pages/Login'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
      <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
      
  )
}

export default MainLayout