import React from 'react'
import { Outlet } from 'react-router-dom'
import Haeder from './header'
import Footer from './footer'
const Layout = () => {
  return (
    <div>
       <Haeder />
         <Outlet />
       <Footer />
    </div>
  )
}

export default Layout