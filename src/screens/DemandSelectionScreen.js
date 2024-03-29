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
import {demandGenerateCreateAction ,listDemandGenerateLists ,  } from '../actions/demandGenerateActions';
import {demandSpecificCreateAction,listDemandSpecificLists } from '../actions/demandSpecificActions';
import {demandCategoryDetailsAction } from '../actions/demandCategoryActions';
import {listLocations,listStates } from '../actions/locationActions';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DEMAND_GENERATE_CREATE_RESET } from '../constants/demandGenerateConstants';
import { DEMAND_SPECIFIC_CREATE_RESET } from '../constants/demandSpecificConstants';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const DemandSelectionScreen = ({ match }) => {
   const [selectedState, setSelectedState] = useState('');
   const [lgaKey, setLgaKey] = useState('');
   const [id, setId] = useState('');
   const [demandNoticeCategoryId, setDemandNoticeCategoryId] = useState('');
   const [numberOfEntriesToGenerate, setNumberOfEntriesToGenerate] = useState(0);

    const [showModalSpecific, setShowModalSpecific] = useState(false);
    const [showModalMultiple, setShowModalMultiple] = useState(false);
    const [showModalPayerData, setShowModalPayerData] = useState(false);

   
    const [payerFirstName, setPayerFirstName] = useState('');
    const [payerLastName, setPayerLastName] = useState('');
    const [payerHomeAddress, setPayerHomeAddress] = useState('');
    const [payerABBSIN, setPayerABBSIN] = useState('');
    const [payerPhoneNumber, setPayerPhoneNumber] = useState('');
    const [payerEmail, setPayerEmail] = useState('');
    const [message, setMessage] = useState('The User ABBSIN/Phone Number Already Exist Generate New Demand Notice');

   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
   console.log(payerFirstName + "here is the user")
   console.log(payerLastName + "here is the user")
   console.log(payerEmail + "here is the user")
   console.log(payerPhoneNumber + "here is the user")
   console.log(payerHomeAddress + "here is the user")
   console.log(payerABBSIN + "here is the user")
   console.log(lgaKey + "here is the user")
   console.log(demandNoticeCategoryId + "here is the user")

   
   const locationList = useSelector((state) => state.locationList);
   const {loading : loadingLocation, error : errorLocation,   locations } = locationList;
   
   
   console.log(locations + " All LGA of Abia LGA is the user")

   const stateList = useSelector((state) => state.stateList);
   
 

  const { loading:loadingstateList, error:errorstateList, stateNames,  } = stateList;
  console.log(stateNames);

   const demandGenerateList = useSelector((state) => state.demandGenerateList);
   const {loading : loadingGenerateList, error : errorGenerateLIst,   demand_lists } = demandGenerateList;
   // console.log(demand_lists + " Location of Abia LGA is the user")



   const demandGenerateCreate = useSelector((state) => state.demandGenerateCreate);
   const {loading : loadingGenerateCreate, error : errorGenerateCreate,success,   demand_generate } = demandGenerateCreate;
   // console.log(demand_lists + " Location of Abia LGA is the user")


   const demandSpecificCreate = useSelector((state) => state.demandSpecificCreate);
   const {loading : loadingSpecificCreate, error : errorSpecificCreate,success : success_Specific,   demand_specific } = demandSpecificCreate;
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
 
      setLgaKey(e.target.value);
      dispatch(demandCategoryDetailsAction(lgaKey));
    
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

// window.location.reload(false)
   // navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);

// setTimeout(() => {
  
//    navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
//  }, 3000);

  
   
};
const submitSpecificHandler = (e) => {
   e.preventDefault();
   dispatch(
      demandSpecificCreateAction(
         payerPhoneNumber,
         payerFirstName,
         payerLastName,
         payerABBSIN,
         payerHomeAddress,
         payerEmail,
       lgaKey,
       demandNoticeCategoryId,
      Number (numberOfEntriesToGenerate),
       
       )
       
    );
    dispatch({
      type:DEMAND_SPECIFIC_CREATE_RESET
   });

    
//      setTimeout(() => {

     
  
//    //  navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
//   }, 1000);


   

    if (!errorSpecificCreate) {
       
       setShowModalSpecific(false);
   } else {
      
    }

   
};
const submitSpecificHandler2 = (e) => {
   e.preventDefault();
   dispatch(
      demandSpecificCreateAction(
         // demand_specific?.payerEntityRecord?._id,
         payerPhoneNumber,
         payerFirstName,
         payerLastName,
         payerABBSIN,
         payerHomeAddress,
         payerEmail,
       lgaKey,
       demandNoticeCategoryId,
      // Number (numberOfEntriesToGenerate),
       
       )
       
    );
    
    dispatch({
      type:DEMAND_SPECIFIC_CREATE_RESET
   });
    


   

    if (!errorSpecificCreate) {
       
       setShowModalSpecific(false);
   } else {
      
    }

   
};

if (success) {
   navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
  
   }

if (demand_specific?.successful) {
 
   navigate(`/demand-notices/specific/${demand_specific?.demandNoticeGenerated?.demandNotice._id}`);
   // dispatch({
   //    type:DEMAND_SPECIFIC_CREATE_RESET
   // });
} 
// if (demand_specific?.successful) {
 
//    navigate(`/demand-notices/specific/${demand_specific?.demandNoticeGenerated?.demandNotice._id}`);
//    dispatch({
//       type:DEMAND_SPECIFIC_CREATE_RESET
//    });
// } 

// if (demand_specific?.successful) {
//    navigate(`/demand-notices/specific/${demand_specific?.demandNoticeGenerated?.demandNotice._id}`);
  
//  } else {
//    console.log(demand_specific?.message + " Message ")
//    dispatch({
//       type:DEMAND_GENERATE_CREATE_RESET
//    });
// }
   
   if (success_Specific) {
      // navigate(`/demand-notices/specific/${demand_specific?.demandNoticeGenerated?.demandNotice._id}`);
      console.log(' 22 +++++++++++++++++++++++++++++++ message here +++++++++++++++++++++++++++++')
      setTimeout(() => {
         setShowModalPayerData(true);
  
            //  navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
          }, 1000);
   } 

// setTimeout(() => {
  
//    //  navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
//  }, 1000);
   
 
//    if (success_Specific && demand_specific?.demandNoticeGenerated?.demandNotice._id) {
//       navigate(`/demand-notices/specific/${demand_specific?.demandNoticeGenerated?.demandNotice._id}`);
//       setTimeout(() => {
  
//             //  navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
//           }, 1000);
  
// }
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
 const showList = () => {
  navigate('/demand-notices/batches')
   
};
   useEffect(() => {

      dispatch(listStates())
      dispatch(listLocations(selectedState))
            dispatch(getUserDetails('profile'));
            dispatch(listDemandSpecificLists());
            dispatch(listDemandGenerateLists());
            dispatch(demandCategoryDetailsAction(lgaKey));
            dispatch({
               type:DEMAND_GENERATE_CREATE_RESET
            });
           
            if (success_Specific) {
               setPayerFirstName(demand_specific.payerEntityRecord.firstName)
               setPayerLastName(demand_specific.payerEntityRecord.lastName)
               setPayerEmail(demand_specific.payerEntityRecord.email)
               setPayerPhoneNumber(demand_specific.payerEntityRecord.phoneNumber)
               setPayerABBSIN(demand_specific.payerEntityRecord.abbsin)
               setPayerHomeAddress(demand_specific.payerEntityRecord.homeAddress)
               
            } 

       dispatch({
      type:DEMAND_SPECIFIC_CREATE_RESET
   });
    
         
      
      
   }, [dispatch,lgaKey,selectedState,success_Specific]);
   // useEffect(() => {
     
   //    navigate(`/demand-notices/${demand_generate?.demandNoticesList[0].demandNoticeBatchId}`);
      
   // }, [demand_generate]);

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
                                   <h5> Generate Demand Modules </h5>
                                   <Link to='/demand_module'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>


                        <div className="flex justify-between py-4 px-6 text-xl">
                                  <div></div> 
                        <button onClick={showList} type="button" class="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300  rounded-md text-sm px-6 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-600">Batch List</button>
                        
                                  
                                   
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
                                             {errorSpecificCreate}
                                          </Message>
                                       )} */}
                                       <form
                                         //  onSubmit={submitHandler}
                                          class="space-y-6 px-4 md:p-0"
                                       >
                                            

                                          <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">
                                                Multiple Demand Notice
                                             </h5>   
                                             

<label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>

<select value={selectedState} onChange={event => setSelectedState(event.target.value)}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select State</option>
                    
                                          { stateNames?.map((state, index) => (

<option key={state.value} value={state.stateKey}>{state.stateName}</option>
//                                           
                                          
                                          ))}
</select>




                                       <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>

<select value={lgaKey} onChange={handleChangeLga}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select LGA</option>
                    
                                          { locations?.map((lga, index) => (

<option key={lga.value} value={lga.lgaKey}>{lga.lgaName}</option>
//                                           
                                          
                                          ))}
</select>

                                       
<label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select onChange={handleChangeDemandNoticeCategoryId} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select Category</option>


                                          
                                          {demand_category === 'undefined' ? null : demand_category?.data?.demandNoticeCategories.map((demand_notice_category, index) => (

<option key={demand_notice_category._id} value={demand_notice_category._id}>{demand_notice_category.categoryName}</option>
//                                           
                                          
                                          ))
                                             }
 
</select>
                    <div className=''>
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                        <input onChange={handleChangeNumbers} type="number" name="number" id="password" placeholder="input Quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
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
                                 </div>
                              </div>
                           ) : null}
                      {showModalPayerData ? (
                            <div
                            // onClick={handleClose}
                            tabindex="-1"
                            class="flex  justify-center  bg-[rgb(0,0,0,0.35)] align-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                         >
                            <div class="relative ml-0  md:ml-24  w-full max-w-4xl h-full md:h-auto">
                            <div>
                            
                                       </div>
                               
                               <div class="">
                                   
                                  <div class=" max-w-4xl bg-white mt-20 ml-0 p-4 md:ml-24 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
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

                                 {errorSpecificCreate ? (<Message >
                                           {errorSpecificCreate}
                                        </Message> ): null}
                                     





<form>
<h5 class="text-xl  text-center font-medium text-gray-900 dark:text-white">
                                            Regenerate Specific Demand Notice
                                       </h5>
                                       <p className='px-6 py-4 my-4 bg-blue-500 text-center text-white rounded-md'>{ showModalPayerData ? message : null}</p>
 <div class="grid gap-6 mb-6 md:grid-cols-2">
     <div>
     <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                             <input value={payerFirstName} onChange={(e) => setPayerFirstName(e.target.value)} type="text" name="text" id="text" placeholder="First Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                 
     </div>
     <div>
     <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                     <input value={payerLastName} onChange={(e) => setPayerLastName(e.target.value)} type="text" name="text" id="text" placeholder="Last Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required ></input>
                 
     </div>
     
                                       <div>
                                       <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>

<select value={selectedState} onChange={event => setSelectedState(event.target.value)}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                       <option selected>Select State</option>
                 
                                       { stateNames?.map((state, index) => (

<option key={state.value} value={state.stateKey}>{state.stateName}</option>
//                                           
                                       
                                       ))}
</select>
</div>






     <div>
     <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
     <select value={lgaKey} onChange={handleChangeLga}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                       <option selected>Select LGA</option>
                 
                                       { locations?.map((lga, index) => (

<option key={lga.value} value={lga.lgaKey}>{lga.lgaName}</option>
//                                           
                                       
                                       ))}
</select>
     </div>
                                       
     
     <div>
         <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABSSIN</label>
         <input value={payerABBSIN} onChange={(e) => setPayerABBSIN(e.target.value)} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="24500180045" required></input>
     </div>  
     <div>
     <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select onChange={handleChangeDemandNoticeCategoryId} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                       <option selected>Select Category</option>


                                       
                                       {demand_category === 'undefined' ? null : demand_category?.data?.demandNoticeCategories.map((demand_notice_category, index) => (

<option key={demand_notice_category._id} value={demand_notice_category._id}>{demand_notice_category.categoryName}</option>
//                                           
                                       
                                       ))
                                          }

</select>
     
     </div>  
     <div>
         <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
         <input value={payerPhoneNumber} onChange={(e) => setPayerPhoneNumber(e.target.value)} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="07034564908" pattern="[0-9]{11}" required></input>
                                       </div>
                                       
      <div>
     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
     <input value={payerEmail} onChange={(e) => setPayerEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="john.doe@gmail.com" ></input>
 
     </div>                                   
     
     
     
 </div><div>
     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
     <input value={payerHomeAddress} onChange={(e) => setPayerHomeAddress(e.target.value)} type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Address" required ></input>
 
     </div>
  
 
 
                                    <div className='flex justify-center items-center mt-8'>
                                    <button
                                             onClick={submitSpecificHandler2}
                                             type="submit"
                                             class="w-1/3 text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
                                          >
                                             Regenerate 
                                          </button>      
</div>
 
 
 
</form>




                                 
                                     <form
                                       //  onSubmit={submitHandler}
                                        class="space-y-6 px-4 md:p-0"
                                     >

                                        
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
                   
                 
                 </div>

                                 

                
                                         
                                          

                                          
                                         

                                         
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
                               <div class="relative ml-0  md:ml-24  w-full max-w-4xl h-full md:h-auto">
                               <div>
                               
                                          </div>
                                  
                                  <div class="">
                                      
                                     <div class=" max-w-4xl bg-white mt-20 ml-0 p-4 md:ml-24 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
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

                                    {errorSpecificCreate ? (<Message >
                                              {errorSpecificCreate}
                                           </Message> ): null}
                                        





<form>
<h5 class="text-xl mb-8 text-center font-medium text-gray-900 dark:text-white">
                                                Specific Demand Notice
                                             </h5>  
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input onChange={(e) => setPayerFirstName(e.target.value)} type="text" name="text" id="text" placeholder="First Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                    
        </div>
        <div>
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input onChange={(e) => setPayerLastName(e.target.value)} type="text" name="text" id="text" placeholder="Last Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required ></input>
                    
        </div>
        
                                          <div>
                                          <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>

<select value={selectedState} onChange={event => setSelectedState(event.target.value)}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select State</option>
                    
                                          { stateNames?.map((state, index) => (

<option key={state.value} value={state.stateKey}>{state.stateName}</option>
//                                           
                                          
                                          ))}
</select>
</div>






        <div>
        <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
        <select value={lgaKey} onChange={handleChangeLga}  id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select LGA</option>
                    
                                          { locations?.map((lga, index) => (

<option key={lga.value} value={lga.lgaKey}>{lga.lgaName}</option>
//                                           
                                          
                                          ))}
</select>
        </div>
                                          
        
        <div>
            <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABSSIN</label>
            <input onChange={(e) => setPayerABBSIN(e.target.value)} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="24500180045" required></input>
        </div>  
        <div>
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select onChange={handleChangeDemandNoticeCategoryId} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                          <option selected>Select Category</option>


                                          
                                          {demand_category === 'undefined' ? null : demand_category?.data?.demandNoticeCategories.map((demand_notice_category, index) => (

<option key={demand_notice_category._id} value={demand_notice_category._id}>{demand_notice_category.categoryName}</option>
//                                           
                                          
                                          ))
                                             }
 
</select>
        
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input onChange={(e) => setPayerPhoneNumber(e.target.value)} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="07034564908" pattern="[0-9]{11}" required></input>
                                          </div>
                                          
         <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input onChange={(e) => setPayerEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="john.doe@gmail.com" ></input>
    
        </div>                                   
        
        
        
    </div><div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
        <input onChange={(e) => setPayerHomeAddress(e.target.value)} type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Address" required ></input>
    
        </div>
     
    
    
                                       <div className='flex justify-center items-center mt-8'>
                                       <button
                                                onClick={submitSpecificHandler}
                                                type="submit"
                                                class="w-1/3 text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
                                             >
                                                Generate
                                             </button>      
  </div>
    
    
    
</form>




                                    
                                        <form
                                          //  onSubmit={submitHandler}
                                           class="space-y-6 px-4 md:p-0"
                                        >

                                           
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
                      
                    
                    </div>

                                    

                   
                                            
                                             

                                             
                                            

                                            
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ) : null}
                      <div class="mx-12 mt-2 md:mt-4 grid grid-cols-2 h-32 md:grid-cols-2 lg:grid-cols-2 px-5 xl:p-0 gap-4 xl:gap-6">
                         
                        
                          
                        
                      <button onClick={showHandlerMultiple}>
                        <div class="bg-white  p-6 shadow-lg text-gray-700  hover:bg-green-600 hover:text-white ease-out rounded-xl border border-gray-50">
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
                        </button> 
                        


                        
                        <button onClick={showHandlerSpecific}>
                        <div class="bg-white  p-6 shadow-lg text-gray-700 hover:bg-green-600 hover:text-white ease-out rounded-xl border border-gray-50">
                              <div >
                                 <div class="flex justify-center aligns-center hover:text-white ">
                                    <svg className='h-16 w-16 text-center  'fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
</svg>
                                 </div>
                                 <p class="text-lg text-center  font-bold  tracking-wide">
                                       Specific
                               </p>
                              </div>
                           </div>
                        </button> 
                        
                        
                        
                      
                        
                           
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

export default DemandSelectionScreen;
