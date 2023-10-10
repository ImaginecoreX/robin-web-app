import AdminSideBar from "@/components/AdminSideBar";
import UserCount from "@/components/UserCount";
import Graph from "@/components/Graph";
import React from "react";
import NewPosts from "@/components/NewPosts";

const Home = () => {
  return (
      <div className='w-full h-auto' >
        <div className='flex'>
          <div className='basis-1/4 ss:hidden sm:hidden md:hidden ns:hidden'>
            <AdminSideBar />
          </div>
          <div className='basis-3/4 flex-col'>
            <div className='flex '>
              <div>
                <UserCount />
              </div>
            </div>
            <div className='flex ss:flex-col gap-6 mt-5'>
              <div className=''>
                <Graph />
              </div>
              <div>
                <NewPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
