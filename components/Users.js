'use client'

import { Checkbox } from '@material-tailwind/react';
import AddNewEvent from './AddNewEvent';
import { useState } from 'react';
import Image from 'next/image';
import person from "@/public/person.svg"

const Users = ({ name, email, status, gender }) => {
    const [pane, setPane] = useState(false);

    return (
        <div className='mt-6'>
            <div className='border rounded mb-3'>
                <div className='w-full shadow-sm flex flex-row items-center justify-between px-3 rounded-md bg-white text hover:shadow-md'>

                    <div className='flex items-center'>

                        <div className='me-3'>
                            <Checkbox defaultChecked />
                        </div>

                        <Image
                            src={person}
                            alt='Avatar'
                            width='50px'
                            height='50px'
                            className='border rounded-full'
                        />

                        <div className='flex flex-col ms-4'>
                            <label className='text-xl font-semibold'>Tom Riddle</label>
                            <label className='text-sm opacity-60 font-semibold'>tomriddle@gmail.com</label>
                        </div>

                    </div>

                    <div className='flex flex-col ns:hidden ss:hidden sm:hidden md:hidden visible'>
                        <div>
                            <label className='opacity-70 text-sm me-2'>Joined On:</label> <label className='text-gray-900 font-semibold'>1111/11/11</label>
                        </div>
                        <div>
                            <label className='opacity-70 text-sm me-2'>City:</label> <label className='text-gray-900 font-semibold'>Kandy</label>
                        </div>
                    </div>

                    <div className='ns:hidden ss:hidden sm:hidden md:hidden visible'>
                        <div>
                            <label>Engagement:</label> <label>0</label>
                        </div>
                    </div>

                    <div>
                        <div className='text-green-500 font-bold ss:mt-[70px]'>Active</div>
                    </div>

                    <div className='me-3 ss:mt-[70px] ms-2'>
                        <AddNewEvent />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Users;
