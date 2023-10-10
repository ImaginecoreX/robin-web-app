import Image from 'next/image'
import React from 'react'
import users from "@/public/users.svg"
import post from "@/public/blog.png"
import person from "@/public/person.svg"
import seemore from "@/public/seemore.png"

const UserCount = () => {
    return (
        <div className='w-full h-auto flex ss:flex-col ns:flex-col ss:gap-3  gap-x-14 mt-6  '>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg '>
                    <div className='flex justify-between gap-11 '>
                        <div className=''>
                            <Image src={users} className='h-[50px] w-[50px]' />
                        </div>
                        <div className='text-end'>
                            <label className='text-yellow-700 text-5xl font-bold font-family-Roboto'>2000</label><br />
                            <label className='text-black text-2xl font-semibold font-family-Raleway'>Total Users</label>
                        </div>
                    </div>
                    <div className='text-end'>
                        <span className='text-blue-500'>+15 from yesterday</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg'>
                    <div className='flex justify-between gap-11 '>
                        <div className=''>
                            <Image src={post} className='h-[50px] w-[50px] ' />
                        </div>
                        <div className='text-end'>
                            <label className='text-yellow-700 text-5xl font-bold font-family-Roboto'>1678</label><br />
                            <label className='text-black text-2xl font-semibold font-family-Raleway'>Total Posts</label>
                        </div>
                    </div>
                    <div className='text-end'>
                        <span className='text-blue-500'>+23 from yesterday</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg'>
                    <div className='flex justify-between gap-11 '>
                        <div className=''>
                            <Image src={person} className='h-[50px] w-[50px]' />
                        </div>
                        <div className='text-end'>
                            <label className='text-yellow-700 text-5xl font-bold font-family-Roboto'>56</label><br />
                            <label className='text-black text-2xl font-semibold font-family-Raleway'>Best Score
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center gap-3'>
                        <Image src={seemore} className='w-[16px] h-[16px] hover:cursor-pointer' />
                        <span className='text-blue-500 hover:cursor-pointer'>Symon Curnor</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCount