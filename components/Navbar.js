"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// theme #################################################
const toggleTheme = () => {
  const root = document.documentElement;
  if (root.getAttribute("theme") === "light") {
    root.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark"); // Store the theme preference
  } else {
    root.setAttribute("theme", "light");
    localStorage.setItem("theme", "light"); // Store the theme preference
  }
};

// toggle nav option pane class
const toggleOptionPane = () => {
  const pane = document.getElementById("nav-option-pane");
  pane?.classList.toggle("nav-option-pane");
};

// loadTheme
const loadTheme = () => {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme"); // Get the stored theme preference
  root.setAttribute("theme", storedTheme || "light"); // Use the stored theme or default to 'light'
};

// theme #################################################

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// design ###########################################################################################
const Navbar = () => {
  const [page, setPage] = useState("home");

  useEffect(loadTheme, []); // Load the theme preference on component mount

  // ########## routes #####################################
  const router = useRouter();
  const navigateToHomePage = () => {
    router.push("/", { scroll: false });
  };
  const navigateToLoginPage = () => {
    router.push("/login", { scroll: false });
  };
  const navigateToRegisterPage = () => {
    router.push("/register", { scroll: false });
  };
  const navigateToProfilePage = () => {
    router.push("/profile", { scroll: false });
  };
  const navigateToPostPage = () => {
    router.push("/post", { scroll: false });
  };
  const navigateToChatPage = () => {
    router.push("/chat", { scroll: false });
  };

  // ########## routes #####################################

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
    }
  }, [pathname, searchParams]);

  // ########################################################

  // nav bar design
  return (
    <section
      className={`${" z-50 flex justify-center h-auto  border-b-[2px] border-Robin-bw border-solid box-border navbar Robin-theme-bg"} ${
        page === "login" ? "d-none" : page === "register" ? "d-none" : ""
      }`}
    >
      <div
        className=" flex items-center justify-between w-[96%]  ns:hidden ss:hidden sm:hidden nav-bar  pb-[20px] box-border relative"
        style={{ paddingTop: 26 }}
      >
        <div
          className="flex items-center gap-[12px] hover:cursor-pointer"
          onClick={navigateToHomePage}
        >
          <div className="w-[32px] h-[32px] Robin-icon set-bg  "></div>
          <div>
            <div className=" font-family-Roboto text-[26px] font-bold Robin-orange">
              Robin
            </div>
          </div>
        </div>

        {/* navbar */}
        <div>
          <input
            className="w-[280px] h-[36px] border-[2px] rounded-full text-[15px] Robin-border px-[16px] font-family-Fira-Sans bg-Robin-bw"
            type="text"
            placeholder="Find you answer..."
          />
        </div>

        <div className="flex items-center" style={{ columnGap: 24 }}>
          <div className={page == "home" ? "relative w-fit pr-[6px]" : ""}>
            <div
              className={
                page == "home"
                  ? "cursor-pointer Robin-orange"
                  : " cursor-pointer color-bw"
              }
              onClick={navigateToHomePage}
            >
              Home
            </div>
            {page == "home" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bg-Robin-orange"></div>
            ) : (
              ""
            )}
          </div>

          <div className={page == "post" ? "relative w-fit pr-[6px]" : ""}>
            <div
              className={
                page == "post"
                  ? "cursor-pointer Robin-orange"
                  : "cursor-pointer color-bw"
              }
              onClick={navigateToPostPage}
            >
              Post
            </div>
            {page == "post" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bg-Robin-orange"></div>
            ) : (
              ""
            )}
          </div>

          <div className={page == "chat" ? "relative w-fit pr-[6px]" : ""}>
            <div
              className={
                page == "chat"
                  ? "cursor-pointer Robin-orange"
                  : "cursor-pointer color-bw"
              }
              onClick={navigateToChatPage}
            >
              Chat
            </div>
            {page == "chat" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bg-Robin-orange"></div>
            ) : (
              ""
            )}
          </div>

          {/* theme icon */}
          <div
            className="w-[20px] h-[20px] theme-icon set-bg hover:cursor-pointer"
            onClick={toggleTheme}
          ></div>

          {/* profile */}
          <div onClick={toggleOptionPane}>
            <div className="w-[21px] h-[21px] rounded-full cursor-pointer bg-blue-400"></div>
          </div>
        </div>

        {/* option pane */}
        <div
          initial="hidden"
          animate="visible"
          variants={variants}
          id="nav-option-pane"
          className="nav-option-pane h-[100px] bottom-[0px] right-[0px] top-[70px] py-[20px] px-[24px] border-[1px] border-solid absolute rounded-[6px] nav-bar z-50 bg-white"
        >
          <div
            className="font-family-Roboto text-[15px] font-medium py-[6px] cursor-pointer"
            onClick={navigateToProfilePage}
          >
            Profile
          </div>
          <div
            className="font-family-Roboto text-[15px] font-medium py-[6px] cursor-pointer"
            onClick={navigateToLoginPage}
          >
            Log out
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
