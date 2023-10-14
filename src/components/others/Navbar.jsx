"use client"

import React from "react";
import { useRouter } from "next/navigation";
// i waant a emoji in happy mood here  

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <>
        <div className="w-full min-h-[90px] bg-gray-900   flex justify-between items-center flex-col md:flex-row shadow-2xl z-50 ">
          <div className="right flex w-full items-center justify-between  h-full md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <h3 className="font-mono font-bold text-white text-3xl mr-5">
              <img src="" alt="" />
            </h3>
          </div>
          <div className="left flex items-center justify-center h-full mr-5 flex-1 gap-5">
            <h3 className="hidden md:block font-mono font-bold text-white text-5xl ">
              <img src="/img/newlogo.png"  className="w-20 h-20 object-cover" alt="" />
            </h3>
            <input
              type="text"
              placeholder="  search products here"
              className=" text-center bg-white rounded-md md:rounded-3xl round py-1 md:py-3 px-9  "
            />
          </div>

          {/* desktop */}

          <div className="flex-1 flex items-center justify-center">
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <a
                onClick={  () => router.push("/")}
                class="text-white" href="#">
                  Home

                </a>
              </li>
              <li>
                <a
                   onClick={  () => router.push("/products")}
                class="text-white" href="#">
                  Products

                </a>
              </li>
           
              <li>
                <a 
                  onClick={  () => router.push("/message")}
                class="text-white" href="#">
                  Book now 
                </a>
              </li>

              <li>
                <a 
                  onClick={  () => router.push("/order")}
                class="text-white" href="#">
                  Order 
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden  flex-1 md:flex items-center justify-center gap-5">
            <a 
            onClick={  () => router.push("/profile")}
            
            class="text-white" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

            </a>
            <a 
              onClick={  () => router.push("/cart")}
            class="flex items-center text-white" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
