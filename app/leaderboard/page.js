import Leader from "@/components/Leader";
import SideBar from "@/components/SideBar";
import React from "react";

const Leaderboard = ({ date }) => {
  return (

    <div className="flex">
      <div className="w-[250px] flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex-1 ">



        <section className="flex flex-col items-center box-border pt-[60px] w-full min-h-screen Robin-primary ">

          <div className="w-[80%] mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            {/* <h1 className="">{date}</h1> */}
          </div>

          <div className="w-[80%] mb-4 h-auto bg-white border-[1px] border-slate-200 rounded-[12px] box-border px-[36px] py-[20px] flex items-center relative">
            <div className="flex flex-wrap justify-around w-full h-auto">
              <div className='flex justify-center'>
              </div>
              <div className='w-[25%] flex justify-center'>
              </div>
              <div className='w-[40%] flex justify-center'>
                <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">Name</div>
              </div>
              <div className='w-[20%] flex justify-center'>
                <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">Points</div>
              </div>
              <div className='w-[10%] flex justify-center'>
                <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">Rank</div>
              </div>
            </div>
          </div>

          <div className="w-[80%] h-auto border-[1px] rounded-[12px] box-border px-[36px] py-[20px] flex items-center relative bg-white">
            <div className="flex flex-wrap w-full h-auto">

              <div className="w-full max-h-[400px] overflow-auto ">
                <Leader status={true} gender={'male'} />
                <Leader status={false} gender={'female'}/>
                <Leader status={true} gender={'male'}/>
              
              </div>

            </div>

          </div>

          <div className="w-full gap-[24px] pb-[60px] flex flex-col items-center mt-[30px]">

          </div>

        </section>
      </div>
    </div>
  );
};

export default Leaderboard;
