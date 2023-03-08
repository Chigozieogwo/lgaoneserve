/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";
import {listLocations } from '../actions/locationActions';
import "react-datepicker/dist/react-datepicker.css";
import { REVENUE_UPDATE_RESET } from '../constants/revenueConstants';
import Sidebar from '../components/Sidebar';

import {
    listRevenues,
    revenueDetailsAction,
    revenueDeleteAction,
    updateRevenueAction
 } from '../actions/revenueActions.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate ,useParams } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const RevenueEditScreen = ({ match }) => {
    const revenueLineCode2 = useParams();
    const [revenueLineName, setRevenueLineName] = useState('');
    const [lgaKey, setLgaKey] = useState('');
    // const [revenueLineCode3, setRevenueLineCode3] = useState(revenueLineCode2.revenueLineCode);
    const [revenueLineAmount, setRevenueLineAmount] = useState(0);
    const [revenueLineFrequency, setRevenueLineFrequency] = useState('');
    
    const [lgaFilter, setLgaFilter] = useState('');
    const [lgaCode, setLgaCode] = useState('00');



   console.log( JSON.stringify(revenueLineCode2)+ " revenueLineCode2")
//    console.log( revenueLineCode2[0].revenueLineCode + " revenueLineCode2")
//    console.log( revenueLineCode2.revenueLineCode + " revenueLineCode2")
   console.log( revenueLineCode2.revenueLineCode + " revenueLineCode2")
//    console.log( revenueLineCode2 + " revenueLineCode2")


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
   
   

   // console.log(locations + " 333  All LGA of Abia LGA is the user")
 

   const revenueDetails = useSelector((state) => state.revenueDetails);
   const { loading : loadingRevenue, error:errorRevenue, revenue } = revenueDetails;

  const revenueList = useSelector((state) => state.revenueList);

  const { loading:loadingList, error:errorList, revenues, page, pages, count } = revenueList;
  console.log(revenues);


 const revenueUpdate = useSelector((state) => state.revenueUpdate);
   const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate
     
   } = revenueUpdate;

//    setTimeout(() =>{
//     dispatch(revenueDetailsAction(revenueLineCode2));

// },1000)
   useEffect(() => {
    //   dispatch(listLocations());
    //    if(!revenue){
    //     dispatch({ type: REVENUE_UPDATE_RESET });
    //     dispatch(revenueDetailsAction(revenueLineCode2));
    //    }else {
    //        if (successUpdate){
    //         dispatch({ type: REVENUE_UPDATE_RESET });
    //         navigate(`/revenuelines/${revenueLineCode2.revenueLineCode}/edit`);  
    //        }else {
    //         setRevenueLineName(revenue.revenueLineName);
    //         setLgaKey(revenue.lgaKey);
    //         setRevenueLineAmount(revenue.revenueLineAmount);
    //         setRevenueLineFrequency(revenue.revenueLineFrequency);  
    //        }
    //    }
    // setRevenueLineCode3(revenueLineCode2.revenueLineCode)
    // dispatch(revenueDetailsAction(revenueLineCode2));
        if (successUpdate) {
         dispatch({ type: REVENUE_UPDATE_RESET });
        
         navigate(`/revenuelines/${revenueLineCode2.revenueLineCode}/edit`);
      } else {
         if (!revenue  ) {
            
            dispatch(revenueDetailsAction(revenueLineCode2));
         } else {
            setRevenueLineName(revenue.revenueLineName);
            setLgaKey(revenue.lgaKey);
            setRevenueLineAmount(revenue.revenueLineAmount);
            setRevenueLineFrequency(revenue.revenueLineFrequency);
         
         }
      }
   }, [dispatch, revenueLineCode2,revenue,successUpdate]);

   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(
        updateRevenueAction({
            revenueLineCode : revenueLineCode2.revenueLineCode,
            revenueLineName,
            lgaKey,
            revenueLineAmount : Number(revenueLineAmount),
            revenueLineFrequency
            // toDisplay
         })
      );
      console.log( revenueLineCode2.revenueLineCode + 'new revenueLineCode,')
      console.log( revenueLineName + 'revenueLineName,')
      console.log( revenueLineAmount + 'revenueLineAmount,')
      console.log( revenueLineFrequency + 'revenueLineFrequency,')
   };

//  useEffect(() => {
//     if(lgaFilter) {
//        dispatch(listRevenues(lgaFilter));}
//     // deactivate()
//  }, [dispatch,lgaFilter]);

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
                                   <h5> </h5>
                                   <Link to='/revenue'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
                                        <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
</svg> 
</div>

                                   </Link>
                                  
                                   
                        </div>
                      </div>
                    


                      
                      <div class=" max-w-2xl bg-white -mt-20 mx-auto p-4  rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-600 dark:border-gray-700">
                                    
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
                                          Edit  Revenue Code Details
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
                  <input 
                   value={revenueLineName}
                   onChange={(e) =>
                      setRevenueLineName(
                         e.target.value
                      )
                   }
                   type="text" name="text" id="text" placeholder="Enter Category Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
              </div>
              {/* <div>
              <label for="lga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Govt. Area</label>
<select 
value={lgaKey}
// onChange={(e) =>
// setLgaKey(
//    e.target.value
// )
// }
id="lga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                       <option selected>Select LGA</option>
                                       
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
<option  value="umuhaia-south-lga-abia-state-nigeria">Umuahia South</option> */}


                                       {/* { locations?.map((location, index) => (

<option key={location._id} value={location.lgaKey}>{location.lgaName}</option>
//                                           
                                       
                                       ))} */}
{/* </select>
              </div> */}
              
             
            
             

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
<select value={revenueLineFrequency}
                   onChange={(e) =>
                      setRevenueLineFrequency(
                         e.target.value
                      )
                   } id="frequency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
<option selected>Select Payment Frequency</option>
<option value="yearly">Yearly</option>
<option value="monthly">Monthly</option>
<option value="daily">Daily</option>

                                                 </select>
                                      </div>
                                                 
                                                 <div>
                  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                  <input value={revenueLineAmount}
                   onChange={(e) =>
                      setRevenueLineAmount(
                         e.target.value
                      )
                   } type="number"  placeholder="Enter Amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
              </div>
             
                                      
                                       

                                       
                                      

                                       <button
                                          onClick={submitHandler}
                                          type="submit"
                                          class="w-full text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
                                       >
                                          Edit Revenue
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

export default RevenueEditScreen;
