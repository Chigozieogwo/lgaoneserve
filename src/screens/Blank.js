/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar1';
import img from "../images/image.jpg";
import img1 from "../images/headphone.png";



const Blank = ({ match }) => {
   
 

   return (
      <>

      <div class="flex items-center justify-center min-h-screen bg-slate-100">
        <div class="flex flex-col p-6 m-3 shadow-2xl rounded-2xl space-y-10 md:flex-row md:space-x-10 md:m-0 bg-white">
                <div> <img src={img1} class="mx-auto hover:scale-105 duration-500 w-60"></img>
                </div>
                <div class="flex flex-col mb-4 space-y-3 text-center md:text-left" >
                    <div >
                        <div class=" inline-block font-serif font-medium px-3 py-1 rounded-full text-sm text-white bg-black">
                             Free Shipping
                        </div>
                    </div>
                    <div class="max-w-sm text-2xl font-medium">Razer Kraken kitty Edt Gaming Headset Quartz</div>
                    <div class="flex flex-col space-y-3 text-center md:text-left mb-4">
                        <p class="line-through">$799</p>
                        <p class="text-5xl font-bold">$545</p>
                        <p class="text-sm text-gray-400 font-light">This offer is valid until April 3rd or as long as stock lasts</p>

                    </div>
                    <div class="group">
                        <button class=" w-full bg-blue-700 text-white border-b-8 rounded-lg border-b-blue-800 group-hover:border-t-8 group-hover:border-b-0 trasition-all duration-150 group-hover:border-t-blue-500">
                            <div class="px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-800 duration-150"> Add to Cart </div>

                        </button>

                    </div>
                    <div class="flex items-center space-x-3 group">
                        <div class="w-3 h-3 bg-green-500 group-hover:animate-ping rounded-full"></div>
                        <div class="text-sm font-medium text-gray-700">50+ pcs. in stock</div>

                    </div>
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row">

                    </div>
                </div>
        </div>
      </div>











         {/* <div>
         <div class="flex items-center justify-center p-2 bg-zinc-700 min-h-screen">
            <div class="bg-zinc-800 rounded-xl p-2">
<div class="flex flex-col md:flex-row ">
<img src={img} alt="image" class="object-fit hover:rounded-xl duration-200 transform rounded-xl h-80 md:h-64 hover:scale-105 md:rounded-l-xl md:rounded-r-none" ></img>

<div class="p-6 md:p-12">
<h2 class="font-medium font-serif text-white text-center my-4 md:text-left text-xl leading-5 tracking-wide">Get diet and Fitness tips in your inbox</h2>
<p class="text-xs text-white text-center md:text-left max-w-xs">Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.</p>

              <div class="mt-5 flex flex-col space-y-4 md:space-x-3 md:space-y-0 md:flex-row">
                    <input class="p-2 px-4 text-white hover:text-white bg-zinc-800 border border-zinc-600 text-center placeholder:text-xs rounded-sm md:text-left placeholder:md:text-left focus:outline-none" Placeholder="Enter your Email Address"></input>
<button class=" px-5 py-3 text-xs text-zinc-800 rounded-md hover:text-white bg-lime-500 hover:bg-lime-700 hover:scale-105 duration-500">Subscribe</button>
</div>
</div>


            </div>
            </div>
         </div>
         </div> */}
      </>
   );
};

export default Blank;
