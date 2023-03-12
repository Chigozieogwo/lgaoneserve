/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';

import Sidebar from '../components/Sidebar';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails,getUserTenancyDetails,getTenantDashboardDetails } from '../actions/userActions';


import { Link, useLocation, useNavigate,useParams } from 'react-router-dom';



const DashboardScreen = ({ match }) => {
      const location = useLocation();
      const navigate = useNavigate();
      
      
      const {id} = useParams()
      console.log(id + "params")
      
   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
  
   const tenantDashboardDetails = useSelector((state) => state.tenantDashboardDetails);

   const { tenant  } = tenantDashboardDetails;

      
   const { userInfo } = userLogin;

      

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;

//    const profileTenant = userInfoTenancy?.myTenants.filter((userProfileId) => userProfileId.ownerUserId === userInfo._id)
//   console.log(JSON.stringify(userInfo) + " 90 here is the user")
      
//   console.log(userInfo + " 90 here is the user")

//   console.log(myTenants + " 212 here is the user")
//   console.log(userInfoTenancy + " 212 here is the user")
  console.log(tenant?.singleTenant?.name + " 100555 here is the user")
  console.log(tenant?.singleTenant?.name + " 100555 here is the user")

  console.log(user.firstName + " 55 here is the user")

  useEffect(() => {
   
   if (!userInfo) {
      navigate('/');
   } else {
      
      if (!user || !user.firstName) {
      
         dispatch(getUserDetails());
         dispatch(getTenantDashboardDetails(tenant.singleTenant?._id));
        

      }
   }
}, [navigate, userInfo, user,tenant]);

   
   // useEffect(() => {
     
   //    if (!userInfo) {
   //       navigate('/');
   //    } else {
   //       //  dispatch(getUserDetails('profile'));
   //       if (!user || !user.firstName) {
   //          // dispatch({ type: USER_UPDATE_PROFILE_RESET });
   //          dispatch(getUserDetails());
           
   //       }
   //    }
   // }, [navigate, userInfo, user]);

   return (
      <>
         <div className="mx-0 md:mx-16 overflow-hidden">
            <div class="drawer drawer-mobile bg-gray-50  ">
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

                  <div className="">


                     <div className=" overscroll-none  px-5  py-5 mx-3 my-2">
                        <div className="space-y-1">
                           <h2 className=" text-3xl font-semibold text-gray-700"> Hi {user.firstName}<span className='text-xs text-gray-700 font-normal'>   __ {tenant?.singleTenant?.name} Institution</span></h2> 
                           <p className=" text-xs font-normal text-gray-400"> It's a good day to track your revenue and tax resources</p> 
                           
                        </div>
                        <div className='flex justify-between my-0.5'>
                        <h3 className=" text-lg font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm"> <h4 className="text-sm font-medium">Oct 2022 - Dec 2022</h4> </div>
                              <div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-sm font-medium">This Quarter</h4>
                                 
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                                 
                              </div>
                             
                           </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 ">
                           <div className="flex flex-col space-y-2   md:w-2/5 mt-2">

                              <div className='w-full   rounded-md shadow-md bg-white h-48 border border-0.5 border-gray-300'>
                                 <div className="p-4 mt-2">
                                    <h4 className="text-sm font-semibold mx-2">Total Revenue Generated</h4>
                                    <div className=" flex justify-center items-center">
                                    <div className=" w-full mb-8">
                                       <h2 className="font-bold text-2xl text-center mt-4">5,005,000,000</h2> 
                                      <p className="text-xs text-green-600 font-semibold mt-3 text-center"><span>@</span> 10%, 5,000,000</p>
                                      <p className="text-xs text-gray-400 font-semibold mt-0.5  text-center">Was 5,000,000,000 last month </p>
                                    
                                    </div>
                                    </div>
                                 </div>
                              </div>
                              <div className='w-full   rounded-md shadow-md bg-white h-48 border border-0.5 border-gray-300'>
                                 <div className="p-4 mt-2 ">
                                    <h4 className="text-sm font-semibold mx-2">Total Revenue types</h4>
                                    <div className=" flex justify-center items-center">
                                    <div className="flex justify-center items-center w-full h-28">
                                       <h2 className="font-bold text-2xl text-center ">30</h2> 
                                      {/* <p className="text-xs text-green-600 font-semibold mt-3 text-center"></p>
                                      <p className="text-xs text-gray-400 font-semibold mt-1  text-center"></p> */}
                                    
                                    </div>
                                    </div>
                                 </div>
                              </div>
                        
                           </div>
                           <div className=" w-full  ">
                              <div className=" flex justify-center items-center p-4 w-full  h-full rounded-md shadow-md bg-white  border border-0.5 border-gray-300">
                                 <p>Chart</p>
                                 
                              </div>
                              
                           
                           
                           </div>
                           

                        </div>
                        <div className='flex justify-between my-5'>
                        <h3 className=" text-lg font-medium text-gray-700">Total Revenue Generated per LGA</h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm"> <h4 className="text-sm font-medium">Oct 1, 2022 - Oct 31,2022</h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-sm font-medium">This month</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                             
                           </div>
                        </div>
                        <div className='rounded-md bg-white shadow-md border border-0.5 border-gray-300 '>
                        <table className='my-2 py-2 px-2'>
                           <thead className='px-2'>
                           <tr className='flex space-x-20 md:space-x-72 '>
                           <th className='flex space-x-2 mx-3 border border-1 border-gray-300 px-2 py-1'>
                           <h4 className="text-xs text-green-700 font-semibold">SN</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>
                                 </th>
                           <th className='mx-3 border border-1 border-gray-300 px-4 py-1'>
                           <h4 className="text-xs text-green-700 font-bold">LGA</h4>
                            
                                 </th>
                           <th className=' mx-3 border border-1 border-gray-300 px-4 py-1'>
                           <h4 className="text-xs text-green-700 font-semibold">Revenue Generated</h4>
                                 
                                 </th>
                          
                        </tr>
                              </thead>
                              
                        </table>
                        <div className='w-full  border border-0.5 border-b-gray-300'></div>
                        <table className='px-2'>
                           <tbody className='px-2'>
                           
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">1</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Aba North</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">8,765,543.85</h4>
                                 
                                 </td>
                          
                        </tr>
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">2</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Aba South</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">53,325,543.12</h4>
                                 
                                 </td>
                          
                        </tr>
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-bold">3</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Arochukwu</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">11,359,543.85</h4>
                                 
                                 </td>
                          
                        </tr>
                                
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">4</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Aba South</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">53,325,543.12</h4>
                                 
                                 </td>
                          
                        </tr>
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">5</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Arochukwu</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-semibold">11,359,543.85</h4>
                                 
                                 </td>
                          
                        </tr>
                                
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">6</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Aba South</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-semibold">53,325,543.12</h4>
                                 
                                 </td>
                          
                        </tr>
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">7</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Arochukwu</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-semibold">11,359,543.85</h4>
                                 
                                 </td>
                          
                        </tr>
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">8</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Arochukwu</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-semibold">11,359,543.85</h4>
                                 
                                 </td>
                          
                        </tr>
                                
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">9</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Aba South</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-semibold">53,325,543.12</h4>
                                 
                                 </td>
                          
                        </tr>
                                 <tr className='flex space-x-20 md:space-x-72 my-4 '>
                           <td className='flex justify-center items-center rounded-lg mx-6 border border-1 border-gray-300 px-3 md:px-2 py-1 bg-green-50'>
                           <h4 className="text-xs text-green-700 font-semibold">10</h4>
                                
                                 </td>
                           <td className='flex justify-center items-center mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-bold">Arochukwu</h4>
                            
                                 </td>
                           <td className=' mx-3  px-4 py-1'>
                           <h4 className="text-xs text-gray-700 font-semibold">11,359,543.85</h4>
                                 
                                 </td>
                          
                        </tr>
                                 
                              </tbody>
                              
                        </table>
                        
                        
                           
                        <div className='flex justify-between my-0.5'>
                        <h3 className=" text-lg font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div></div>
                                 <div>
                              <div className=" flex flex-row space-x-2  hover:cursor-pointer bg-white mb-4 mx-3">
                                 <h4 className="text-xs font-medium">Rows 1-10 0f 62 </h4>
                                 <div className="flex space-x-1">
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
</svg>
                                 </div>

                              </div>
                                 
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
                  <ul class="menu  overflow-y-auto w-[100px] md:w-[100px] bg-white">
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

export default DashboardScreen;
