/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';

import Sidebar from '../components/Sidebar';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import {demandGenerateCreateAction ,listDemandGenerateLists , } from '../actions/demandGenerateActions';
import {demandCategoryDetailsAction } from '../actions/demandCategoryActions';
import {listLocations } from '../actions/locationActions';

import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const DemandSelectionScreen = ({ match }) => {

   // const [locations, setLocations] = useState([]);
   const [lgaKey, setLgaKey] = useState('aba-north-lga-abia-state-nigeria');
   // const [lgaKey2, setLgaKey2] = useState('aba-north-lga-abia-state-nigeria');
   // const [locationn, setLocationn] = useState('');
   const [demandNoticeCategoryId, setDemandNoticeCategoryId] = useState('');
   const [numberOfEntriesToGenerate, setNumberOfEntriesToGenerate] = useState(0);
   // const [keyword, setKeyword] = useState('arochukwu-lga-abia-state-nigeria');
   


    const [showModalSpecific, setShowModalSpecific] = useState(false);
    const [showModalMultiple, setShowModalMultiple] = useState(false);
   //  const [name, setName] = useState('');

   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
   // console.log(userInfo + "here is the user")

   
   const locationList = useSelector((state) => state.locationList);
   const {loading : loadingLocation, error : errorLocation,   locations } = locationList;
   
   
   console.log(locations + " All LGA of Abia LGA is the user")


   const demandGenerateList = useSelector((state) => state.demandGenerateList);
   const {loading : loadingGenerateList, error : errorGenerateLIst,   demand_lists } = demandGenerateList;
   // console.log(demand_lists + " Location of Abia LGA is the user")


   const demandCategoryDetails = useSelector((state) => state.demandCategoryDetails);
   const {loading : loadingCategory ,   demand_category  } = demandCategoryDetails;
   // console.log(demand_category + " LGA and its Categories Location main  of Abia LGA is the user")
   // console.log(demandNoticeCategories + " Location of Abia LGA is the user")
console.log(lgaKey)
console.log(lgaKey + " buy here")
console.log(lgaKey)



   const handleChangeLga = (e) => {
      e.preventDefault()
 
      // setLgaKey(e.target.value);
      
      // console.log(data2 + '1112233311')
      console.log(lgaKey + '1112233311')
      console.log(lgaKey + '1112233311')
      console.log(lgaKey + '1112233311')
      // console.log(data2 + '1112233311')
      // if (e.target.value === demand_category.lga.lgaKey) {
      //    // setKeyword(e.target.value);
      //    setKeyword(demand_category.lga.lgaKey);
      // } 
};
const handleChangeDemandNoticeCategoryId = (e) => {
   setDemandNoticeCategoryId(e.target.value);
    
   //  console.log(Number(amount )+ " killim")
};
const handleChangeNumbers = (e) => {
   setNumberOfEntriesToGenerate(e.target.value);
};

const submitHandler = (e) => {
   e.preventDefault();
   dispatch(
      demandGenerateCreateAction(
       lgaKey,
       demandNoticeCategoryId,
      Number (numberOfEntriesToGenerate),
       
       )
       
    );
    
   setShowModalMultiple(false);
   navigate(`/demand-notices/batches`);
   //  window.location.reload(false);
   
};
  const showHandlerSpecific = (e) => {
    e.preventDefault();
    
    setShowModalMultiple(false);
    setShowModalSpecific(true);
 };
  const showHandlerMultiple = (e) => {
    e.preventDefault();
   //  dispatch(demandCategoryDetailsAction(lgaKey));
    setShowModalMultiple(true);
    setShowModalSpecific(false);
 };
  
 const handleClose = () => {
   setShowModalMultiple(false);
    setShowModalSpecific(false);
   
};
   useEffect(() => {
      dispatch(listLocations());
      dispatch(listDemandGenerateLists());
      dispatch(demandCategoryDetailsAction(lgaKey));
      if (!userInfo) {
         navigate('/');
      } else {
         //  dispatch(getUserDetails('profile'));
         if (!user ) {
            // dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails('profile'));
            // dispatch(listLocations());
           
         }
      }
   }, [navigate, userInfo, user,lgaKey]);

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
                                   <h5> Generate Demand Modules </h5>
                                   <Link to='/demand_module'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
                      </div>


                      {showModalMultiple ? (
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
                                                Multiple Demand Notice
                                             </h5>   
                                             

<label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
<select onChange={handleChangeLga} id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected>Select LGA</option>
                                          
  {/* <option  value="aba-north-lga-abia-state-nigeria">Abia North</option>
  <option  value="aba-south-lga-abia-state-nigeria">Abia South</option>
  <option  value="arochukwu-lga-abia-state-nigeria">Arochukwu</option>
  <option  value="bende-lga-abia-state-nigeria">Bende</option>
  <option  value="ikwuano-lga-abia-state-nigeria">Ikwuano</option> */}


                                          {locations === 'undefined' ? null : locations.map((location, index) => (

<option key={location._id} value={location.lgaKey}>{location.lgaName}</option>
//                                           
                                          
                                          ))}
</select>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select onChange={handleChangeDemandNoticeCategoryId} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected>Select Category</option>


                                          
                                          {demand_category === 'undefined' ? null : demand_category.demandNoticeCategories.map((demand_notice_category, index) => (

<option key={demand_notice_category._id} value={demand_notice_category._id}>{demand_notice_category.categoryName}</option>
//                                           
                                          
                                          ))
                                             }
 
</select>
                    <div>
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                        <input onChange={handleChangeNumbers} type="number" name="number" id="password" placeholder="input Quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    </div>
                                            
                                             

                                             
                                            

                                             <button
                                                onClick={submitHandler}
                                                type="submit"
                                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                             >
                                                Generate
                                             </button>
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ) : null}
                      {showModalSpecific ? (
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
                                                Specific 
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
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Payer</label>
                        <input type="text" name="text" id="text" placeholder="Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    </div>

                                            <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
<select id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>Select LGA</option>
 
 {locations.map((location, index) => (

<option key={location._id} value={location.lgaKey}>{location.lgaName}</option>
//                                           
 
 ))}
</select>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  

   
  
  
  
  
                                         <option selected>Select Category</option>
  <option value="US">Local Bakery</option>
                                          <option value="CA">Cold Storage</option>
                                          <option value="FR">Artisan without Shop</option>
   <option value="DE">Restuarants</option>
</select>
                   
                                            
                                             

                                             
                                            

                                             <button
                                                // onClick={submitHandler}
                                                type="submit"
                                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                             >
                                                Generate
                                             </button>
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ) : null}
                      <div class="mx-12 mt-6 md:mt-20 grid grid-cols-2 h-32 md:grid-cols-2 lg:grid-cols-2 px-5 xl:p-0 gap-4 xl:gap-6">
                         
                        
                          
                        
                      <Link onClick={showHandlerMultiple}>
                        <div class="bg-white  p-6 shadow-lg text-gray-700  hover:bg-blue-600 hover:text-white ease-out rounded-xl border border-gray-50">
                              <div >
                                 <div class="flex justify-center aligns-center hover:text-white ">
                                    <svg className='h-16 w-16 text-center  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
</svg>
                                 </div>
                                 <p class="text-lg text-center  font-bold  tracking-wide">
                                       Multiple
                               </p>
                              </div>
                           </div>
                        </Link> 
                        


                        
                        <Link onClick={showHandlerSpecific}>
                        <div class="bg-white  p-6 shadow-lg text-gray-700 hover:bg-blue-600 hover:text-white ease-out rounded-xl border border-gray-50">
                              <div >
                                 <div class="flex justify-center aligns-center hover:text-white ">
                                    <svg className='h-16 w-16 text-center  'fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
</svg>
                                 </div>
                                 <p class="text-lg text-center  font-bold  tracking-wide">
                                       Specific Payer
                               </p>
                              </div>
                           </div>
                        </Link> 
                        
                        
                        
                      
                        
                           
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

export default DemandSelectionScreen;
