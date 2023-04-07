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
import { listDemandSpecificLists,demandSpecificDownloadAction } from '../actions/demandSpecificActions';

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import LineAreaChart from '../components/charts/LineAreaChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import StackBarChart from '../components/charts/StackBarChart';
import BarChart from '../components/charts/BarChart';


const DashboardScreen = ({ match }) => {
      const location = useLocation();
      const navigate = useNavigate();
      
      
      const {id} = useParams()
      console.log(id + "params")
      
   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
  
   const tenantDashboardDetails = useSelector((state) => state.tenantDashboardDetails);

   const { tenant  } = tenantDashboardDetails;
 const data1 = [30, 150, 390]
 const data2 = [50, 400, 100]
 const data3 = [300, 10, 160]
 const data4 = [450, 130, 200]
   
const demandSpecificList = useSelector((state) => state.demandSpecificList);
const { loading:loadingSpecificList, error:errorSpecificList,demand_Specificlists } = demandSpecificList;
// const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
console.log(demand_Specificlists + "Specific Screen here is the user")
      
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
   dispatch(listDemandSpecificLists());
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
                              <div className=" flex p-4 w-full  h-full rounded-md shadow-md bg-white  border border-0.5 border-gray-300">
                                {/* <BarChart /> */}
                                {/* <DoughnutChart /> */}
                                <LineAreaChart />
                                {/* <StackBarChart /> */}
                                 
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
                       
                       
                       
                       
                        <div className=" rounded-md shadow-md bg-white  border border-0.5 border-gray-300">

                        <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-white border border-b-1 border-b-gray-300 dark:bg-gray-700 dark:text-gray-400">
        <tr>
                
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center text-green-500">
                        SN
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                                       <th scope="col" class="px-6 py-3 ">
                                          <div className='border border-0.5 border-gray-300 w-10 text-green-500 px-1 py-0.5'>

                    LGA
                                          </div>
                </th>
                <th scope="col" class="px-6 py-3">
                                         
                                          <div className='border border-0.5 border-gray-300 w-48 text-green-500 px-1 py-0.5'>

                                          Revenue Generated
                      </div>
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             1
                    </div>
                </th>
                <td class="px-6 py-4">
                    Aba North
                </td>
                <td class="px-6 py-4">
                    8,7878,799.94
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                               2              
                    </div>
                </th>
                <td class="px-6 py-4">
                    Aba South
                </td>
                <td class="px-6 py-4">
                    53,378,799.57
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             3
                    </div>
                </th>
                <td class="px-6 py-4">
                    Arochukwu
                </td>
                <td class="px-6 py-4">
                    11,78,799.15
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             4
                    </div>
                </th>
                <td class="px-6 py-4">
                    Bendel
                </td>
                <td class="px-6 py-4">
                    781,7878,799.19
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             5
                    </div>
                </th>
                <td class="px-6 py-4">
                    Ikwuano
                </td>
                <td class="px-6 py-4">
                    3,723,329.22
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             6
                    </div>
                </th>
                <td class="px-6 py-4">
                    Isiala Ngwa North
                </td>
                <td class="px-6 py-4">
                    303,107.66
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             7
                    </div>
                </th>
                <td class="px-6 py-4">
                    Isiala Ngwa South
                </td>
                <td class="px-6 py-4">
                    80,778,689.98
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             8
                    </div>
                </th>
                <td class="px-6 py-4">
                    Isuikwuato
                </td>
                <td class="px-6 py-4">
                    4,778,846,312.14
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             9
                    </div>
                </th>
                <td class="px-6 py-4">
                    Umunneochi
                </td>
                <td class="px-6 py-4">
                    148,686,111,26
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             9
                    </div>
                </th>
                <td class="px-6 py-4">
                    Ugwunagbo
                </td>
                <td class="px-6 py-4">
                    98,268,791.90
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-green-900  whitespace-nowrap dark:text-white">
                                          <div className='w-10 bg-green-100 p-2 text-center font-bold rounded-lg text-green-700'>
                                             10
                    </div>
                </th>
                <td class="px-6 py-4">
                    Ohafia
                </td>
                <td class="px-6 py-4">
                    18,378,129.43
                </td>
            </tr>
            
        </tbody>
       
    </table>
</div>


                        </div>



                        <div className=" rounded-md shadow-md bg-white  border border-0.5 border-gray-300 mt-4">
                        <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-md font-medium text-gray-700">Top 5 LGAs</h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-sm font-medium">View</h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-sm font-medium">All Time</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                             
                           </div>
                           </div>
                           
                           <div className='flex flex-col space-y-2 md:flex-row  md:justify-between md:space-y-0 md:space-x-1 px-4'>
                                       <div className="flex justify-center items-center ">
                                          <DoughnutChart className="" lgaAmount={data1} lgaName="Bendel" />
                                       </div>
                                       <div className="flex justify-center items-center ">
                                          <DoughnutChart lgaAmount={data2} lgaName="Abia North" />
                                       </div>
                                       <div className="flex justify-center items-center ">
                                          <DoughnutChart lgaAmount={data3} lgaName="Isu" />
                                       </div>
                                       <div className="flex justify-center items-center ">
                                          <DoughnutChart lgaAmount={data4} lgaName="Ovukwu" />
                                       </div>
                                       
                           </div>

                           <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-md font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-sm font-medium"></h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 text-blue-500">
                                 <h4 className="text-sm text-blue-500 font-medium">EXPLORE</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                              </div>
                             
                           </div>

                        </div>
                    {/* end of section */}

                    {/* begin of section */}
                    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2  ">
  <div class="md:w-1/2 w-full ">
  <div className=" rounded-md shadow-md bg-white  border border-0.5 border-gray-300 mt-4">
                        <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-xs font-medium text-gray-700">Top 5 Generating Revenue Types</h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-xs font-medium">View</h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-xs font-medium">All Time</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                             
                           </div>
                           </div>
                                          <BarChart className=""  />
                           
                          

                           <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-md font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-sm font-medium"></h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 text-blue-500">
                                 <h4 className="text-xs text-blue-500 font-medium">EXPLORE</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                              </div>
                             
                           </div>

                        </div>
                    {/* end of section */}
  </div>







  <div class="md:w-1/2 w-full ">
  <div className=" rounded-md shadow-md bg-white  border border-0.5 border-gray-300 mt-4">
                        <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-xs font-medium text-gray-700">Top 5 e-Ticket Agents</h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-xs font-medium">View</h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-xs font-medium">All Time</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                             
                           </div>
                           </div>
                                          <BarChart className=""  />
                           
                          

                           <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-md font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-sm font-medium"></h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 text-blue-500">
                                 <h4 className="text-xs text-blue-500 font-medium">EXPLORE</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                              </div>
                             
                           </div>

                        </div>
  </div>
</div>
                    {/* end of section */}

                     {/* begin of section */}
                     <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2  mb-32">
  <div class="md:w-1/2 w-full ">
  <div className=" rounded-md shadow-md bg-white  border border-0.5 border-gray-300 mt-8">
                        <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-xs font-medium text-gray-700">Top 5 Generating Revenue Types</h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-xs font-medium">View</h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-xs font-medium">All Time</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                             
                           </div>
                           </div>
                                          <StackBarChart className=""  />
                           
                          

                           <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-md font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-sm font-medium"></h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 text-blue-500">
                                 <h4 className="text-xs text-blue-500 font-medium">EXPLORE</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                              </div>
                             
                           </div>

                        </div>
                    {/* end of section */}
  </div>







  <div class="md:w-1/2 w-full hidden ">
  <div className=" rounded-md shadow-md bg-white  border border-0.5 border-gray-300 mt-4">
                        <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-xs font-medium text-gray-700">Top 5 e-Ticket Agents</h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-xs font-medium">View</h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 border border-0.5 hover:cursor-pointer border-gray-300 bg-white rounded-sm">
                                 <h4 className="text-xs font-medium">All Time</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                             
                           </div>
                           </div>
                                          <StackBarChart className=""  />
                           
                          

                           <div className='flex justify-between my-3 mx-4'>
                        <h3 className=" text-md font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div className="px-3 py-0.5"> <h4 className="text-sm font-medium"></h4> </div>
                              <div className=" flex flex-row space-x-2 px-3 py-0.5 text-blue-500">
                                 <h4 className="text-xs text-blue-500 font-medium">EXPLORE</h4>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>

                              </div>
                              </div>
                             
                           </div>

                        </div>
  </div>
</div>
                    {/* end of section */}

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
