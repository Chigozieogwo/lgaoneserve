/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import {listLocations } from '../actions/locationActions';

import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';
import { stateCreateAction,listStates,lgaCreateAction } from '../actions/locationActions';

import { Link, useLocation, useNavigate,useParams } from 'react-router-dom';




const LgaCreateScreen = ({ match }) => {
   // const [stateKey, setStateKey] = useState('');
   const [lgaName, setlgaName] = useState('');
   const [acronym, setAcronym] = useState('');
   const [revenueCodePrefix, setRevenueCodePrefix] = useState('');
   const stateKey = useParams();

   
   
   const [FilterName, setFilterName] = useState('');
  


    const [showModal, setShowModal] = useState(false);
    const [showModalCheck, setShowModalCheck] = useState(false);
   const location = useLocation();
   console.log(JSON.stringify(stateKey) + " State Key");
   console.log(stateKey.name + " name State Key");



   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
//   console.log(userInfo + "here is the user")


  const stateList = useSelector((state) => state.stateList);
  const { loading:loadingList, error:errorList, stateNames, page, pages, count } = stateList;

   
  const locationList = useSelector((state) => state.locationList);
  const { loading:loadingLocationList, error:errorLocationList, locations } = locationList;
  console.log(locations);
  
  const filterState = stateNames?.filter((stateName) => stateName.stateKey === stateKey.name)
  console.log(JSON.stringify(filterState) + " filtered state");
  
//   const jsonString = JSON.stringify(filterState);
//    const newObj = JSON.parse(jsonString)
//   console.log(newObj.stateName + " 2 filtered state");

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


 const handleChangeName = (e) => {
    setlgaName(e.target.value);
 };
 const handleChangeAcronym = (e) => {
    setAcronym(e.target.value);
 };
 const handleChangeCodePrefix = (e) => {
    setRevenueCodePrefix(e.target.value);
 };



 
 const lgaCreate = useSelector((state) => state.lgaCreate);
 const {
    lga,
    success,
    loading: loadingState,
    error: errorState
 } = lgaCreate;

 const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
       lgaCreateAction(
        stateKey?.name,
          lgaName,
          acronym,
          revenueCodePrefix
        
        )
        
     );
     dispatch(listLocations(stateKey?.name))
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
    




    
   useEffect(() => {
      dispatch(listStates());
      dispatch(listLocations(stateKey?.name))
      // setFilterName(filterState[0]?.stateName)
   }
   , [dispatch,success]);
    
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
                                   <h5> List of {FilterName} State LGAs  </h5>
                                   <Link to='/demand_module'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
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
                                             Add New LGA
                                           </h5>   
                                          
                                          <div>
                     <label  for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LGA Name</label>
                     <input onChange={handleChangeName} type="text" name="text" id="text" placeholder="Enter LGA Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                 </div>
                                          <div>
                     <label  for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LGA Acronym</label>
                     <input onChange={handleChangeAcronym} type="text" name="text" id="text" placeholder="Enter LGA Aronym" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                 </div>
                                          <div>
                     <label  for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LGA Code Prefix</label>
                     <input onChange={handleChangeCodePrefix} type="text" name="text" id="text" placeholder="Enter Code Prefix" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
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
                           {/* <Link to='/locations/lgas'>
                              
                        <button  type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Create New LGA</button>
                           </Link> */}
                                   <div></div>
                        <button onClick={showHandler} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Add New LGA</button>
                        
                                    
                                   
                        </div>
                      </div>



                           
                    


                           




                               <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-12 mb-32 rounded-md bg-white shadow-md border border-0.5 border-gray-300">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 my-4">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    LGA
                </th>
                <th scope="col" class="px-6 py-3">
                    ACRONYM
                </th>
                <th scope="col" class="px-6 py-3">
                    CODE
                </th>
                <th scope="col" class="px-6 py-3">
                    EDIT
                </th>
                <th scope="col" class="px-6 py-3">
                    VIEW
                </th>
               
            </tr>
        </thead>
        <tbody>
                                          {locations?.map((lga, index) => (
                                            <tr key={lga._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                            {lga?.lgaName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {lga?.acronym}
                                            </td>
                                            <td class="px-6 py-4">
                                            {lga?.revenueCodePrefix}
                                            </td>
                                            
                                            
                                            <td class="flex items-center px-6 py-4 space-x-3">
                                                <Link to={``} class="font-medium text-green-600 dark:text-green-500 hover:underline">
                                                <svg className='h-6 w-6 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg>
                                                </Link>
                                               
                                            </td>

                                                <td className=' '>
                                                   <div  className="border border-1 w-14 border-gray-300 px-4 py-1 mx-auto">

                                            <Link to={``}  >
                                           
         <h4 className="text-xs text-gray-700 font-bold">view</h4>
               
                                   </Link>
                                                   </div>
               </td>
                                        </tr>
                                          
                                          ))}
                                       </tbody>

                                       
                                       
                        </table>
                        <div className='flex justify-between my-4'>
                        <h3 className=" text-lg font-medium text-gray-700"></h3>
                           <div className="flex flex-row space-x-2">
                              <div></div>
                                 <div>
                              <div className=" flex flex-row space-x-2  hover:cursor-pointer  mb-4 mx-3">
                                 <h4 className="text-xs font-medium">Rows 1-10 0f 62 </h4>
                                 <div className="flex space-x-1">
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg>
                                 <svg className="w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
</svg>
                                 </div>

                              </div>
                                 
                              </div>
                             
                           </div>
                        </div>
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

export default LgaCreateScreen;
