/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";
import pdfUrl from '../utils/pdfUrl'
import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';

import {demandGenerateCreateAction ,listDemandGenerateLists,demandGenerateDownloadAction ,demandGenerateBatchAction } from '../actions/demandGenerateActions';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate,useParams } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const BatchPreviewScreen = ({ match }) => {
 

   // const {demandNoticeBatchId } = useParams()
   // const pageNumber = match.params.pageNumber || 1
   // const demandNoticeBatchId = match.params.id
   const {id} = useParams()

   console.log(id + "params")
   // console.log(match.params + "params match")


   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const demandGenerateBatch = useSelector((state) => state.demandGenerateBatch);
   const { loading:loadingBatch, error:errorBatch,demand_batchs } = demandGenerateBatch;
   // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
//   console.log(demandNoticeCategory + "Batch here is the user")
//   console.log(demand_batchs.demandNoticeList + " Serial Number Batch here is the user")
//   console.log(lgaRecord + "Batch here is the user")
//   console.log(revenueLinesEntities + "Batch here is the user")


   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")


   // const url = `${lo}`
  const showHandler = (e) => {
   e.preventDefault();
   // window.open("_blank");
   dispatch(demandGenerateDownloadAction(id));
   // setShowModal(true);
};


   useEffect(() => {
     
      dispatch(demandGenerateBatchAction(id));

      // if (!userInfo) {
      //    navigate('/');
      // } else {
      //    //  dispatch(getUserDetails('profile'));
      //    if (!user || !user.firstName) {
      //       // dispatch({ type: USER_UPDATE_PROFILE_RESET });
      //       dispatch(getUserDetails('profile'));
           
      //    }
      // }
   }, [navigate, userInfo,]);

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
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>


                        <div className="flex justify-between py-4 px-6 text-xl">
                                  <div></div> 
                        <button onClick={showHandler} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
                        
                                  
                                   
                        </div>
                         </div>
                    


          
{/* {demand_batchs === 'undefined' ? null : demand_batchs.lgaRecord.lgaName} */}

          


                           
                      

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

export default BatchPreviewScreen;
