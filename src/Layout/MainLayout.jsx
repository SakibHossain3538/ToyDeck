import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, } from 'react-router'
import Footer from '../Components/Footer'
import { ToastContainer } from 'react-toastify'
function MainLayout() {

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  )
}

export default MainLayout