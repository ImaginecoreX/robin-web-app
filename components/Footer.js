"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// theme #################################################
const toggleTheme = () => {
  const root = document.documentElement;
  if (root.getAttribute('theme') === 'light') {
    root.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Store the theme preference
  } else {
    root.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light'); 
  }
};

const loadTheme = () => {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme'); 
  root.setAttribute('theme', storedTheme || 'light'); 
};

// theme #################################################

const Footer = () => {

  const [page, setPage] = useState("home");

  useEffect(loadTheme, []); // Load the theme preference on component mount

  // ########## routes #####################################
  const router = useRouter()
  const navigateToHomePage = () => { router.push('/', { scroll: false }) }
  const navigateToLoginPage = () => { router.push('/login', { scroll: false }) }
  const navigateToRegisterPage = () => { router.push('/register', { scroll: false }) }
  const navigateToProfilePage = () => { router.push('/profile', { scroll: false }) }


  // ########## routes #####################################
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname == "/") {
      setPage("home");
    } else if (pathname == "/login") {
      setPage("about");
    } else if (pathname == "/register") {
      setPage("services");
    } else if (pathname == "/profile") {
      setPage("projects");
    }

  }, [pathname, searchParams])

  return (
    <section className='footer-bg h-auto flex justify-center flex-shrink-0 border-t-[1px] b-color'>
      <div className='flex-col frame-container h-[514px] ns:h-auto ss:h-auto sm:h-auto md:h-auto'>


        
      </div>
    </section>
  )
}

export default Footer