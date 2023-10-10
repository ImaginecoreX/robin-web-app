import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png"
import admin2 from "@/public/admin2.svg"

const Home = () => {
    return (
        <div className="flex">
            <div className="w-[250px] flex-shrink-0 ss:hidden sm:hidden ns:hidden">
                <SideBar />
            </div>
            <div className="flex-1 ">
                <section className="flex flex-col items-center box-border pt-[60px] w-full  ">
                    <div className="flex w-[60%] ss:w-[400px] ns:w-full border box-border py-3 justify-center items-center mb-3 px-4 gap-3 rounded bg-white">
                        <div className="flex justify-center items-center lg:w-[10%] ss:w-[100px] h-[100px]">
                            <Image src={profile} className=" h-[60px] w-[60px] rounded-full"/>
                        </div>
                        <div className="w-[88%]">
                            <span className="tracking-widest font-semibold text-xs title-font text-gray-400 mb-1">CATEGORY</span>
                            <p className="leading-relaxed text-justify mb-2">In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. </p>
                            <span className="text-[13px] text-gray-500">2023/10/05</span>
                        </div>
                    </div>
                    <div className="flex w-[60%] ss:w-[400px] ns:w-full border box-border py-3 justify-center items-center mb-3 px-4 gap-3 rounded bg-white">
                        <div className="flex justify-center items-center lg:w-[10%] ss:w-[100px] h-[100px]">
                            <Image src={profile} className=" h-[60px] w-[60px] rounded-full"/>
                        </div>
                        <div className="w-[88%]">
                            <span className="tracking-widest font-semibold text-xs title-font text-gray-400 mb-1">CATEGORY</span>
                            <p className="leading-relaxed text-justify mb-2">In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. </p>
                            <span className="text-[13px] text-gray-500">2023/10/05</span>
                        </div>
                    </div><div className="flex w-[60%] ss:w-[400px] ns:w-full border box-border py-3 justify-center items-center mb-3 px-4 gap-3 rounded bg-white">
                        <div className="flex justify-center items-center lg:w-[10%] ss:w-[100px] h-[100px]">
                            <Image src={profile} className=" h-[60px] w-[60px] rounded-full"/>
                        </div>
                        <div className="w-[88%]">
                            <span className="tracking-widest font-semibold text-xs title-font text-gray-400 mb-1">CATEGORY</span>
                            <p className="leading-relaxed text-justify mb-2">In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. </p>
                            <span className="text-[13px] text-gray-500">2023/10/05</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
