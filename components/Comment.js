import React from "react";

const Comment = () => {
  return (
    <div className="border-b-[1px] Robin-border border-solid pb-[24px]">
      <div className="flex items-center gap-[20px] w-full justify-between">
        <div className="flex items-center gap-[20px]">
        <div className="w-[30px] h-[30px] bg-blue-400 rounded-full"></div>
        <div className="">
          <div className="font-semibold font-family-Roboto text-[16px]">
            @username
          </div>
          <div className="font-semibold Robin-gray font-family-Fira-Sans text-[12px]">
            22 JAN 2023
          </div>
        </div>
        </div>
        <div className="cursor-pointer">
           <div
            className="w-[21px] h-[21px] reply-icon set-bg"></div>
        </div>
      </div>

      <div className="pt-[12px]">
        <div className="font-normal font-family-Roboto text-[14px]">Coming from an only child with a business to another. I was in a similar situation, but I chose not to work with my parents because we often disagree about a business decisions (they’re old school)</div>
      </div>

      <CommentReply/>
    </div>
  );
};

export default Comment;

// ########################################

export const CommentReply = () => {
  return (
    <div className="pb-[24px] border-l-[2px] box-border border-Robin-orange border-solid pl-[30px] mt-[30px]">
      <div className="flex items-center gap-[20px] w-full justify-between">
        <div className="flex items-center gap-[20px]">
        <div className="w-[30px] h-[30px] bg-blue-400 rounded-full"></div>
        <div className="">
          <div className="font-semibold font-family-Roboto text-[16px]">
            @username
          </div>
          <div className="font-semibold Robin-gray font-family-Fira-Sans text-[12px]">
            22 JAN 2023
          </div>
        </div>
        </div>
        <div className="cursor-pointer">
           <div
            className="w-[21px] h-[21px] reply-icon set-bg"></div>
        </div>
      </div>

      <div className="pt-[12px] ">
        <div className="font-normal font-family-Roboto text-[14px]">Coming from an only child with a business to another. I was in a similar situation, but I chose not to work with my parents because we often disagree about a business decisions (they’re old school)</div>
      </div>
    </div>
  );
};