/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";
import _ from "lodash";

import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import { demandCategoryDetailsRevenueAction } from '../actions/demandCategoryActions';

import { Link, useLocation, useNavigate,useParams } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const CategoryDetailRevenueScreen = ({ matchRev }) => {
    const {id} = useParams()

   console.log(id + "params")
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")

  

  const demandCategoryDetailsRevenue = useSelector((state) => state.demandCategoryDetailsRevenue);
  const { loading:loadingCateRevenue, error:errorCateRevenue,demand_category } = demandCategoryDetailsRevenue;
  // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
 console.log(demand_category + "demand_category here is the user")
 


 const total = demand_category?.dnc_revenueLinesEntities.map((revenue) =>(
    revenue.revenueLineAmount
))

const totals = _.sum(total)
console.log (_.sum(total) + "game mane")
console.log (_.sum(total) + "game mane")
console.log (_.sum(total) + "game mane")


function sformatCurrency(totalz) {
    var neg = false;
    if (total < 0) {
       neg = true;
       total = Math.abs(total);
    }
    return (
       (neg ? '-#' : '#') +
       parseFloat(total, 10)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          .toString()
    );}

   useEffect(() => {
     
       dispatch(demandCategoryDetailsRevenueAction(id));
      
   }, []);

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
                                   <div></div>
                                   <Link to='/category'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
                      </div>
                    


                      <div class=" max-w-xl -mt-6 mb-24 md:-mt-12 bg-white rounded-lg mx-12 md:mx-auto  ">
                      <div className="flex  items-center justify-center rounded-t-lg  bg-blue-700 h-32 ">

<h5 class="text-3xl  text-center text-white  font-bold  dark:text-white">
                                               {demand_category?.categoryName}
                                             </h5>  
    </div>

<form className="mx-4">
    
    <div class="grid gap-6 mb-2 md:grid-cols-2">
       
        
        
        
        
        
        
    </div>
    <div class="mb-6">
        <label for="message" class="block mb-2 mt-4 text-2xl font-medium text-blue-600 dark:text-white">Details</label>

        {loadingCateRevenue ? (
                                 <Loader />
                              ) : error ? (
                                 <div>{errorCateRevenue}</div>
                              ) : (
<div className=' mt-4'>
                      <div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {/* <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </input>
                        
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th> */}
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                     Revenue Map
                </th>
                <th scope="col" class="px-6 py-3">
                    Revenue Code
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Amount
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
               
                
                
            </tr>
        </thead>
        <tbody>
                                          {demand_category?.dnc_revenueLinesEntities?.map((revenue, index) => (
                                            <tr key={revenue._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            {/* <td class="w-4 p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                    </input>
                                                
                                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                </div>
                                            </td> */}
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
                                            
                                            
                                          
                                        </tr>
                                          
                                          ))}
                                       </tbody>

                                       
                                       
                               </table>
                               </div>
                               </div>
)} 

<div className="flex justify-between py-4 px-6 mx-4 text-xl">
                                   <div className="text-2xl font-bold text-gray-700">Total</div>
                                   <div className="text-xl font-bold text-blue-700">{
                                      totals
                                   
                                 }</div>
                                   
                                  
                                   
                        </div>
   
    </div>

    
     
    
    
  
    
    
    
</form>

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

export default CategoryDetailRevenueScreen;
