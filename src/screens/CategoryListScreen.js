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
import {demandCategoryDetailsAction } from '../actions/demandCategoryActions';
import {listLocations } from '../actions/locationActions';

import _ from "lodash";
import { Link, useLocation, useNavigate } from 'react-router-dom';




const CategoryListScreen = ({  }) => {

    //  const [locations, setLocations] = useState([]);
   const [lgaKey, setLgaKey] = useState('aba-north-lga-abia-state-nigeria');
   const [lgaFilter, setLgaFilter] = useState('');
   
   
    const [showModal, setShowModal] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
  console.log(userInfo + "here is the user")

  const locationList = useSelector((state) => state.locationList);
  const {loading : loadingLocation, error : errorLocation,   locations } = locationList;
  
  
  console.log(locations + " All LGA of Abia LGA is the user")
 

  const demandCategoryDetails = useSelector((state) => state.demandCategoryDetails);

  const { loading:loadingCategory, error:errorCategory, demand_category } = demandCategoryDetails;
  console.log(demand_category +" mine category here it is");
  console.log(demand_category +" mine category here it is");
  console.log(demand_category +" mine category here it is");


  const demandCategoryDetailsRevenue = useSelector((state) => state.demandCategoryDetailsRevenue);
  const { loading:loadingCateRevenue, error:errorCateRevenue,demand_categoryRevenue } = demandCategoryDetailsRevenue;
  // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
 console.log(demand_categoryRevenue + "demand_category here is the user")


    // const amount = () => {
    //     demand_categoryRevenue.filter((a) => a._id === demand_category.demandNoticeCategories._id )
    // }


  const showHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
 };
  
  
 const handleClose = () => {
  
    setShowModal(false);
   
};

const handleLgaFilter = (e) => {
   setLgaFilter(e.target.value);
 };

// const handleChangeCode = (e) => {
//     setRevenueLineCode(e.target.value);
//  };
//  const handleChangeAmount = (e) => {
//       setRevenueLineAmount(e.target.value);
     
//     //  console.log(Number(amount )+ " killim")
//  };
//  const handleChangeName = (e) => {
//     setRevenueLineName(e.target.value);
//  };


//  const handleChangeFrequency = (e) => {
//     setRevenueLineFrequency(e.target.value);
//  };

//  const revenueCreate = useSelector((state) => state.revenueCreate);
//  const {
//     revenue,
//     success,
//     loading: loadingRevenue,
//     error: errorRevenue
//  } = revenueCreate;

 const submitHandler = (e) => {
    e.preventDefault();
   
    //  dispatch(listRevenues());
    //  setShowModal(true);
     setShowModal(false);
    //  window.location.reload(false);
    
 };
    


    
   useEffect(() => {
    dispatch(listLocations());
       dispatch(demandCategoryDetailsAction(lgaFilter));
      
   }, [lgaFilter]);


    
   useEffect(() => {
    
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
                                   <h5> List of Category  </h5>
                                   <Link to='/demand_module'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>

                        {showModal ? (
                              <h1>Modal</h1>
                           ) : null}


                               
                        <div className="flex justify-between py-4 px-6 text-xl">
                                  <div></div> 
                                  <Link to='/category/create'>

                        <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create  Category</button>
                                  </Link>
                        
                                  
                                   
                        </div>
                      </div>



                           
                    

                      
                      <div className='mx-12 bg-white pt-8 rounded-lg'>
   <div className='mx-4 md:mx-48 mb-8 '>


<div>
                 {/* <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search...</label> */}
<select onChange={handleLgaFilter} id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected>Filter By LGA</option>
                                          
  <option  value="aba-north-lga-abia-state-nigeria">Aba North</option>
  <option  value="aba-south-lga-abia-state-nigeria">Aba South</option>
  <option  value="arochukwu-lga-abia-state-nigeria">Arochukwu</option>
  <option  value="bende-lga-abia-state-nigeria">Bende</option>
  <option  value="ikwuano-lga-abia-state-nigeria">Ikwuano</option>
  <option  value="isiala-ngwa-north-lga-abia-state-nigeria">Isiala Ngwa North</option>
  <option  value="isiala-ngwa-south-lga-abia-state-nigeria">Isiala Ngwa South</option>
  <option  value="isuikwuato-lga-abia-state-nigeria">Isuikwuato</option>
  <option  value="obi-ngwa-lga-abia-state-nigeria">Obingwa</option>
  <option  value="ohafia-lga-abia-state-nigeria">Ohafia</option>
  <option  value="osisioma-ngwa-lga-abia-state-nigeria">Osisioma Ngwa</option>
  <option  value="ugwunagbo-lga-abia-state-nigeria">Ugwunagbo</option>
  <option  value="ukwa-east-lga-abia-state-nigeria">Ukwa East</option>
  <option  value="ukwa-west-lga-abia-state-nigeria">Ukwa West</option>
  <option  value="umu-nneochi-lga-abia-state-nigeria">Umu Nneochi</option>
  <option  value="umuahia-north-lga-abia-state-nigeria">Umuahia North</option>
  <option  value="umuhaia-south-lga-abia-state-nigeria">Umuahia South</option>


                                          {/* { locations?.map((location, index) => (

<option key={location._id} value={location.lgaKey}>{location.lgaName}</option>
//                                           
                                          
                                          ))} */}
</select>
                 </div>
</div>



                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
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
                     Category Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Category Description
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Amount
                </th> */}
                <th scope="col" class="px-6 py-3">
                    View
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
                
            </tr>
        </thead>
        <tbody>
                                          {demand_category?.demandNoticeCategories?.map((revenue, index) => (
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
                                            {revenue.categoryName}
                                            </td>
                                             <td class="px-6 py-4">
                                            {revenue.categoryDescription}
                                            </td>
                                             {/* <td class="px-6 py-4">
                                            { 
                                            
                                            demand_categoryRevenue?.filter(a => 
       '63c3e0c981cb87c326863d83' === revenue._id
    ).dnc_revenueLinesEntities?.map((revenue2) =>(
       console.log(_.sum(revenue2.revenueLineAmount))
    ))
                                            
                                            }
                                            
                                            </td> */}
                                            
                                            <td class=" px-6 py-4 ">
                                                <Link  to={`/demand-notice-categories/${revenue._id}`}  class="font-medium text-white dark:text-blue-500 hover:underline">
                                               <button className='bg-yellow-400 px-4 py-1.5 hover:bg-yellow-500 '> view </button>
                                                </Link>
                                               
                                            </td>
                                            
                                            <td class=" px-6 py-4 ">
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
