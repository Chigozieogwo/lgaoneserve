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
import {listLocations } from '../actions/locationActions';
import {demandCategoryCreateAction } from '../actions/demandCategoryActions';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const CreateCategoryScreen = ({ match }) => {

    const [categoryName, setCategoryName] = useState('');
   const [categoryDescription, setCategoryDescription] = useState('');
   const [ lgaKey, setLgaKey] = useState('aba-south-lga-abia-state-nigeria');
   const [revenueLineCodes, setRevenueLineCodes] = useState('');
   const [selected, setSelected] = useState([]);
   
   const handleChangeRevenueLinesCode = (e) => {
       let picked = []
   const selectentry = setRevenueLineCodes( e.target.value );
   setSelected(picked.push(selectentry))
    console.log(picked + " reve")
    console.log(revenueLineCodes + " reve")
    console.log(revenueLineCodes + " reve")
    console.log(revenueLineCodes + " reve")
};
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


  const revenueList = useSelector((state) => state.revenueList);

  const { loading:loadingList, error:errorList, revenues, page, pages, count } = revenueList;
  

  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(demandCategoryCreateAction(
        categoryName,
      categoryDescription,
      lgaKey,
      revenueLineCodes
    ));
    
     dispatch(listRevenues());
    //  setShowModal(true);
    //  setShowModal(false);
    //  window.location.reload(false);
    
 };


 

 const handleChangeCategoryName = (e) => {
    setCategoryName(e.target.value);
    console.log(e.target.value)
 };
 const handleChangeCategoryDescription = (e) => {
    setCategoryDescription(e.target.value);
 };
 const handleChangeLgaKey = (e) => {
    //   locations.filter(location.lgaKey === e.target.value)
       setLgaKey(e.target.value);
    console.log(lgaKey + "locat me locate me")
 };
//  const handleChangeRevenueLinesCode = (e) => {
//     setRevenueLineCodes(e.target.value);
//  };

   useEffect(() => {
       dispatch(listLocations());
       dispatch(listRevenues());
     
      
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
                                   <h5>  </h5>
                                   <Link to='/category'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
                      </div>
                    

                      <div class=" max-w-3xl -mt-12 bg-white rounded-lg  mx-auto p-4 ">


<form className="mx-4">
<h5 class="text-xl mb-8 text-center font-medium text-gray-900 dark:text-white">
                                                Create Demand Category
                                             </h5>  
    <div class="grid gap-6 mb-2 md:grid-cols-2">
        <div>
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                        <input onChange={handleChangeCategoryName} type="text" name="text" id="text" placeholder="Category Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                    
        </div>
        <div>
        <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
<select id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option >Select LGA</option>
 
 {locations?.map((location, index) => (

<option onChange={handleChangeLgaKey} key={location._id} value={location?.lgaKey}>{location.lgaName}</option>
//                                           
 
 ))}
</select>
        </div>
        
        
        
        
        
    </div>
    <div class="mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>

<textarea  onChange={handleChangeCategoryDescription} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

   
    </div>

    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Revenue Maps</label>

    <div class="grid gap-2 mx-4  grid-cols-2 md:grid-cols-3 mb-4">
         

    {revenues?.map((revenue, index) => (
                                       
                                        <div key={revenue._id} class="flex items-center ">
                                        <input selected onChange={handleChangeRevenueLinesCode} id="default-checkbox" type="checkbox" value={revenue.revenueLineCode} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{revenue.revenueLineName}</label>
                                    </div>
                                          
                                          ))}
    
    
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

export default CreateCategoryScreen;
