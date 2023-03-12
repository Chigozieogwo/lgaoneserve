/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';

import Sidebar from '../components/Sidebar';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails,getUserTenancyDetails,getTenantDashboardDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { ReactComponent as DateIcon } from '../images/date.svg';


const TenancyProfileScreen = ({ match }) => {
   
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);


   const userTenancyProfile = useSelector((state) => state.userTenancyProfile);


   const { userInfo } = userLogin;

      
   const { userInfoTenancy  } = userTenancyProfile;

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;


  console.log(JSON.stringify(userInfoTenancy) + " 90 here is the user")
//   console.log(userInfo + " 90 here is the user")
//   console.log(userInfoTenancy + " Tenancy main here is the user")
//   console.log(userInfoTenancy + " Tenancy main here is the user")
//    console.log(user.firstName + " 55 here is the user")
   
   console.log(userInfoTenancy + " 212 main here is the user")
  console.log(userInfoTenancy?.myTenants[0]?.name + " 100555 here is the user")
  console.log(userInfoTenancy?.myTenants[1]?.name + " 100555 here is the user")
  console.log(userInfoTenancy?.myTenants[2]?.name + " 100555 here is the user")

   
   console.log(user.firstName + " 55 here is the user")
   

   // const submitHandler = (e) => {
   //    e.preventDefault();
   //    dispatch(demandCategoryCreateAction(
   //       categoryName,
   //       categoryDescription,
   //       lgaKey,
   //       revenueLineCodes
   //    ));
   // }
  
   useEffect(() => {
     
      if (!userInfo) {
         navigate('/');
      } else {
         //  dispatch(getUserDetails('profile'));
         if (!user || !user.firstName) {
            // dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails());
            dispatch(getUserTenancyDetails());
           
         }
      }
   }, [navigate, userInfo, user]);

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
                  <HeaderLog
                />
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                       <div>
                     <div className="flex items-center justify-center min-h-screen ">

                        <div className='py-8 px-3 bg-white rounded-sm w-4/5 md:w-2/5'>
                           <h4 className='font-bold text-2xl text-center  mx-6'>Welcome {userInfo.firstName}</h4>
                        <p className='text-xs text-gray-400 font-normal mb-4  text-center'>Select Appropriate Tenancy</p>
                                 
                           <div className='flex flex-col space-y-5 px-3 py-1'>

                           {userInfoTenancy?.myTenants.map((tenant) => (
        <Link key={tenant._id} onClick={() =>  dispatch(getTenantDashboardDetails(tenant._id))} to={`/dashboard/profile`}>
                                    
        <div className='group '>
  <div className='flex space-x-4 bg-green-50 rounded-md py-3 px-6 border border-gray-300 group-hover:cursor-pointer group-hover:border group-hover:border-green-400 group-hover:-translate-y-0.5 duration-150 transition-all shadow-md'>
     <div className='flex justify-center items-center p-4 bg-white w-16 h-16 rounded-full'>
     <h4 className='font-bold text-3xl text-center text-gray-700'>{tenant.name.toUpperCase().charAt(0)}{tenant.name.toUpperCase().slice(-1)}</h4>
     </div>
     <div className='flex justify-center items-center'>
     <div className='flex flex-col  space-y-1'>
                    <h4 className='font-bold text-lg text-left'>{tenant.name }</h4>
                    <p className='text-xs text-gray-400 font-medium   text-left'>{tenant.about }</p>
     
     </div>
     </div>
  </div>
  </div>
     </Link>
      ))}
                           
                                    
                              
                             
                           </div>

                        </div>
                        
                        {/* <div className='py-8 px-3 bg-white rounded-sm '>
                        <div className='flex space-x-4 p-4 group bg-green-50 rounded-md '>
                        
                        <div className='p-4 rounded-full bg-white group-hover:cursor-pointer group-hover:border  '>{userInfo.firstName.charAt(0)} {userInfo.firstName.slice(-1)} </div>
                              <div className='flex flex-col space-y-1'>
                                 <h4 className='font-bold text-2xl text-left'>Cisco Global</h4>
                                 <p className='text-xs text-gray-400 font-semibold mt-0.5  text-left'>Main Aluminuim Company</p>
                                 
                              </div>
                        </div>

                           
                        </div> */}
                     
                     </div>
                 </div>

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               </div>
               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               

               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            </div>
         </div>
      </>
   );
};

export default TenancyProfileScreen;
