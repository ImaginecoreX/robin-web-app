import Post from "@/components/Post";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";
import person from "@/public/person.svg"
import post from "@/public/createpost.svg"

const Profile = () => {
  return (
    <div className="flex">
      <div className="w-[250px] flex-shrink-0 ss:hidden sm:hidden ns:hidden">
        <SideBar />
      </div>
      <div className="flex-col">
        <div className="flex-col flex items-center box-border py-[60px] w-full min-h-screen ss:w-full px-[50px] gap-3 bg-white border-[1px]">
          <div className="w-full flex h-[200px] bg-slate-900 static mb-9 ss:h-[70px]">
            <div className=" flex items-center gap-3 mb absolute">
              <div className="flex justify-center items-center border-2 border-black bg-white rounded-full w-[200px] h-[200px] mt-[120px] ss:mt-[30px] ml-[30px] ss:w-[70px] ss:h-[70px]">
                <Image src={person} className="h-[100px] w-[100px] ss:w-[20px] ss:h-[20px]" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[30px] ss:text-[15px] mt-14 ss:mt-8 text-white">Yasith Sandeh</span>
                <span className="text-[20px] ss:text-[14px] mt-9 ss:mt-4 text-black">yasith2002</span>
              </div>
            </div>
          </div>

          <div className="w-[90%] flex-1 md:mt-[100px] sm:mt-12">
            <div className="flex flex-row-reverse gap-4">
              <div className="flex gap-2 justify-center items-center border box-border px-3 py-3  border-green-500 rounded-[20px] hover:cursor-pointer">
                <Image src={post} className="h-[25px] w-[25px]" />
                <span>Create Post</span>
              </div>
              <div className="flex gap-2 justify-center items-center border box-border px-3 py-3 border-orange-800 rounded-[20px] hover:cursor-pointer">
                <Image src={person} className="h-[25px] w-[25px]" />
                <span>Update Profile</span>
              </div>

            </div>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <div className="flex justify-center items-center mt-9 w-[100px] font-family-Robot font-medium text-[14px] Robin-gray py-[8px] px-[16px] border-[1px] Robin-border rounded-full cursor-pointer">
              <span>My Post</span>
            </div>
            <div className="flex justify-center items-center mt-9 w-[100px] font-family-Robot font-medium text-[14px] Robin-gray py-[8px] px-[16px] border-[1px] Robin-border rounded-full cursor-pointer">
              <span>Saved</span>
            </div>
          </div>

          <div className="w-full gap-[24px] h-[600px] pb-[60px] flex flex-col items-center overflow-x-scroll">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
