import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import logo from '../images/abialogo.jfif';
import userm from "../images/userm.png"
import bell from "../images/bell.png"
import sort from "../images/sort.png"
import itf from "../images/itf.jpg"
import down from "../images/down.png"
import {  getUserDetails,getUserTenancyDetails,getTenantDashboardDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate ,useParams} from 'react-router-dom';

const HeaderLog = ({ showHandler2 }) => {
  
   
   const location = useLocation();
   const navigate = useNavigate();

   const {id} = useParams()
   console.log(id + "params")
   

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;


   const userTenancyProfile = useSelector((state) => state.userTenancyProfile);
   const { userInfoTenancy  } = userTenancyProfile;



   const tenantDashboardDetails = useSelector((state) => state.tenantDashboardDetails);
   const { tenant  } = tenantDashboardDetails;

  

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;


  console.log(JSON.stringify(tenant) + " <<<<<<<<<<<<<<<<<<<<<< Tenant Header >>>>>>>>>>>>>>>>>>>>> 90 here is the user")
  console.log(tenant + " <<<<<<<<<<<<< Tenant Header >>>>>>>>>>>>>>> here is the user")
  console.log(JSON.stringify(tenant) + " 90 here is the user")
  

   const logoutHandler = () => {
      dispatch(logout());
   };

   // useEffect(() => {
     
   //    if (!userInfo || userInfoTenancy || tenant) {
         
   //       dispatch(getUserDetails());
   //             dispatch(getUserTenancyDetails());
   //             dispatch(getTenantDashboardDetails(id));
         
   //    }
   //    // if (!userInfo) {
   //    //    navigate('/');
   //    // } else {
   //    //    //  dispatch(getUserDetails('profile'));
   //    //    if (!user || !user.firstName) {
   //    //       // dispatch({ type: USER_UPDATE_PROFILE_RESET });
   //    //       dispatch(getUserDetails());
   //    //       dispatch(getUserTenancyDetails());
           
   //    //    }
   //    // }
   // }, [navigate, userInfo, user]);



   return (
      <div>
         <div class="w-full navbar px-4 bg-white ">
            <div class="flex-1 px-2 mx-2">
               {' '}
               <Link to={'/'} class="flex items-center">
                  <h3 className="text-xl font-semibold text-gray-700 leading-5 tracking-widest">Dashboard</h3>
                  
               </Link>
            </div>




            <div class="flex-none hidden lg:block ">
               <ul class="flex flex-col  py-2 md:flex-row  md:space-x-5 md:mt-0 md:text-sm md:font-medium">
                  <li>
                  <div class="relative">
                     
                     <img
                        class=" w-10 border-2 border-white p-2 rounded-full shadow-md"
                        src={bell}
                     ></img>
                   {!tenant ? (<span class="top-2 right-2 absolute  w-3.5 h-3.5 bg-gray-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                 ) : (<span class="top-2 right-2 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-green-800 rounded-full"></span>
                 )}
                     
                     </div>
                  </li>
                  <li className="border border-2 border-r-gray-200">
                     
                  </li>
                  <li className="relative">
                  <div className=" w-48  rounded-md group ">
                     <div className="absolute w-48 bg-white top-0 right-0 border border-2 border-gray-300 px-3 py-1 rounded-md group-hover:cursor-pointer ">
                     <div className="flex flex-row items-center justify-between space-x-2">
                              <div className=' group'>
                                 {tenant ? (<div>
                                    <h5 className="group-hover:text-green-600 text-blue-900 font-medium text-xs">{ tenant?.singleTenant?.name}</h5>
                                 <p className="text-xs font-normal text-gray-400">{ userInfo?.role }</p>
                                 </div>) : (<div>
                                    <h5 className="group-hover:text-green-600 text-blue-900 font-medium text-xs">Select Tenancy</h5>
                                 <p className="text-xs font-normal text-gray-400">click below</p>
                                 </div>)}
                                 
                           </div>
                           <div className=''>
                              <img className='w-4  '
                        src={sort}
                        alt="sort"
                     />
                     </div>
                           </div>
                           <div className="hidden group-hover:block ">
                              <div className="px-2 mt-4">
                                 <div className='border border-2 border-b-gray-300'></div>
                                 <p className='flex justify-center  py-2 font-normal text-md text-gray-400 '>Switch Account</p>
                                 <input className="w-[150px] py-1.5 px-3 rounded-sm border border-2 border-gray-300 text-gray-700 focus:outline-none  placeholder:text-gray-300 placeholder:text-left text-left  placeholder:font-normal" placeholder='Quick Search'></input>
                                
                            
                                 <div className="pb-6">
                                 {userInfoTenancy?.myTenants.map((tenant) => (
        <Link  onClick={() =>  dispatch(getTenantDashboardDetails(tenant._id))}   to={!tenant._id ? null : '/dashboard/profile'}  className="space-y-3 mt-3">
        <div key={tenant._id}  className="space-y-3 mt-3">
                                       <h4 className=" text-blue-900 font-medium text-xs">{ tenant.name}</h4>
     {/* <p className="text-xs font-normal text-gray-400">Payer</p> */}
     <div className='border border-1 border-b-gray-200 mt-2 mb-2'></div>
        </div>
        </Link>
      ))}
                                 
                                 {/* <div className="space-y-1 mt-2">
                                 <h4 className=" text-blue-900 font-medium text-xs">{userInfo.firstName} {userInfo.lastName}</h4>
                              <p className="text-xs font-normal text-gray-400">Payer</p>
                              <div className='border border-1 border-b-gray-200 mt-1'></div>
                                 </div> */}
                                 <div className="space-y-1 mt-2">
                                 <h4 className=" text-blue-900 font-medium text-xs">{userInfo.firstName} {userInfo.lastName}</h4>
                              <p className="text-xs font-normal text-gray-400">{userInfo.role}</p>
                              <div className='border border-1 border-b-gray-200 mt-1'></div>
                                 </div>
                                 </div>
                              </div>
                           </div>
                           
                     </div>
                  </div>
                  </li>

                  
                  <li className="border border-2 border-l-gray-200">
                     
                  </li>
                 

                 
                  
               </ul>
            </div>
            
            {/* <div class="dropdown px-2 dropdown-end mr-0 md:mr-16"> */}
            <div class="dropdown px-2 dropdown-end mr-0 md:mr-16 flex flex-row space-x-0 hover:cursor-pointer ">
                 

                 <label tabindex="0" class="hover:cursor-pointer  avatar w-8 ">
                    <div class="">
                       <img className='hover:border rounded-full border-1'
                          src={userm}
                          alt={userInfo.firstName}
                       />
                       
                       
                       
                       </div>
  
               </label>
                 <label tabindex="0" class="hover:cursor-pointer  ">
                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
  </svg>
               </label>
              
               <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-[31.5rem] p-2 shadow bg-base-100 border border-0.5 border-gray-300 shadow-md rounded-md w-72"
               >
                  
                  <div className="relative">
                        <div className="absolute top-3 right-3 rounded-full p-0.5 bg-red-600 ">
                                 <svg className="text-white w-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                 </svg>
                        </div>
                  </div>
                  <div className="flex justify-center items-center mt-10 mb-6">
                        <div className="space-y-0.5">
                        {/* <img className="w-16 mx-auto" src={itf}></img> */}
                        <img className="w-16 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQLP2LzNtqG9ZQsOXFMWcYWzpfjDehtMFBGucWjeoiYkRZGwyTcQZnipV0V7ZsodocTs&usqp=CAU" height="" width=""></img>
                   
                        {/* <img class="w-20 mx-auto " src="https://abiairs.com/app/abiairs_logo_main.png" height="" width=""></img> */}
                              <p className="text-xs font-normal text-gray-400">lgas@abiastate.gov.ng</p>
                        </div>
                  </div>
                        <div className="border border-1 border-b-gray-300 mx-4"></div>
                        <div className="group mx-4">
                        <div className="flex flex-row space-x-4 mt-2 group-hover:bg-green-50 px-2 py-0.5 group-hover:cursor-pointer">
                        <div className="flex justify-center items-center ">
                        <div class="flex justify-center items-center p-1.5 w-8 h-8 rounded-md group-hover:text-white bg-green-50 group-hover:bg-green-500">
                                    <svg className='h-4 w-4 text-center  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                                 </div>
                                 </div>
                           <div className="flex flex-col py-2"> 
                              <h5 className="text-gray-700 font-medium text-xs"> Account Settings</h5>
                              <p className="text-gray-400 font-medium text-xs">Account Preference and more</p>
                           
                           </div>
                           

                           </div>

                        </div>


                        
                        <div className="group mx-4">
                        <div className="flex flex-row space-x-4 mt-2 group-hover:bg-green-50 px-2 py-0.5 group-hover:cursor-pointer">
                        <div className="flex justify-center items-center ">
                        <div class="flex justify-center items-center p-1.5 w-8 h-8 rounded-md group-hover:text-white bg-green-50 group-hover:bg-green-500">
                                    <svg className='h-4 w-4 text-center  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
</svg>
                                 </div>
                                 </div>
                           <div className="flex flex-col py-2"> 
                              <h5 className="text-gray-700 font-medium text-xs"> Help</h5>
                              <p className="text-gray-400 font-medium text-xs">Help and support service</p>
                           
                           </div>
                           

                           </div>

                        </div>
                        <div className="space-y-6 mt-4">

                           <div className="border border-1 border-b-gray-300 mx-4 "></div>
                           <div className="mx-4 "><h5 className="text-green-400 font-medium text-xs"> Become a partner</h5></div>

                           <div className="border border-1 border-b-gray-300 mx-4 "></div>
                        </div>
                        <div className="flex justify-center items-center my-3">
                           <button onClick={logoutHandler} className="px-6 py-1.5 rounded-sm border border-green-400 text-green font-medium text-sm hover:text-white hover:bg-green-400">Log Out</button>

                        </div>

                  {/* <Link to="/login">
                     <li onClick={logoutHandler}>
                        <p>Logout</p>
                     </li>
                  </Link> */}
               </ul>
            </div>


            <div class="flex-none lg:hidden">
               <label
                  for="my-drawer-3"
                  class="btn btn-square text-black btn-ghost"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     class="inline-block w-6 h-6 stroke-current"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     ></path>
                  </svg>
               </label>
            </div>
         </div>
      </div>
   );
};

export default HeaderLog;
