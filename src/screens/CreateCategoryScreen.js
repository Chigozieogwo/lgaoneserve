/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';
import {
    listRevenues,
    revenueDeleteAction
 } from '../actions/revenueActions.js';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import {listLocations,listStates } from '../actions/locationActions';
import {demandCategoryCreateAction } from '../actions/demandCategoryActions';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const CreateCategoryScreen = ({ match }) => {

    const [categoryName, setCategoryName] = useState('');
   const [categoryDescription, setCategoryDescription] = useState('');
   const [lgaKey, setLgaKey] = useState('');
   const [revenueLineCodes, setRevenueLineCodes] = useState([]);
   const [showDropdown, setShowDropdown] = useState(false);
   const [showModalCheck, setShowModalCheck] = useState(false);
   const [selectedState, setSelectedState] = useState('');
   const [selectedLga, setSelectedLga] = useState('');

   const [lgaFilter, setLgaFilter] = useState('');
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
  
  const stateList = useSelector((state) => state.stateList);
   
 

  const { loading:loadingstateList, error:errorstateList, stateNames,  } = stateList;
  console.log(stateNames);

//   console.log(locations + " All LGA of Abia LGA is the user")


  const revenueList = useSelector((state) => state.revenueList);

  const { loading:loadingList, error:errorList, revenues, page, pages, count } = revenueList;


  const demandCategoryCreate = useSelector((state) => state.demandCategoryCreate);

  const { loading:loadingCategory, error:errorCategory,  } = demandCategoryCreate;
  

  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(demandCategoryCreateAction(
        categoryName,
      categoryDescription,
      lgaKey,
      revenueLineCodes
    ));

   //  setShowModal(false);
     setTimeout(()=>{
        setShowModalCheck(true);

        setTimeout(()=>{
         
          navigate('/category')
 
      },3000)
      //   navigate('/category')

     },1000)
     setTimeout(()=>{

        setShowModalCheck(false);
      //   navigate('/category')
     },6000)
    
  
    
 };

 const handleLgaFilter = (e) => {
   setLgaFilter(e.target.value);
 };
 

 const handleShowDropdown = (e) => {
    if(showDropdown ===true){
       setShowDropdown(false);
       
      }else{
       setShowDropdown(true);
       dispatch(listRevenues(lgaKey));
    }
   //  console.log(e.target.value)
 };
 const handleChangeCategoryName = (e) => {
    setCategoryName(e.target.value);
   //  console.log(e.target.value)
 };
 const handleChangeCategoryDescription = (e) => {
    setCategoryDescription(e.target.value);
 };
 const handleChangeLga = (e) => {
    
       setLgaKey(e.target.value);
      //  dispatch(listRevenues(lgaKey));
   //  console.log(lgaKey + "locat me locate me")
 };
 

 const handleCloseCheck = () => {
  
   setShowModalCheck(false);
  
};

 const handleChangeRevenueLinesCode = (e) => {

   const { value, checked } = e.target;
   console.log(e.target + ' Target')
   console.log(e.target + ' Target')
   console.log(e.target + ' Target')
 
   if (checked) {
      setRevenueLineCodes((prev) => [...prev,value]);
    }
    // Case 2  : The user unchecks the box
   else {
      setRevenueLineCodes((prev) => prev.filter((e) => e !== value))
     
    }
   // setRevenueLineCodes((prev) => [...prev,e.target.value]);
   
};

   useEffect(() => {
      dispatch(listStates())
      dispatch(listLocations(selectedState))
      //  dispatch(listLocations());
      //  dispatch(listRevenues(lgaKey));
       dispatch(listRevenues(lgaKey));
      
   }, [dispatch,lgaKey,selectedState]);

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

                  <div>
                  <div className="bg-[#F4F5FA] overscroll-none  px-5  py-5">
                        <div className="flex justify-between py-4 px-6 text-xl">
                                   <h5>  </h5>
                                   <Link to='/category'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
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
                                     
                                    <div class="flex justify-center aligns-center  max-w-sm bg-white mt-20 ml-8 p-4 md:ml-16 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-600 dark:border-gray-700">
                                     
                                       {/* {message && (
                                          <Message variant="danger">
                                             {message}
                                          </Message>
                                       )} */}
                                     
                                     {errorCategory ? ( <div><svg className="text-red-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<h5 className="text-red-700" >{errorCategory}</h5>
</div>) :   <div><svg className="text-green-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<h5 className="text-green-700" >Category Generated</h5>
</div>}
                                    
                                    </div>
                                 </div>
                              </div>
                           </div>
                           ) : null}
                      <div class=" max-w-3xl -mt-12 bg-white rounded-lg  mx-auto p-4 ">


<form className="mx-4">
<h5 class="text-xl mb-8 text-center font-medium text-gray-900 dark:text-white">
                                                Create Demand Category
                                             </h5>  
    <div class="grid gap-6 mb-2 md:grid-cols-2">
        <div>
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                        <input onChange={handleChangeCategoryName} type="text" name="text" id="text" placeholder="Eg: Artisan with shop " class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    
        </div>
        
        <div >
                 <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>

                                             <select value={selectedState} onChange={event => setSelectedState(event.target.value)}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select State</option>
                    
                                          { stateNames?.map((state, index) => (

<option key={state.value} value={state.stateKey}>{state.stateName}</option>
//                                           
                                          
                                          ))}
</select>
                                             
                 </div>
        
        
        
        
        
                           </div>
                           

                           
                 <div class="mb-6">
                 <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>


<select value={lgaKey} onChange={handleChangeLga}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select LGA</option>
                    
                                          { locations?.map((lga, index) => (

<option key={lga.value} value={lga.lgaKey}>{lga.lgaName}</option>
//                                           
                                          
                                          ))}
</select>
                 </div>
                           

    <div class="mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business </label>

                              <textarea onChange={handleChangeCategoryDescription} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Eg: Tailoring/Fashion Designing,
 Hair Dressing/Plaiting,Barbing Salon,
 Computer Based Business Center License,
 Furniture Makers and Carvers"></textarea>

   
    </div>


        
        

<div>

   <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Revenue Maps</label>
<div onClick={handleShowDropdown}
                                               
                                               class="mb-4 cursor-pointer active:border-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                             >
                                                <div className='flex justify-between'>
<p className='text-gray-400'> Click Dropdown to Select ... </p>
<svg fill="none" className='w-5 h-5' stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
</svg>
                                               </div>
                                             </div>
{showDropdown ? (<div class="grid gap-2 mx-4 mt-4 grid-cols-2 md:grid-cols-3 mb-4">
      

      {revenues?.data?.map((revenue, index) => (
                                         
                                          <div key={revenue._id} class="flex items-center ">
                                          <input
                                            type="checkbox"
                                             value={revenue.revenueLineCode}
                                             onClick={ handleChangeRevenueLinesCode}
                                              class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{revenue.revenueLineName}</label>
                                      </div>
                                            
                                            ))}
      
      
      </div>): null }
                                             
</div>


    
    <button
                                                onClick={submitHandler}
                                                type="submit"
                                                class="w-full text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
                                             >
                                                Generate
                                             </button>
    
</form>

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

export default CreateCategoryScreen;
