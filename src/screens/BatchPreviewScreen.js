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
   
   // const userLogin = useSelector((state) => state.userLogin);
   // const { userInfo } = userLogin;

   const demandGenerateBatch = useSelector((state) => state.demandGenerateBatch);
   const { loading:loadingBatch, error:errorBatch,demand_batchs } = demandGenerateBatch;
   // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
  console.log(demand_batchs + "Batch here is the user")
//   console.log(demand_batchs.demandNoticeList + " Serial Number Batch here is the user")
//   console.log(lgaRecord + "Batch here is the user")
//   console.log(revenueLinesEntities + "Batch here is the user")
// const url = `https://billable-dev.herokuapp.com/demand-notices/template?demandNoticeId=${demand_batchs && demand_batchs?.demandNoticesList[0]?._id}`

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
//   console.log(userInfo + "here is the user")

  const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

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
   }, [id]);

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
                                 
                                   <div className="ml-4">
                                   <h5 className="text-3xl font-bold mb-4"> Print </h5>
                         <button onClick={showHandler} type="button" class="text-white outline outline-offset-2 outline-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white  rounded-md text-sm px-6 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                         <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-700" version="1.1" id="mdi-printer" width="24" height="24" viewBox="0 0 24 24"><path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" /></svg>
                                 </button>
                                   </div>
                                   <div>
                                   <Link to='/demand-notices/batches'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                   </div>
                        

                         
                                  
                                   
                        </div>
                        
                         </div>




                         <div className="">
                         
                        

                         <div class="grid grid-cols-3 gap-2 ml-12">
                         <ul>
                         <div className="flex justify-between ">
                                   <h5 className="font-bold text-xl"> Total : <span> {demand_batchs?.demandNoticesList?.length}</span> </h5>
                                   <button className="bg-blue-600 hover:bg-blue-800 mb-2 px-4 py-2 text-white ">Export as Csv</button>
                                  
                                   
                        </div>
 {  demand_batchs?.demandNoticesList?.map((batch,index) => 
 

 <div key={index} class="flex my-1 flex-row items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div className="bg-blue-700 px-12 py-4 text-white text-2xl font-bold">
    {index + 1}
 </div>
 
 <div class="flex flex-row justify-between  leading-normal">
     <h6 class="pr-0 pl-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">S/N:</h6>
     <h5 class="px-4 text-2xl font-bold text-blue-700 dark:text-gray-400">{batch.serialNumber}</h5>
 
 </div>

 
</div>
 )
                          
                        }</ul>
                         <div class="col-span-2 -mt-32">
                         <h5> Preview </h5>
                         <iframe className="mx-auto overflow-hidden" src= "https://billable-dev.herokuapp.com/demand-notices/template?demandNoticeId=63c431c3ddbd64368df75fbd"
 width="100%" height="900"></iframe>
                    
                         </div>
                         </div>
                      
                      
<div className="flex flex-row mx-16">


   


   
   
</div>  
                   {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />"}} ></div> */}

                      
                      
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
