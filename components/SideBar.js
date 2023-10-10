"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddNewEvent from "./AddNewEvent";
import Modal from "./Model";

const SideBar = () => {
  const [page, setPage] = useState("home");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleCheckbox = () => {
    document
      .getElementById("clickableDiv")
      .addEventListener("click", function () {
        const checkbox = document.getElementById("myCheckbox");
        checkbox.checked = !checkbox.checked; // Toggle the checkbox state
      });
  };

  const Router = useRouter("/");

  const NavigateToHome = () => {
    Router.push("/", { scroll: false });
  };
  const NavigateToChat = () => {
    Router.push("/chat", { scroll: false });
  };
  const NavigateToSettigns = () => {
    Router.push("/setting", { scroll: false });
  };
  const NavigateToPost = () => {
    Router.push("/post", { scroll: false });
  };
  const NavigateTologin = () => {
    Router.push("/login", { scroll: false });
  };
  const NavigateToRegister = () => {
    Router.push("/register", { scroll: false });
  };
  const NavigateToLeaderboard = () => {
    Router.push("/leaderboard", { scroll: false });
  };
  const NavigateToNotifications = () => {
    Router.push("/notification", { scroll: false });
  };
  const NavigateToHelp = () => {
    Router.push("/help", { scroll: false });
  };
  
  
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`
    // console.log(pathname)
    // You can now use the current URL
    if (pathname == "/") {
      setPage("home");
    } else if (pathname == "/login") {
      setPage("login");
    } else if (pathname == "/register") {
      setPage("register");
    } else if (pathname == "/profile") {
      setPage("profile");
    } else if (pathname == "/post") {
      setPage("post");
    } else if (pathname == "/chat") {
      setPage("chat");
    } else if (pathname == "/setting") {
      setPage("setting");
    }
    else if (pathname == "/leaderboard") {
      setPage("leaderboard");
    }
  }, [pathname, searchParams]);
  // ########################################################

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleInputChange = (e) => {
    setCategory(e.target.value); // Update the input field value
  };

  const handleAddCategory = () => {
    if (category.trim() !== "") {
      // Add the category to the array only if it's not empty
      setCategories([...categories, { name: category }]);
      setCategory(""); // Clear the input field
    }
  };

  // #################################################
  const [categorys, setCategorys] = useState("");
  const [categoriess, setCategoriess] = useState([]);

  const handleInputChanges = (e) => {
    setCategorys(e.target.value); // Update the input field value
  };

  const handleAddCategorys = () => {
    if (categorys.trim() !== "") {
      // Add the category to the array only if it's not empty
      setCategoriess([...categoriess, { name: categorys }]);
      setCategorys(""); // Clear the input field
    }
  };

  return (
    <div className="w-[250px] sidebar-height  Robin-theme-bg border-r-[2px] Robin-border flex-shrink-0 box-border  py-[40px] flex flex-col justify-between fixed z-50">
      <div className="flex flex-col ">
        <div
          className="w-full mt-2 hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToHome}
        >
          <div
            className={`${"w-[21px] h-[21px] hover:home set-bg"} ${page === "home" ? "home-orange" : "home-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal color-bw hover:text-white">
            Home
          </div>
        </div>

        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToPost}
        >
          {" "}
          <div
            className={`${"w-[21px] h-[21px] hover:trending set-bg"} ${page === "home" ? "trending-orange" : "trending-bw"
              }`}
          ></div>
          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Trending
          </div>
        </div>

        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToLeaderboard}
        >
          {" "}
          <div
            className={`${"w-[21px] h-[21px] hover:leaderboard set-bg"} ${page === "home" ? "leaderboard-orange" : "leaderboard"
              }`}
          ></div>
          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Leaderboard
          </div>
        </div>

        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToPost}
        >
          <div
            className={`${"w-[21px] h-[21px] hover:post set-bg"} ${page === "home" ? "post-orange" : "post-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Post
          </div>
        </div>
        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToChat}
        >
          <div
            className={`${"w-[18px] h-[18px] hover:chat set-bg"} ${page === "home" ? "chat-orange" : "chat-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Chat
          </div>
        </div>
        <div className="w-full  box-border pl-[30px] pr-[24px]  pt-[30px] pb-[8px]">
          <div className="font-family-Roboto text-[15px] font-medium Robin-gray ">
            OTHER
          </div>
        </div>
        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={openModal}
        >
          <div
            className={`${"w-[21px] h-[21px] hover:create set-bg"} ${page === "home" ? "create-orange" : "create-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Create
          </div>
        </div>
        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToNotifications}
        >
          <div
            className={`${"w-[21px] h-[21px] hover:notifications set-bg"} ${page === "home" ? "notifications-orange" : "notifications-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Notifications
          </div>
        </div>
        {/* <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToSettigns}
        >
          <div
            className={`${"w-[21px] h-[21px] hover:setting set-bg"} ${page === "home" ? "setting-orange" : "setting-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Settings
          </div>
        </div> */}
        <div
          className="w-full hover:bg-Robin-orange cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] flex items-center gap-[8px]"
          onClick={NavigateToHelp}
        >
          <div
            className={`${"w-[21px] h-[21px] hover:help set-bg"} ${page === "home" ? "help-orange" : "help-bw"
              }`}
          ></div>

          <div className="font-family-Roboto text-[15px] font-normal Robin-gray hover:text-white">
            Help
          </div>
        </div>
      </div>

      <div className="box-border pl-[30px] pr-[24px] cursor-pointer">
        <div className="font-family-Roboto text-[15px] font-medium Robin-red">
          Log out
        </div>
      </div>

      {/* create model */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="Modal max-h-[80vh]"
      >
        <div className="pb-[24px] border-b-[1px] border-solid Robin-border">
          <div>
            <div className="font-family-Roboto text-[36px] font-semibold">
              Create New Post
            </div>
          </div>
          <div>
            <div className="font-family-Roboto text-[16px] font-normal">
              Have a Question or Problem? Get Quick Answers and Solutions with
              Fast Feedback!
            </div>
          </div>
        </div>

        <div className="">
          {/* select mode  */}
          <div className="pt-[20px]">
            <div className="font-family-Fira-Sans text-[15px] font-normal flex items-center gap-[20px] pt-[4px] pb-[6px]">
              <div className="font-family-Raleway text-[24px] font-bold Robin-gray">
                I
              </div>
              <div
                className="flex items-center gap-[12px] cursor-pointer"
                id="clickableDiv"
                onClick={toggleCheckbox}
              >
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px]"
                  id="myCheckbox"
                />
                <div className="font-family-Roboto font-medium text-[18px]">
                  want to help
                </div>
              </div>
              <div
                className="flex items-center gap-[12px] cursor-pointer"
                id="clickableDiv"
                onClick={toggleCheckbox}
              >
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px]"
                  id="myCheckbox"
                />
                <div className="font-family-Roboto font-medium text-[18px]">
                  need help
                </div>
              </div>
            </div>
          </div>

          {/* title, descriptio, category{select},  */}
          <div className="pt-[20px]">
            <div className="font-family-Fira-Sans text-[15px] font-normal">
              Query Title
            </div>
            <input
              className="w-full h-[40px] rounded-[8px] Robin-border border-[1px] border-solid mt-[12px] text-[14px] font-family-Fira-Sans px-[16px]"
              placeholder="Query Title"
            />
          </div>

          {/* description */}
          <div className="pt-[24px]">
            <div className="font-family-Fira-Sans text-[15px] font-normal">
              Description
            </div>
            <textarea
              className="w-full max-h-[320px] min-h-[120px] rounded-[8px] Robin-border border-[1px] border-solid py-[16px] mt-[12px] text-[14px] font-family-Fira-Sans px-[16px]"
              placeholder="Query Details"
            />
          </div>

          {/* category */}
          <div className="pt-[24px]">
            <div className="font-family-Fira-Sans text-[15px] font-normal">
              Category
            </div>
            <div className="flex items-center gap-[20px] mt-[12px] pb-[20px]">
              <select
                className="w-full h-[40px] rounded-[8px] Robin-border border-[1px] border-solid text-[14px] font-family-Fira-Sans px-[16px]"
                type="text"
                value={category}
                onChange={handleInputChange}
                placeholder="Enter category"
              >
                <option>Select</option>
                <option>Health</option>
                <option>Technical Support</option>
                <option>Food</option>
               
                </select>
              <button
                className="px-[20px] border-[1px] Robin-border border-solid rounded-[8px] h-[40px]"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>

            {/* added categories */}
            <div className="flex items-center gap-[16px] flex-wrap">
              {categories.map((cat, index) => (
                <div
                  className="font-family-Roboto text-[14px] color-bw w-fit px-[20px] py-[8px] font-normal border-[1px] rounded-full Robin-border"
                  key={index}
                >
                  {cat.name}
                </div>
              ))}
            </div>
          </div>

          {/* tags */}
          <div className="pt-[24px]">
            <div className="font-family-Fira-Sans text-[15px] font-normal">
              Tags
            </div>
            <div className="flex items-center gap-[20px] mt-[12px] pb-[20px]">
              <input
                className="w-full h-[40px] rounded-[8px] Robin-border border-[1px] border-solid text-[14px] font-family-Fira-Sans px-[16px]"
                type="text"
                value={categorys}
                onChange={handleInputChanges}
                placeholder="Enter Tags for post"
              />
              <button
                className="px-[20px] border-[1px] Robin-border border-solid rounded-[8px] h-[40px]"
                onClick={handleAddCategorys}
              >
                Add
              </button>
            </div>

            {/* added tags */}
            <div className="flex items-center gap-[16px] flex-wrap pb-[20px]">
              {categoriess.map((cat, index) => (
                <div
                  className="font-family-Roboto text-[14px] color-bw w-fit px-[20px] py-[8px] font-medium border-[1px] rounded-[4px] Robin-border"
                  key={index}
                >
                  <span className="text-[15] font-semibold">#</span>
                  {cat.name}
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-[12px] rounded-[8px] bg-Robin-orange font-family-Roboto text-[18px] font-medium text-white">
            Post
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SideBar;
