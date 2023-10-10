import AdminSideBar from "@/components/AdminSideBar";
import MessageListItem, { MassageLeft, MassageRight } from "@/components/Chats";
import SideBar from "@/components/SideBar";
import React from "react";

const Chat = () => {
  return (
    <div className="flex">
      <div className="w-[250px] flex-shrink-0">
        <AdminSideBar />
      </div>
      <div className="flex-1 ">
        <section className="flex flex-col items-center box-border py-[60px] w-full min-h-screen px-[50px]">
          <div className="w-full min-h-[500px] max-h-[800px] bg-white rounded-[12px] border-[1px] border-solid border-slate-200 flex">
            {/* selected user */}
            <div className="flex-1 h-full box-border px-[24px] py-[30px] overflow-scroll overflow-x-hidden gap-[16px] flex flex-col">
              <div className="pb-[16px]">
                <div className="font-family-Roboto text-[26px] font-bold">
                 User Chat
                </div>
              </div>
              <MessageListItem select={true} />
              <MessageListItem select={false} />
              <MessageListItem select={false} />
              <MessageListItem select={false} />
            </div>

            {/* message list */}
            <div className="flex-1 h-auto scroll-smooth  flex-grow-[2.4] box-border overflow-scroll overflow-x-hidden gap-[16px] relative">
              <div className="w-full h-atuo bg-slate-100 border-b-[1px] Robin-border box-border px-[30px] py-[12px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[30px] h-[30px] rounded-full bg-slate-300"></div>
                  <div>
                    <div className="font-medium font-family-Robto text-[14px]">
                      David
                    </div>
                    <div className="pt-[2px] font-family-Roboto font-normal text-[12px] leading-normal Robin-gray">
                      Online
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-[30px] flex flex-col gap-[24px] w-full">
                <MassageRight />
                <MassageRight />
                <MassageLeft />
              </div>

              {/* type message */}
            <div className="flex-1 h-fit box-border px-[24px] py-[30px]  absolute border-t-[1px] Robin-border bottom-0 w-full flex items-center gap-[20px]">
                <input
                  className="w-[80%] h-[40px] border-[1px] rounded-[12px] font-family-Fira-Sans text-[15px] font-normal px-[16px]"
                  placeholder="Type your message"
                />
                <button className="w-[20%] h-[40px] bg-black font-family-Roboto text-white text-[15px] rounded-[6px] font-medium">Sent</button>
              </div>
          </div>
            </div>

            {/* type */}
            
        </section>
      </div>
    </div>
  );
};

export default Chat;
