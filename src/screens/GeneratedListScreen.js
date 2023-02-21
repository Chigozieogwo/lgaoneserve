/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import Paginate from '../components/Paginate';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";
import {listLocations } from '../actions/locationActions';

import "react-datepicker/dist/react-datepicker.css";
import  Moment  from 'moment'
import Sidebar from '../components/Sidebar';
import {demandCategoryDetailsAction } from '../actions/demandCategoryActions';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import {demandGenerateCreateAction ,listDemandGenerateLists , } from '../actions/demandGenerateActions';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash'
// import { ReactComponent as DateIcon } from '../images/date.svg';


const GeneratedListScreen = ({ match }) => {
   const [lgaKey, setLgaKey] = useState('aba-south-lga-abia-state-nigeria');
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;



   // To hold the actual data
 const [data, setData] = useState([])
 //  const [loading, setLoading] = useState(true);
 
    
    // User is currently on this page
 const [currentPage, setCurrentPage] = useState(1);
 // No of Records to be displayed on each page   
 const [recordsPerPage] = useState(50);
 
 const indexOfLastRecord = currentPage * recordsPerPage;
 const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


   // Records to be displayed on the current page
   const currentRecords = data?.slice(indexOfFirstRecord, 
      indexOfLastRecord);
   
      const nPages = Math.ceil(data?.length / recordsPerPage)
   


   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")

 
  const demandGenerateList = useSelector((state) => state.demandGenerateList);
  const {loading : loadingGenerateList, error : errorGenerateLIst,   demand_lists } = demandGenerateList;
   console.log(demand_lists + " Batch Notice List of Abia LGA is the user")

   // onClick={ bot.enlisted ? () => removeBot() : () => enlistBot() }
   const locationList = useSelector((state) => state.locationList);
   const {loading : loadingLocation, error : errorLocation,   locations } = locationList;
   console.log(locations + " All 1 LGA of Abia LGA is the user")

//   const lgaKey1 = demand_lists.map((demand_list) => {
//     return   demand_list.lgaKey
//    })




const sortedArray = _.orderBy(demand_lists, [(obj) => new Date(obj.date)], ['asc'])

// const array = [{date:"2018-05-11"},{date:"2018-05-12"},{date:"2018-05-10"}]
// const sortedArray  = demand_lists.sort((a,b) => new Moment(a.demand_list.demandNoticeBatch.createdAt).format('YYYYMMDD') - new Moment(b.demand_list.demandNoticeBatch.createdAt).format('YYYYMMDD'))
// console.log(sortedArray)
   

   
//    console.log(lgaKey1 + " here my key thanks")
   const demandCategoryDetails = useSelector((state) => state.demandCategoryDetails);
   const {loading : loadingCategory ,   demand_category  } = demandCategoryDetails;
   console.log(demand_category + "vvvvv Batch Notice List of Abia LGA is the user")
   useEffect(() => {
      dispatch(listLocations());
      dispatch(listDemandGenerateLists());
      dispatch(demandCategoryDetailsAction(lgaKey));
      setTimeout(() => {
         if(!loadingGenerateList){
            setData(sortedArray)
          }
      },1000)
      // if (!userInfo) {
      //    navigate('/');
      // } else {
      //    //  dispatch(getUserDetails('profile'));
      //    if (!user || !user.firstName) {
      //       // dispatch({ type: USER_UPDATE_PROFILE_RESET });
      //       dispatch(getUserDetails('profile'));
           
      //    }
      // }
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
                                   <h5> Batch Lists </h5>
                                   <Link to='/demand_selection'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>

                           
                                  
                                   
                        </div>

                        {loadingGenerateList? (
                                 <Loader />
                              ) : error ? (
                                 <div>{errorGenerateLIst}</div>
                              ) : (
<div className=' mt-4'>
                      <div class="relative  overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    Batch unique ID
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    LGA
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                   Generation Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    time
                </th>
               
                <th scope="col" class="px-6 py-3">
                    view
                </th>
            </tr>
        </thead>
        <tbody>
                                          {currentRecords.map((demand_list, index) => (
                                            <tr key={demand_list.demandNoticeBatch._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                                   {
//   locations.filter(
//    (location) => location.lgaKey === demand_list.lgaKey



                                                      demand_list.demandNoticeBatch._id.toUpperCase()
                                                   }
                                            </td>
                                            <td class="px-6 py-4">
                                            {demand_list.demandNoticeCategory.categoryName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {demand_list.lga.lgaName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {demand_list.demandNoticeBatch.numberOfEntries}
                                            </td>
                                            <td class="px-6 py-4">
                                            {demand_list.demandNoticeBatch.generationStatus}
                                            </td>
                                            <td class="px-6 py-4">
                                            {Moment(demand_list.demandNoticeBatch.createdAt).format('DD-MM-YYYY')       }
                                            </td>
                                            <td class="px-6 py-4">
                                            {Moment(demand_list.demandNoticeBatch.createdAt).format(' h:mm:ss a') }
                                            </td>
                                            
                                            
                                            <td class="flex items-center px-6 py-4 space-x-3">
                                                <Link to={`/demand-notices/${demand_list.demandNoticeBatch._id}`} class="font-medium text-white dark:text-green-500 hover:underline">
                                               <button className='bg-yellow-400 px-4 py-1.5 hover:bg-yellow-500 '> view </button>
                                                </Link>
                                               
                                            </td>
                                        </tr>
                                          
                                          ))}
                                       </tbody>

                                       
                                       
                               </table>
                               </div>
                               </div>
)}
                      </div>
                    




                      <div className='flex justify-center  p-2 text-white mb-2 '><span class="bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-2.5 rounded dark:bg-green-500 dark:text-green-300"> Page {currentPage}</span></div>
                                 <div className='flex justify-center mb-12'>
                                    
                                 <Paginate
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/>                          
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

export default GeneratedListScreen;
