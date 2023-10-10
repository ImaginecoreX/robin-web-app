
import SideBar from "@/components/SideBar";
import React from "react";
import SinglePost from "@/components/Post";

const Post = () => {

  

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
        <SinglePost gettitle={'Title'} getdescription={'This is presentation'} getname={"name"} getdate={"2022"} gettags={"tag1 tag2 tag3 tag4"} getcategories={"food"} getbody={'post body message here'}  getvotes={"12K"} getuser={"Adams"} />
        <SinglePost gettitle={'Title'} getdescription={'This is presentation'} getname={"name"} getdate={"2022"} gettags={"tag1 tag2 tag3 tag4"} getcategories={"food"} getbody={'post body message here'}  getvotes={"12K"} getuser={"Adams"}/>
        <SinglePost gettitle={'Title'} getdescription={'This is presentation'} getname={"name"} getdate={"2022"} gettags={"tag1 tag2 tag3 tag4"} getcategories={"food"} getbody={'post body message here'}  getvotes={"12K"} getuser={"Adams"}/>
        <SinglePost gettitle={'Title'} getdescription={'This is presentation'} getname={"name"} getdate={"2022"} gettags={"tag1 tag2 tag3 tag4"} getcategories={"food"} getbody={'post body message here'}  getvotes={"12K"} getuser={"Adams"}/>
      </div>

      </section>
    </div>
  </div>
  );
};

export default Post;
