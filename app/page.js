import Post from "@/components/Post";
import SideBar from "@/components/SideBar";
import React from "react";

const Home = () => {
  return (
    <div className="flex">
    <div className="w-[250px] flex-shrink-0">
      <SideBar />
    </div>
    <div className="flex-1 ">
      <section className="flex flex-col items-center box-border pt-[60px] w-full min-h-screen ">

      <div className="w-[60%] h-auto bg-white border-[1px] border-slate-200 rounded-[12px] box-border px-[36px] py-[20px] flex items-center relative">
        <div className="flex flex-wrap w-full h-auto gap-[16px]">

        <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">New</div>
        <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">Near</div>
        <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">Unsolved</div>
        
          
        </div>
      </div>

      <div className="w-full gap-[24px] pb-[60px] flex flex-col items-center mt-[30px]">
      <Post/>
        
        </div>

      </section>
    </div>
  </div>
  );
};

export default Home;
