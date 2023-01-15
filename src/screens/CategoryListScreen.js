/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';


import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';
import {
    listRevenues,
    revenueDeleteAction
 } from '../actions/revenueActions.js';
 import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import { revenueCreateAction } from '../actions/revenueActions';

import { Link, useLocation, useNavigate } from 'react-router-dom';




const CategoryListScreen = ({ match }) => {
    const [revenueLineCode, setRevenueLineCode] = useState('');
   const [revenueLineName, setRevenueLineName] = useState('');
   const [revenueLineAmount, setRevenueLineAmount] = useState(0);
   const [revenueLineFrequency, setRevenueLineFrequency] = useState('yearly');
    const [showModal, setShowModal] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")


 

  const revenueList = useSelector((state) => state.revenueList);

  const { loading:loadingList, error:errorList, revenues, page, pages, count } = revenueList;
  console.log(revenues);




  const showHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
 };
  
  
 const handleClose = () => {
  
    setShowModal(false);
   
};


const handleChangeCode = (e) => {
    setRevenueLineCode(e.target.value);
 };
 const handleChangeAmount = (e) => {
      setRevenueLineAmount(e.target.value);
     
    //  console.log(Number(amount )+ " killim")
 };
 const handleChangeName = (e) => {
    setRevenueLineName(e.target.value);
 };


 const handleChangeFrequency = (e) => {
    setRevenueLineFrequency(e.target.value);
 };

 const revenueCreate = useSelector((state) => state.revenueCreate);
 const {
    revenue,
    success,
    loading: loadingRevenue,
    error: errorRevenue
 } = revenueCreate;

 const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
       revenueCreateAction(
        revenueLineName,
        revenueLineCode,
        Number(revenueLineAmount),
        revenueLineFrequency
        )
        
     );
     dispatch(listRevenues());
    //  setShowModal(true);
     setShowModal(false);
    //  window.location.reload(false);
    
 };
    


    
   useEffect(() => {
     
      if (!userInfo) {
         navigate('/');
      } else {
         //  dispatch(getUserDetails('profile'));
         if (!user || !user.firstName) {
            // dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails('profile'));
            dispatch(listRevenues());
           
         }
      }
   }, [navigate, userInfo, user]);


    
   useEffect(() => {
    dispatch(listRevenues());
    // deactivate()
 }, [dispatch]);
    
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
                                   <h5> List of Revenue Codes  </h5>
                                   <Link to='/demand_module'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>

                        {showModal ? (
                              <div
                                 // onClick={handleClose}
                                 tabindex="-1"
                                 class="flex  justify-center  bg-[rgb(0,0,0,0.35)] align-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                              >
                                 <div class="relative  w-full max-w-md h-full md:h-auto">
                                 <div>
                                 
                                            </div>
                                    
                                    <div class="">
                                        
                                       <div class=" max-w-sm bg-white mt-20 ml-8 p-4 md:ml-16 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                       <div class="flex justify-end">
                                                 <div></div>
                                             
                                             <button
                                                onClick={handleClose}
                                                type="button"
                                                class=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                                data-modal-toggle="popup-modal"
                                             >
                                                <svg
                                                   class="w-5 h-5"
                                                   fill="currentColor"
                                                   viewBox="0 0 20 20"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                >
                                                   <path
                                                      fill-rule="evenodd"
                                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                      clip-rule="evenodd"
                                                   ></path>
                                                </svg>
                                             </button>
                                          </div> 
                                          {/* {message && (
                                             <Message variant="danger">
                                                {message}
                                             </Message>
                                          )} */}
                                          <form
                                            //  onSubmit={submitHandler}
                                             class="space-y-6 px-4 md:p-0"
                                          >
                                             

                                          <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">
                                                Revenue Code Creation
                                              </h5>   
                                             {/* <div>
                                                <label
                                                   for="name"
                                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                   Your Name
                                                </label>
                                                <input
                                                   type="name"
                                                   name="name"
                                                   value={name}
                                                   onChange={(e) =>
                                                      setName(e.target.value)
                                                   }
                                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                   placeholder="john Doe"
                                                ></input>
                                             </div> */}
                                             <div>
                        <label  for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Revenue Category</label>
                        <input onChange={handleChangeName} type="text" name="text" id="text" placeholder="Enter Category Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    </div>
                                             <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Revenue Code</label>
                        <input onChange={handleChangeCode} type="text" name="text" id="text" placeholder="Enter Revenue Code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    </div>

                                            <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frequency of Payment</label>
<select onChange={handleChangeFrequency} id="frequency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Payment Frequency</option>
  <option value="yearly">Yearly</option>
  <option value="monthly">Monthly</option>
  <option value="daily">Daily</option>
  
                                                       </select>
                                                       
                                                       <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input onChange={handleChangeAmount} type="number"  placeholder="Enter Amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    </div>
                   
                                            
                                             

                                             
                                            

                                             <button
                                                onClick={submitHandler}
                                                type="submit"
                                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                             >
                                                Create
                                             </button>
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ) : null}


                               
                        <div className="flex justify-between py-4 px-6 text-xl">
                                  <div></div> 
                        <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create  Category</button>
                        
                                  
                                   
                        </div>
                      </div>



                           
                    

                      {/* {loadingList ? (
                                 <Loader />
                              ) : error ? (
                                 <div>{errorList}</div>
                              ) : (
<div className='mx-12 mt-4'>
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </input>
                        
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    Revenue Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Revenue Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Revenue Frequency
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
                                          {revenues.map((revenue, index) => (
                                            <tr key={revenue._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td class="w-4 p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                    </input>
                                                
                                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                            {revenue.revenueLineName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {revenue.revenueLineCode}
                                            </td>
                                            <td class="px-6 py-4">
                                            {revenue.revenueLineAmount}
                                            </td>
                                            <td class="px-6 py-4">
                                            {revenue.revenueLineFrequency}
                                            </td>
                                            
                                            <td class="flex items-center px-6 py-4 space-x-3">
                                                <Link to={`/revenues/${revenue.revenueLineCode}/edit`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                <svg className='h-6 w-6 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg>
                                                </Link>
                                               
                                            </td>
                                        </tr>
                                          
                                          ))}
                                       </tbody>

                                       
                                       
                               </table>
                               </div>
                               </div>
)} */}

                           
                      

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

export default CategoryListScreen;
