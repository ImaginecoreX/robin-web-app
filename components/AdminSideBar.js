'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import admin from "@/public/admin2.svg"


const AdminSideBar = () => {

  const Router = useRouter('/');

  const NavigateToAdminDashboard = () => { Router.push('/admin', { scroll: false }) }
  const NavigateToUserMan = () => { Router.push('/admin-users', { scroll: false }) }
  const NavigateToAdminSytem = () => { Router.push('/admin-system', { scroll: false }) }
  const NavigateToChatMan = () => { Router.push('/admin-chat', { scroll: false }) }
  const NavigateToAdminHelp = () => { Router.push('/admin-help', { scroll: false }) }
  const NavigateToAdminNotification = () => { Router.push('/admin-notification', { scroll: false }) }
  const NavigateToAdminProfile = () => { Router.push('/admin-profile', { scroll: false }) }

  return (
    <div className='w-[250px] h-[100vh] ss:hidden bg-black flex-shrink-0 box-border  py-[40px] flex flex-col justify-between fixed '>

      <div className='flex flex-col '>
        <div className='w-full box-border pl-[30px] pr-[24px] py-[12px]'>
          <div className='flex items-center justify-center'>
            <div className='flex justify-center items-center bg-white rounded-full h-[70px] w-[70px]'>
              <Image src={admin} className='' /> 
            </div>
          </div>
          <div className='flex items-center justify-center mt-3'>
            <span className='text-lg font-semibold text-yellow-300 font-family-Raleway'>David Andrew</span>
          </div>
        </div>
        <div className='w-full mt-2 hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] ' onClick={NavigateToAdminDashboard}>
          <div className='font-family-Roboto text-[15px] font-medium text-white'>Dashboard</div>
        </div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToUserMan}><div className='font-family-Roboto text-[15px] font-medium text-white'>Users</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToAdminSytem}><div className='font-family-Roboto text-[15px] font-medium text-white'>System</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToChatMan}><div className='font-family-Roboto text-[15px] font-medium text-white'>Chat</div></div>
        



      </div>

      <div className='box-border pl-[30px] pr-[24px] cursor-pointer'><div className='font-family-Roboto text-[15px] font-medium text-white'>Log out</div></div>

    </div>
  )
}

export default AdminSideBar