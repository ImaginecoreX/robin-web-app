'use client'

import AdminSideBar from '@/components/AdminSideBar'
import Searchbar from '@/components/Searchbar'
import SmartSelect from '@/components/Select'
import Users from '@/components/Users'

export default function UserList() {


    return (

        <div className="flex ">
            <div className="basis-1/4 flex-shrink-0 ss:hidden sm:hidden ns:hidden">
                <AdminSideBar />
            </div>
            <div className='basis-3/4 box-border px-11'>
                <div className='ns:p-3 ss:p-5 sm:p-5 md:p-5 mt-5'>

                    <div className='mb-5'>
                        <text className='text-4xl font-bold'>User Management</text>
                    </div>

                    <hr />

                    <div className='p-5 flex rounded-md mt-5 border'>

                        <div className='flex flex-col w-[10%] items-center'>
                            <label className='text-xl font-bold'>50</label>
                            <label>Users</label>
                        </div>

                        <div className='ns:w-[80%] ss:w-[80%] sm:w-[80%] w-[30%] items-center ms-5'>
                            <Searchbar />
                        </div>

                        <div className='ns:hidden ss:hidden sm:hidden w-[60%] flex gap-5 ms-5 justify-end items-center'>
                            <label>Sort by:</label>
                            <SmartSelect />
                        </div>


                    </div>

                    <div className='flex justify-between mt-4'>

                        <div>
                            <button className='px-4 py-2 bg-slate-500 rounded-md mx-4 text-white'>Select all</button>
                        </div>

                        <div>
                            <button className='px-4 py-2 bg-green-700 rounded-md mx-3 text-white'>Send Notfication</button>
                        </div>

                    </div>


                    <div className='mt-3 max-h-[400px] overflow-auto'>
                        <Users />
                        <Users />
                        <Users />
                        <Users />
                        <Users />
                        <Users />
                        <Users />
                        <Users />
                        <Users />
                    </div>


                </div>
            </div>


        </div>
    )
}
