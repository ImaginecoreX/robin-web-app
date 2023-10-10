"use client";
import React, { useEffect, useMemo, useState } from "react";
import Comment from "./Comment";


// toggle nav option pane class
const toggleOptionPane = () => {
  const pane = document.getElementById("nav-option-pane");
  pane?.classList.toggle("nav-option-pane");
};
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Post = () => {
  const [show, setShow] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const [viewComment, setViewComment] = useState(false);

  const [bookmark, setBookmark] = useState("bookmark");

  const [page, setPage] = useState("home");

  const upVote = () => {
    setIsUp(true);
  };

  const downVote = () => {
    setIsDown(true);
  };

  const handleVote = () => {
    if (isUp) {
      setIsDown(false);
    } else if (isDown) {
      setIsUp(false);
    }
  };

  useMemo(handleVote, [isUp, isDown]);

  const toggleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const toggleComView = ()=>{
    if(viewComment){
      setViewComment(false);
    }else{
      setViewComment(true);
    }
  }

  const toggleBookmark = ()=>{
    if(bookmark==="bookmark"){
      setBookmark("bookmarked");
    }else{
      setBookmark("bookmark");
    }
  }

  return (
    <div className="w-[60%] h-auto bg-white border-[1px] border-slate-200 rounded-[12px] box-border px-[36px] py-[40px] flex items-center relative">
      {/* <div className='w-1/12 h-full bg-yellow-200'>
        <div></div>
      </div> */}

      <div className="h-full w-12/12 ">
        <div className="flex items-center justify-between pb-[24px] border-b-[1px] border-slate-200">
          <div className="flex items-center  gap-[16px]">
            <div>
              <div className="w-[32px] h-[32px] bg-slate-300 rounded-[2px]"></div>
            </div>
            <div className="text-[14px] font-family-Roboto font-medium">
              <div>Name</div>
              <div className="text-[13px] font-family-Roboto font-normal">
                2023-10-05 15:24
              </div>
            </div>
          </div>
          {/* vote icons */}
          <div className="flex items-center gap-[24px]">
            <div
              className={`${"w-[18px] h-[18px] set-bg"} ${
                isUp ? "upvote-orange" : "upvote"
              }`}
              onClick={upVote}
            ></div>

            <div className="font-family-Roboto text-[14px] font-bold">12K</div>
            <div>
              <div
                className={`${"w-[18px] h-[18px] set-bg"} ${
                  isDown ? "downvote-orange" : "downvote"
                }`}
                onClick={downVote}
              ></div>
            </div>
          </div>
        </div>

        <div className="pt-[24px]">
          <div className="font-family-Fira-Sans text-[24px] font-semibold leading-normal">
            This is why you shouldn't take work from anyone who comes from a
            non-professional standpoint
          </div>

          {/* tags */}
          <div className="flex items-center gap-[16px] pt-[10px] flex-wrap">
            <div className="font-medium text-blue-500 cursor-pointer font-family-Fira-Sans">
              #workout
            </div>
            <div className="font-medium text-blue-500 cursor-pointer font-family-Fira-Sans">
              #helth
            </div>
            <div className="font-medium text-blue-500 cursor-pointer font-family-Fira-Sans">
              #food
            </div>
            <div className="font-medium text-blue-500 cursor-pointer font-family-Fira-Sans">
              #drink
            </div>
          </div>
        </div>

        <div className="pt-[20px]">
          <div className="font-family-Raleway text-[15px] font-bold Robin-gray">
            QUERY
          </div>
          {/* body */}
          <div className="pt-[16px] border-b-[1px] pb-[30px]">
            <div className="font-family-Roboto text-[15px] font-normal leading-[28px]">
              This person randomly texted me during the long weekend and told me
              that he has a project to be worked on. (I'm not going into full
              detail since I'd prefer to keep his identity and project hidden){" "}
              <span
                className="cursor-pointer Robin-orange"
                onClick={toggleShow}
              >
                {show ? "" : "show more"}
              </span>{" "}
              {show
                ? `A bit of context about myself, I'm a senior visual designer with 5 years in the industry and have worked for brands like MAS, ASUS, Mobitel, and Mercedes Benz Sri Lanka. I try my best to keep a clear line between work and personal life and therefore with all my clients I try to be very professional and nothing personal.

            So back to this guy. He texted me and started calling me 'Malli' every time he addressed me even though he had no idea about my age. Apparently, he was in my school and someone who knew me had given him my contact.
            
            The voice recording is him explaining what he needs to be done while chanting 'Malli' at the start of every sentence. ( I might or might not upload the audio. If I do I will change his voice by editing)
            
            I kept talking only in English and addressed him as Machan to not be rude by being 'Too Professional'.`
                : ""}{" "}
              <span
                className="cursor-pointer Robin-orange"
                onClick={toggleShow}
              >
                {show ? "show less" : ""}
              </span>
            </div>

            {/* category */}
            <div className="flex flex-wrap items-center gap-[16px] pt-[24px]">
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                Health
              </div>
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                Mental
              </div>
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                Technical Support
              </div>
              <div className="font-family-Robot font-medium text-[14px] Robin-gray w-fit py-[8px] px-[16px] border-[1px] Robin-border rounded-full">
                Grocery
              </div>
            </div>
          </div>
          {/* body end */}

          {/* actions */}
          <div className="pt-[30px] flex justify-between">
            
            <div className="flex items-center gap-[8px]">
            <div className="flex items-center gap-[20px]">
            <div
                className={`${"w-[24px] cursor-pointer h-[24px] set-bg "} ${bookmark}`}
              
              onClick={toggleBookmark}></div>
              <div
                className="w-[21px] cursor-pointer h-[21px] set-bg comment-icon"
              onClick={toggleComView}
              ></div>
            </div>
              <div className="font-bold leading-normal font-family-Roboto color-bw text-[15px] cursor-pointer" onClick={toggleComView}>
                1K
              </div>
            </div>
            <div
              className="w-[21px] cursor-pointer h-[21px] set-bg more-icon"
              onClick={toggleOptionPane}
            ></div>
          </div>
        </div>




                <div className={`${viewComment?'w-full h-auto box-border pt-[40px]':'hidden'}`}>
                  <Comment/>
                </div>
                  
                  

      </div>


      {/* option pane
      <div
        initial="hidden"
        animate="visible"
        variants={variants}
        id="nav-option-pane"
        className="nav-option-pane bottom-[5px] right-[-5px] py-[20px] px-[24px] border-[1px] border-solid absolute rounded-[6px] nav-bar z-50 bg-white"
      >
        
      </div> */}
    </div>
  );
};

export default Post;
