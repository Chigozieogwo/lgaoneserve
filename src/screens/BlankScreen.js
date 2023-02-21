/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';
import img from "../images/image.jpg";

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const BlankScreen = ({ match }) => {
   
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [display, setIsdiplay] = useState(false);

  const isDiplayed =()=>{
      setIsdiplay(true)
  }


   useEffect(() => {
     
      if (!userInfo) {
         navigate('/');
      } else {
         //  dispatch(getUserDetails('profile'));
         if (!user || !user.firstName) {
            // dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails('profile'));
           
         }
      }
   }, [navigate, userInfo, user]);

   return (
      <>
         <div>
            <div class="drawer drawer-mobile bg-[#F4F5FA]">
               <input
                  id="my-drawer-3"
                  type="checkbox"
                  class="drawer-toggle"
               ></input>
               <div class="drawer-content -ml-2 flex flex-col">
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <HeaderLog />
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                  <div>
                  <div className="bg-[#F4F5FA] overscroll-none  px-5  py-5">
                        <div className="flex justify-between py-4 px-6 text-xl">
                                   <h5> Blank Modules </h5>
                                   <Link to='/dashboard/profile'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
                      </div>
                      <div class="flex items-center justify-center h-screen text-blue-700 bg-zinc-700">

<div class="bg-zinc-800 p-2 rounded-md mx-6">
    <div class="flex flex-col md:flex-row  rounded-l-xl">

        <img src={img} class="object-fit rounded-md h-40 md:h-28 md:rounded-l-md md:rounded-r-none transform hover:scale-105 duration-500 hover:rounded-md" alt=""></img>
        
    <div class="p-3 md:p-6">
        <h2 class="font-serif text-sm font-normal text-center md:text-left text-white">
            Get diet and fitness tips in your inbox
        </h2>
    </div>
    </div>
</div>

</div>

                     

                      <div class="flex items-center justify-center h-screen bg-zinc-700">
      {/* <!-- Card --> */}
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* <!-- Flex Container --> */}
        <div class="flex flex-col md:flex-row rounded-l-xl">
          {/* <!-- Image --> */}
          <img
            src={img}
            alt=""
            class="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />
          {/* <!-- Content --> */}
          <div class="p-6 md:p-12">
            <h2
              class="font-serif text-xl font-medium text-center text-white md:text-left"
            >
              Get diet and fitness tips in your inbox
            </h2>

            <p
              class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left"
            >
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>

            <div
              class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0"
            >
              <input
                type="text"
                placeholder="Enter your email address"
                class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />

              <button
                class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
              >
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


          


                           
                      

                  </div>

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               </div>
               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               <div class="drawer-side ">
                  <label for="my-drawer-3" class="drawer-overlay"></label>
                  <ul class="menu  overflow-y-auto  w-60 md:w-60 bg-green-700">
                     {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                     <Sidebar></Sidebar>
                     {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  </ul>
               </div>



                   

               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            </div>
         </div>
      </>
   );
};

export default BlankScreen;
