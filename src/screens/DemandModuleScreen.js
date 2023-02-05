/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import { listDemandSpecificLists,demandSpecificDownloadAction } from '../actions/demandSpecificActions';

import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const DemandModuleScreen = ({ match }) => {
    const [showModalPrint , setShowModalPrint ] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")

 
  const demandSpecificList = useSelector((state) => state.demandSpecificList);
  const { loading:loadingSpecificList, error:errorSpecificList,demand_Specificlists } = demandSpecificList;
  // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
 console.log(demand_Specificlists + "Specific Screen here is the user")


 const showHandler = (id) => {
    
    dispatch(demandSpecificDownloadAction(id));
    setShowModalPrint(true);
    setTimeout(() => {
       setShowModalPrint(false);
            
      }, 8000);
 };


  
  
 const handleClose = () => {
    setShowModalPrint(false);
    
    
 };
   useEffect(() => {
       dispatch(listDemandSpecificLists());
     
    //   if (!userInfo) {
    //      navigate('/');
    //   } else {
    //      //  dispatch(getUserDetails('profile'));
    //      if (!user || !user.firstName) {
    //         // dispatch({ type: USER_UPDATE_PROFILE_RESET });
           
    //      }
    //   }
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
                                   <h5> Demand Notice Modules </h5>
                                   <Link to='/dashboard/profile'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
                      </div>
                      <div class="flex justify-between mx-12 mt-2 md:mt-10 h-16  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 px-2 xl:p-0 gap-3 xl:gap-3">
                         
                          
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm px-14 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link className="px-2  py-3  text-center" to="/demand_selection">Generate Demand Notice </Link></button>
                        
                       <div></div>
                       <div class=" h-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 xl:p-0 gap-6 xl:gap-6">
                       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm   mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link className="px-2  py-3  text-center" to="/category">Create Demand Notice Category</Link></button>

                                   
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link className="px-2 py-3  text-center" to="/revenue">Create  Revenue Code </Link></button>
                           
                       </div>
                               
                            
                        
                           
                           </div>
                           {showModalPrint ? (
                              <div
                              onClick={handleClose}
                              tabindex="-1"
                              class="flex  justify-center  bg-[rgb(0,0,0,0.35)] align-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                           >
                              <div class="relative  w-full max-w-md h-full md:h-auto">
                              <div>
                              
                                         </div>
                                 
                                 <div class="">
                                     
                                    <div class=" max-w-sm bg-white mt-20 ml-8 p-4 md:ml-16 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                      <Loader /> 
                                       <h5 className='text-md font-italics text-blue-700 text-center'> Downloading Demand  Notice ...</h5>
                                       </div> 
                                    
                                    </div>
                                 </div>
                              </div>
                           ) : null}



                           {/* <div className='mx-12 bg-white mt-4 p-6 rounded-xl border border-gray-50'>
                      

                           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div class="mt-10 mb-10 grid grid-cols-1 pb-3 md:grid-cols-3 lg:grid-cols-3 px-5 xl:p-0 gap-4 xl:gap-6">
             
             
             <div class=" mt-8">
               
             <select class="select select-success w-full max-w-xs">
  <option disabled selected>Search Report</option>
  <option>Audit Report/Operation Activities</option>
  <option>Financial Audit of Exports</option>
  <option>Oil Product Pricing Options/Price Quotes</option>
  <option>Notification Alerts</option>
  <option>Invoice Reports/Payment History Reports</option>
  <option>Other Reports</option>
  
</select>


            



             </div>
                        
            
<div>
<span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Start</span>

<DatePicker className="select-success rounded-xl w-full max-w-xs p-4 mt-1" selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div>
<span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">End</span>
<DatePicker className="select-success rounded-xl w-full max-w-xs p-4 mt-1" selected={startDate2} onChange={(date) => setStartDate2(date)} />
<div class="flex justify-between items-center">
                  <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                   
                  </h2>
                 <div className="mt-4 ">
                 <button onClick={isDiplayed} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                
                 </div>
                </div>

</div>

             
             
             
             
           </div>

            </div>


                      </div> */}


                           <div class="mx-2  mt-4  ">
              <div className="py-2 ">


                  
                <div >
                    <div class="flex justify-between items-center">
                    <h2 class="text-sm mb-8 mx-8 text-gray-600 font-bold tracking-wide">
                    List Of Specific Payer Demand Notice
                  </h2>
                    </div>
                  
                                       <div>





                                       {loadingSpecificList ? (
                                 <Loader />
                              ) : error ? (
                                 <div>{errorSpecificList}</div>
                              ) : (
<div className=' mt-2'>
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
                
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    ID NO:.
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    LGA
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Acronym
                </th> */}
                <th scope="col" class="px-6 py-3">
                    ABSSIN
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Print
                </th>
            </tr>
        </thead>
        <tbody>
                                          {demand_Specificlists?.reverse()?.map((Specificlist, index) => (
                                            <tr key={Specificlist?.demandNotice?._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.firstName} {Specificlist?.payerRecord?.lastName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {Specificlist?.demandNotice?.serialNumber}
                                            </td>
                                           
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.email}
                                            </td>
                                            <td class="px-6 py-4">
                                            {Specificlist?.lgaRecord?.lgaName}
                                            </td>
                                            {/* <td class="px-6 py-4">
                                            {Specificlist?.lgaRecord?.acronym}
                                            </td> */}
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.abbsin}
                                            </td>
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.phoneNumber}
                                            </td>

                                            <td class="flex items-center px-6 py-4 space-x-3">
                                                      <Link onClick={() => {
                                                          dispatch(demandSpecificDownloadAction(Specificlist?.demandNotice?._id));
                                                          setShowModalPrint(true);
                                                          setTimeout(() => {
                                                             setShowModalPrint(false);
                                                                  
                                                            }, 8000);
                    }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg className='h-6 w-6 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"></path>
</svg>
                    </Link>
                   
                </td>
                                            
                                            {/* <td class="flex items-center px-6 py-4 space-x-3">
                                                <Link to={`/revenues/${revenue.revenueLineCode}/edit`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                <svg className='h-6 w-6 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg>
                                                </Link>
                                               
                                            </td> */}
                                        </tr>
                                          
                                          ))}
                                       </tbody>

                                       
                                       
                               </table>
                               </div>
                               </div>
)}

















                                                         

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
                  <ul class="menu  overflow-y-auto  w-60 md:w-60 bg-blue-600">
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

export default DemandModuleScreen;
