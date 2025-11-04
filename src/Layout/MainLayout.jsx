import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, } from 'react-router'
import Footer from '../Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MainLayout() {

  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  )
}

export default MainLayout