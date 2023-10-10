import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png";

const Notifications = () => {
  return (
    <div className="flex">
      <div className="w-[250px] flex-shrink-0 ss:hidden sm:hidden ns:hidden">
        <SideBar />
      </div>
      <div className="flex-1 ">
        <section className="flex flex-col items-center box-border pt-[60px] w-full  ">
          <div className="w-[60%] h-auto bg-white border-[1px] border-slate-200 rounded-[12px] box-border px-[36px] py-[20px] flex items-center relative">
            <div className="flex flex-wrap w-full h-auto gap-[16px]">
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                1245 Total
              </div>
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                456 Read
              </div>
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                678 Unread
              </div>
            </div>
          </div>

          <div className="flex w-[60%] ss:w-[400px] ns:w-full border box-border py-3 justify-center items-center mt-3 mb-3 px-4 gap-3 rounded bg-white">
            <div className="flex justify-center items-center lg:w-[10%] ss:w-[100px] h-[100px]">
              <Image
                src={profile}
                className=" h-[60px] w-[60px] rounded-full"
              />
            </div>
            <div className="w-[88%]">
              <span className="mb-1 text-xs font-semibold tracking-widest text-gray-400 title-font">
                CATEGORY
              </span>
              <p className="mb-2 leading-relaxed text-justify">
                In the quiet stillness of the early morning, the world seemed to
                hold its breath. Dew glistened on the grass, and a gentle breeze
                whispered through the leaves.{" "}
              </p>
              <span className="text-[13px] text-gray-500">2023/10/05</span>
            </div>
          </div>
          <div className="flex w-[60%] ss:w-[400px] ns:w-full border box-border py-3 justify-center items-center mb-3 px-4 gap-3 rounded bg-white">
            <div className="flex justify-center items-center lg:w-[10%] ss:w-[100px] h-[100px]">
              <Image
                src={profile}
                className=" h-[60px] w-[60px] rounded-full"
              />
            </div>
            <div className="w-[88%]">
              <span className="mb-1 text-xs font-semibold tracking-widest text-gray-400 title-font">
                CATEGORY
              </span>
              <p className="mb-2 leading-relaxed text-justify">
                In the quiet stillness of the early morning, the world seemed to
                hold its breath. Dew glistened on the grass, and a gentle breeze
                whispered through the leaves.{" "}
              </p>
              <span className="text-[13px] text-gray-500">2023/10/05</span>
            </div>
          </div>
          <div className="flex w-[60%] ss:w-[400px] ns:w-full border box-border py-3 justify-center items-center mb-3 px-4 gap-3 rounded bg-white">
            <div className="flex justify-center items-center lg:w-[10%] ss:w-[100px] h-[100px]">
              <Image
                src={profile}
                className=" h-[60px] w-[60px] rounded-full"
              />
            </div>
            <div className="w-[88%]">
              <span className="mb-1 text-xs font-semibold tracking-widest text-gray-400 title-font">
                CATEGORY
              </span>
              <p className="mb-2 leading-relaxed text-justify">
                In the quiet stillness of the early morning, the world seemed to
                hold its breath. Dew glistened on the grass, and a gentle breeze
                whispered through the leaves.{" "}
              </p>
              <span className="text-[13px] text-gray-500">2023/10/05</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notifications;
