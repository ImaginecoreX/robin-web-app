'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';
import { usePathname, useRoute, useSearchParams } from "next/navigation";
import Cookies from 'js-cookie';


const Login = () => {

    const router = useRouter();
    const navigateToRegister = () => {
      router.push("/register", { scroll: false });
    };


    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const logIn = async ()=>{
        await axios.post('http://localhost:8000/api/login-user',{
            username:username,
            password:password
        }).then((res)=>{
            Cookies.set('username', res.data.username, {expires: 7});
            Cookies.set('password', res.data.password, {expires: 7});
            router.push('/', {scroll:false});
        }).catch((err)=>{
            console.log(err)
        })

    
    }

  return (
    <section className='flex flex-col items-center justify-center w-full min-h-screen'>

            <div className='w-[400px] h-auto bg-white rounded-[12px] shadow-lg border-[1px] box-border p-[30px] flex flex-col gap-[24px]'>


            <div className='flex flex-col gap-[8px] pb-[16px]'>
                    <div><div className='font-family-Raleway text-[24px] font-semibold text-center leading-normal'>Login</div></div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                    <div><label>Email</label></div>
                    <div><input className='w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200' type='text' placeholder='example@domain.com' onChange={(event)=>{event.preventDefault,setUsername(event.target.value)}}/></div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                    <div><label>Password</label></div>
                    <div><input className='w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200' type='password' placeholder='Type your password' onChange={(event)=>{event.preventDefault,setPassword(event.target.value)}}/></div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                   <button className='w-full h-[40px] bg-black text-white font-family-Roboto text-[16px] font-semibold rounded-[8px]' onClick={logIn}>Login</button>
                </div>

            </div>

            <div className='pt-[30px]'><div className='font-family-Roboto text-[15px] font-medium leading-normal'>New user? <span className='text-blue-700 cursor-pointer' onClick={navigateToRegister}>Register</span></div></div>

     
    </section>
  )
}

export default Login