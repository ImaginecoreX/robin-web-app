'use client'
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import up from '@/public/up.png';
import down from '@/public/down.png';
import boy from '@/public/boy.jpg';
import girl from '@/public/girl.jpg';

const Leader = ({status, gender}) => {

  const [isUp, setIsUp] = useState(false);
  const [isG, setIsG] = useState(false);
  
  const toggleIsUp = (status)=>{
    if(status){
      setIsUp(false);
    }else{
      setIsUp(true);
    }
  }
  
  const profilePic = (gender)=>{
    if(gender==='male'){
      setIsG(false);
    }else{
      setIsG(true);
    }
  }

  useMemo(()=>{toggleIsUp(status)}, [status]);
  useMemo(()=>{profilePic(gender)}, [gender]);

  // const renderId = id === "1" ? <Image src={trophy} alt="Trophy" className='w-[100px] h-[100px]'/> : id;

  return (
    <div className='flex flex-col w-full'>
      <div className='flex p-3 text-lg font-bold border-b-[1px] Robin-border box-border pb-[20px] text-opacity-40 Robin-primary'>

        <div className="flex flex-wrap items-center justify-around w-full h-auto">
          <div className='flex justify-center'>
            <Image src={isUp?down:up} className='w-[15px] h-[15px]' alt="User Image" />
          </div>
          <div className='w-[25%] flex justify-center'>
            <Image src={isG?boy:girl} className='w-[60px] h-[60px] rounded-full border-[1px] set-bg' alt="User Image" />
          </div>
          <div className='w-[40%] flex justify-center'>
            <label>John cena</label>
          </div>
          <div className='w-[20%] flex justify-center'>
            <label>354</label>
          </div>
          <div className='w-[10%] flex justify-center'>
            <label>1</label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Leader;
