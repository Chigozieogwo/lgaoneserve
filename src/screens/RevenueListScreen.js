/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import {listLocations } from '../actions/locationActions';

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




const RevenueListScreen = ({ match }) => {
   const [revenueLineName, setRevenueLineName] = useState('');
   const [lgaKey, setLgaKey] = useState('');
   const [revenueLineCode, setRevenueLineCode] = useState('');
   const [revenueLineAmount, setRevenueLineAmount] = useState(0);
   const [revenueLineFrequency, setRevenueLineFrequency] = useState('');
   
   const [lgaFilter, setLgaFilter] = useState('');
   const [lgaCode, setLgaCode] = useState('00');
   const [lgaName2, setLgaName2] = useState('');


    const [showModal, setShowModal] = useState(false);
    const [showModalCheck, setShowModalCheck] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
//   console.log(userInfo + "here is the user")


  const locationList = useSelector((state) => state.locationList);
   const {loading : loadingLocation, error : errorLocation,   locations } = locationList;
   
   
   // console.log(locations + " 333  All LGA of Abia LGA is the user")
 

  const revenueList = useSelector((state) => state.revenueList);

  const { loading:loadingList, error:errorList, revenues, page, pages, count } = revenueList;
  console.log(revenues);

  const handleChangeLga = (e) => {
   e.preventDefault()
   // dispatch(listLocations());
   setLgaKey(e.target.value);
   const lgafiltered = locations?.filter((location) => location.lgaKey === e.target.value)
   
  setLgaCode(lgafiltered[0].revenueCodePrefix)
  setLgaName2(lgafiltered[0].lgaName)
   // dispatch(demandCategoryDetailsAction(lgaKey));
   // console.log(JSON.stringify(lgafiltered) + " come lga work")
   // // console.log(lockm?.lgaName + " come lga work")
   // console.log(lgafiltered[0].lgaName + " come lga work")
   // console.log(lgafiltered[0].revenueCodePrefix + "Code prefix come lga work")
 
};


  const showHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
    dispatch(listLocations());
 };
  
  
 const handleClose = () => {
  
    setShowModal(false);
   
};
 const handleCloseCheck = () => {
  
    setShowModalCheck(false);
   
};


const handleChangeCode = (e) => {

const inputCode = `${lgaCode + e.target.value}`
    setRevenueLineCode(inputCode);

console.log(inputCode + 'input code')
console.log(inputCode + 'input code')
console.log(revenueLineCode + 'RevenueLineCode code')
console.log(revenueLineCode + 'RevenueLineCode code')
console.log(revenueLineCode + 'RevenueLineCode code')
   
 };
 const handleChangeAmount = (e) => {
      setRevenueLineAmount(e.target.value);
     
    //  console.log(Number(amount )+ " killim")
 };
 const handleChangeName = (e) => {
    setRevenueLineName(e.target.value);
 };
 const handleLgaFilter = (e) => {
   setLgaFilter(e.target.value);
   // setTimeout(() => {

   //    dispatch(listRevenues(lgaFilter));
   // },1000)
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
        lgaKey,
         revenueLineCode,
        Number(revenueLineAmount),
        revenueLineFrequency
        )
        
     );
     dispatch(listRevenues(lgaFilter));
   //   dispatch(listRevenues());
    //  setShowModal(true);
     setShowModal(false);
     setTimeout(()=>{
        setShowModalCheck(true);

     },1000)
     setTimeout(()=>{

        setShowModalCheck(false);

     },6000)
    //  window.location.reload(false);
    
 };
    


    
   // useEffect(() => {
     
   //    // dispatch(listLocations());
   //    if (!userInfo) {
   //       navigate('/');
   //    } else {
   //       //  dispatch(getUserDetails('profile'));
   //       if (!user || !user.firstName) {
   //          // dispatch({ type: USER_UPDATE_PROFILE_RESET });
   //          dispatch(getUserDetails('profile'));
   //          dispatch(listRevenues(lgaFilter));
           
   //       }
   //    }
   // }, [navigate, userInfo, user]);


    
   useEffect(() => {
    if(lgaFilter) {
       dispatch(listRevenues(lgaFilter));}
    // deactivate()
 }, [dispatch,lgaFilter]);
    
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
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>


                        {showModalCheck ? (
                              <div
                               onClick={handleCloseCheck}
                              tabindex="-1"
                              class="flex  justify-center  bg-[rgb(0,0,0,0.35)] align-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                           >
                              <div class="relative  w-full max-w-md h-full md:h-auto">
                              <div>
                              
                                         </div>
                                 
                                 <div class="">
                                     
                                    <div class="flex justify-center aligns-center  max-w-sm bg-white mt-20 ml-8 p-4 md:ml-16 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                     
                                       {/* {message && (
                                          <Message variant="danger">
                                             {message}
                                          </Message>
                                       )} */}
                                     
                                     {errorRevenue ? ( <div><svg className="text-red-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<h5 className="text-red-700" >{errorRevenue}</h5>
</div>) :   <div><svg className="text-green-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<h5 className="text-green-700" >Revenue Code Generated</h5>
</div>}
                                    
                                    </div>
                                 </div>
                              </div>
                           </div>
                           ) : null}












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
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="john Doe"
                                             ></input>
                                          </div> */}
                                          <div>
                     <label  for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Revenue Name</label>
                     <input onChange={handleChangeName} type="text" name="text" id="text" placeholder="Enter Category Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                 </div>
                 <div>
                 <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
<select onChange={handleChangeLga} id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select LGA</option>
                                          
  {/* <option  value="aba-north-lga-abia-state-nigeria">Aba North</option>
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
  <option  value="umuhaia-south-lga-abia-state-nigeria">Umuahia South</option> */}


                                          { locations?.map((location, index) => (

<option key={location._id} value={location.lgaKey}>{location.lgaName}</option>
//                                           
                                          
                                          ))}
</select>
                 </div>
                 
                
                <div>
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Revenue Code</label>
                     
                     <div class="flex">
                       <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                         {lgaCode }
                       </span>
                       <input onChange={handleChangeCode} type="text"  class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Revenue Code"></input>
                     </div>
                </div>
                

                 {/* <div>
                     <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Revenue Code</label>
                     
                  <div class="relative">
                     <div class="absolute inset-y-0 left-0 flex items-center bg-green-700 text-md px-2 rounded-lg font-bold text-white pl-3 pointer-events-none">
                       234
                     </div>
                     <input onChange={handleChangeCode} type="text" name="text" id="text" placeholder="Enter Revenue Code" class=" block w-full p-4 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                 </div>
                 </div> */}

                                         <div>
                                         <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frequency of Payment</label>
<select onChange={handleChangeFrequency} id="frequency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
<option selected>Select Payment Frequency</option>
<option value="yearly">Yearly</option>
<option value="monthly">Monthly</option>
<option value="daily">Daily</option>

                                                    </select>
                                         </div>
                                                    
                                                    <div>
                     <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                     <input onChange={handleChangeAmount} type="number"  placeholder="Enter Amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                 </div>
                
                                         
                                          

                                          
                                         

                                          <button
                                             onClick={submitHandler}
                                             type="submit"
                                             class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
                        <button onClick={showHandler} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Create Revenue Code</button>
                        
                                  
                                   
                        </div>
                      </div>



                           
                    

                      
<div className='mx-12 bg-white pt-8 rounded-lg'>
   <div className='mx-4 md:mx-48 mb-8 '>
      
   <div>
                 {/* <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search...</label> */}
<select onChange={handleLgaFilter} id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Filter By LGA</option>
                                          
  {/* <option  value="aba-north-lga-abia-state-nigeria">Aba North</option>
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
  <option  value="umuhaia-south-lga-abia-state-nigeria">Umuahia South</option> */}


                                          { locations?.map((location, index) => (

<option key={location._id} value={location.lgaKey}>{location.lgaName}</option>
//                                           
                                          
                                          ))}
</select>
                 </div>
   </div>
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-32">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    Revenue Category
                </th>
                <th scope="col" class="px-6 py-3">
                    LGA
                </th>
                <th scope="col" class="px-6 py-3">
                    Acronym
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
                                          {revenues?.map((revenue, index) => (
                                            <tr key={revenue._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                            {revenue.revenueLineName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {revenue?.lga.lgaName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {revenue?.lga.acronym}
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
                                                <Link to={`/revenuelines/${revenue.revenueLineCode}/edit`} class="font-medium text-green-600 dark:text-green-500 hover:underline">
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

export default RevenueListScreen;
