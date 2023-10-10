import React from "react";

const MessageListItem = ({select}) => {
  return (
    <div className={`${"w-full h-auto  border-[1px] border-slate-300 rounded-[12px] box-border cursor-pointer px-[16px] pt-[16px] pb-[20px]"} ${select?'bg-Robin-orange':'bg-slate-50'}`}>
      <div className="flex items-center gap-[16px]">
        <div className="w-[30px] h-[30px] rounded-full bg-slate-300"></div>
        <div>
          <div className="font-medium font-family-Robto text-[14px]">Adams</div>
          <div className={`${"pt-[2px] font-family-Roboto font-normal text-[12px] leading-normal"} ${select?'Robin-primary':'Robin-gray'}`}>
            SEP 04 2023
          </div>
        </div>
      </div>

      <div className="pt-[12px]">
        <div className="font-family-Roboto text-[15px] font-normal">
          He made his comments at a news conference in Amsterdam
        </div>
      </div>
    </div>
  );
};

export default MessageListItem;

// ################################################################

export const MassageLeft = () => {
  return (
    <div className="flex justify-start w-full">
      <div className="max-w-[500px] min-w-[200px] h-auto  flex items-start gap-[16px]">
      <div className="w-[40px] h-[40px] rounded-[4px] flex-shrink-0 bg-slate-300"></div>
      <div className="flex items-center gap-[16px] bg-Robin-light-blue px-[16px] rounded-[8px] py-[12px]">
        <div>
          <div className="font-semibold text-white font-family-Robto text-[14px]">Adams</div>
          <div className="font-normal font-family-Robto text-[14px] text-slate-50 pt-[4px]"> He made his comments at a news conference in Amsterdam He made his comments at a news conference in Amsterdam He made his comments at a news conference in Amsterdam</div>
          <div className="pt-[6px] font-family-Roboto font-normal text-[12px] leading-normal Robin-secondary ">
            SEP 04 2023
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export const MassageRight = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="max-w-[500px] min-w-[200px] h-auto  flex items-start gap-[16px]">
      <div className="flex items-center gap-[16px] bg-Robin-orange px-[16px] rounded-[8px] py-[12px]">
        <div className="flex flex-col items-end">
          <div className="font-semibold text-white font-family-Robto text-[14px]">Adams</div>
          <div className="font-normal font-family-Robto text-[14px] text-slate-50 pt-[4px] text-end"> He made his comments at a news conference in Amsterdam He made his comments at a news conference in Amsterdam He made his comments at a news conference in Amsterdam</div>
          <div className="pt-[6px] font-family-Roboto font-normal text-[12px] leading-normal Robin-primary ">
            SEP 04 2023
          </div>
        </div>
      </div>
      <div className="w-[40px] h-[40px] rounded-[4px] flex-shrink-0 bg-slate-300"></div>

    </div>
    </div>
  );
};
