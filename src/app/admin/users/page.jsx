"use client"
import React, { useState } from 'react'
import UserList from '../../../components/admin/UserList'
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../../components/admin/Sidebar';
import AdminNav from '../../../components/admin/Navbar';
import Script from 'next/script'

const Users = () => {
  const [sidebarOpen,setSidebarOpen]=useState(false)
const sidebar = useSelector((state) => state.sidebar);
console.log(sidebar.isSidebarOpen);
const dispatch = useDispatch();
  return (
    <>

      <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="dist/css/style.css" />
  <link rel="stylesheet" href="style.css" />
  <Script src="" />

  <title>Dashboard</title>
  {
    sidebar.isSidebarOpen&& 
 <Sidebar/>
  }

  
  <main 
   className={`w-full  ${sidebar.isSidebarOpen === true ? 'md:w-[calc(100%-256px)]' : 'md:w-full'} ${sidebar.isSidebarOpen === true ? 'md:ml-64' : 'md:ml-0'}  bg-gray-50 min-h-screen transition-all main `}>
   <AdminNav/>
  <UserList/>
  </main>

    </>
  )
}

export default Users