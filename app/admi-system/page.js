import AddNewCategory from "@/components/AddNewCategory";
import AdminSideBar from "@/components/AdminSideBar";
import EditCategory from "@/components/EditCategory";
import PostManagement from "@/components/PostManagement";
import React from "react";

const System = () => {
    return (
        <div className='w-full h-auto' >
            <div className='flex '>
                <div className='basis-1/4'>
                    <AdminSideBar />
                </div>
                <div className='lg:basis-3/4 flex-col mt-7'>
                    <div className="flex-col w-[90%] mb-9 box-border lg:px-5 py-7">
                        <span className="text-lg font-family-Raleway font-semibold text-yellow-600">Post Management</span>
                        <PostManagement/>
                    </div>
                    <div className="h-auto flex-col gap-5 border box-border px-4 justify-center mb-1 box-bord py-4 w-[1040px] bg-gray-50">
                        <div className="mb-4">
                            <span className="text-lg font-family-Raleway font-semibold text-yellow-600">Category Management</span>
                        </div>
                        <div className="flex-col justify-center items-center w-[1000px] bg-blue-50 h-[300px] ss:w-[350px] ns:w-[200px] overflow-y-scroll ss:overflow-x-scroll gap-2 border rounded box-border py-3 px-5 ">
                            <div className="h-auto w-full  ">
                                <div className="flex ">
                                    <div className="basis-2/4 border box-border py-3 px-3">
                                        <span>Category</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <span>Post Count</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <span>Edit/Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-auto w-full">
                                <div className="flex">
                                    <div className="basis-2/4 border box-border py-3 px-3">
                                        <span>Name</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <span>1356</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <div className="flex gap-3 justify-center items-center">
                                            <div className="bg-green-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <div className="text-white">
                                                    <EditCategory/>
                                                    </div>
                                            </div>
                                            <div className="bg-red-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="basis-2/4 border box-border py-3 px-3">
                                        <span>Name</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <span>1356</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <div className="flex gap-3 justify-center items-center">
                                            <div className="bg-green-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Edit</button>
                                            </div>
                                            <div className="bg-red-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="basis-2/4 border box-border py-3 px-3">
                                        <span>Name</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <span>1356</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <div className="flex gap-3 justify-center items-center">
                                            <div className="bg-green-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Edit</button>
                                            </div>
                                            <div className="bg-red-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="basis-2/4 border box-border py-3 px-3">
                                        <span>Name</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <span>1356</span>
                                    </div>
                                    <div className="basis-1/4 border box-border py-3 px-3">
                                        <div className="flex gap-3 justify-center items-center">
                                            <div className="bg-green-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Edit</button>
                                            </div>
                                            <div className="bg-red-700 border w-[88px] h-[38px] rounded-[23px] flex justify-center items-center">
                                                <button className="text-white">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <AddNewCategory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default System
