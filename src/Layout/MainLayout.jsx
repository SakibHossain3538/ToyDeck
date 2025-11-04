import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

function MainLayout() {
  return (
      <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
      
  )
}

export default MainLayout