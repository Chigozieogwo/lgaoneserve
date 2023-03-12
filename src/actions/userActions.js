import axios from 'axios';
import {
   USER_LOGIN_FAIL,
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGOUT,
   USER_DETAILS_FAIL,
   USER_DETAILS_REQUEST,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_RESET,
   USER_TENANCY_REGISTER_FAIL,
    USER_TENANCY_REGISTER_REQUEST,
    USER_TENANCY_REGISTER_SUCCESS,
  
   USER_UPDATE_TENANCY_PROFILE_FAIL,
   USER_UPDATE_TENANCY_PROFILE_REQUEST,
   USER_UPDATE_TENANCY_PROFILE_SUCCESS,

    USER_TENANCY_PROFILE_DETAILS_FAIL,
    USER_TENANCY_PROFILE_DETAILS_REQUEST,
    USER_TENANCY_PROFILE_DETAILS_SUCCESS,
   USER_TENANCY_PROFILE_DETAILS_RESET,
   TENANT_DASHBOARD_DETAILS_FAIL,
   TENANT_DASHBOARD_DETAILS_REQUEST,
   TENANT_DASHBOARD_DETAILS_SUCCESS,
   TENANT_DASHBOARD_DETAILS_RESET,
   
} from '../constants/userConstants.js';
// import moment from 'moment';
import url2 from '../utils/baseUrl.js'
// require('dotenv').config()


 let url = process.env.REACT_APP_BASE_URL;

//  let url = "";

// if (process.env.NODE_ENV === 'production'){
//   url = process.env.REACT_APP_BASE_URL
//  console.log("production")
// }else {
//    url = process.env.REACT_APP_DEV
//    console.log("development")
// }

export const login = (email, password) => async (dispatch) => {
   try {
      dispatch({
         type: USER_LOGIN_REQUEST
      });

      const config = {
         headers: {
              'Content-Type': 'application/json',
           
         }
      };

    
      const { data } = await axios.post(`${url}/users/login`,
       { email, password },
       config);
     

      dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: data
      });

      localStorage.setItem('userInfo', JSON.stringify(data));

      
   } catch (error) {
      dispatch({
         type: USER_LOGIN_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};


export const getUserDetails = () => async (dispatch, getState) => {
    try {
       dispatch({
          type: USER_DETAILS_REQUEST
       });
 
       const { userLogin: { userInfo }} = getState();
    

        console.log(userInfo.firstName + " Action userinfo")
        console.log(userInfo.lastName + " Action userinfo")
       

       const config = {
          headers: {
             Authorization: `Bearer ${userInfo.accessToken}`
          }
       };
        // const url = 'https://billable-dev.herokuapp.com'
        
       const { data } = await axios.get(`${url}/users/myprofile`, config);
    //    const { data } = await axios.get(`/users/dashboard/${id}`, config);
    //    console.log(JSON.stringify(data) + '2++++++2');
    //    console.log(JSON.stringify(data) + '++++++')
    //    console.log(JSON.stringify(data) + '++++++')
       dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: data
       });
    } catch (error) {
       const message =
          error.response && error.response.data.message
             ? error.response.data.message
             : error.message;
       if (message === 'Not authorized, token failed') {
          dispatch(logout());
       }
       dispatch({
          type: USER_DETAILS_FAIL,
          payload: message
       });
    }
 };
export const getTenantDashboardDetails = (id) => async (dispatch, getState) => {
    try {
       dispatch({
          type: TENANT_DASHBOARD_DETAILS_REQUEST
       });
 
       const { userLogin: { userInfo }} = getState();
    

        console.log(userInfo.firstName + " Action userinfo")
        console.log(userInfo.lastName + " Action userinfo")
       

       const config = {
          headers: {
             Authorization: `Bearer ${userInfo.accessToken}`
          }
       };
        // const url = 'https://billable-dev.herokuapp.com'
        
       const { data } = await axios.get(`${url}/tenants/t/${id}`, config);
    //    const { data } = await axios.get(`/users/dashboard/${id}`, config);
    //    console.log(JSON.stringify(data) + '2++++++2');
    //    console.log(JSON.stringify(data) + '++++++')
    //    console.log(JSON.stringify(data) + '++++++')
       dispatch({
          type: TENANT_DASHBOARD_DETAILS_SUCCESS,
          payload: data
       });

       localStorage.setItem('tenant', JSON.stringify(data));
    } catch (error) {
       const message =
          error.response && error.response.data.message
             ? error.response.data.message
             : error.message;
       if (message === 'Not authorized, token failed') {
          dispatch(logout());
       }
       dispatch({
          type: TENANT_DASHBOARD_DETAILS_FAIL,
          payload: message
       });
    }
 };

export const getUserTenancyDetails = () => async (dispatch, getState) => {
    try {
       dispatch({
          type: USER_TENANCY_PROFILE_DETAILS_REQUEST
       });
 
       const { userLogin: { userInfo } } = getState();

       const { userTenancyProfile: { userInfoTenancy }} = getState();

      //  console.log(userInfoTenancy + "tenant Action userinfo")
      //  console.log(userInfoTenancy?.myTenants[0]?.name + "tenant Action userinfo")
      //  console.log(userInfoTenancy?.myTenants[0]?.name + "tenant Action userinfo")

      //   console.log(userInfo.firstName + " Action userinfo")
      //   console.log(userInfo.lastName + " Action userinfo")
       

       const config = {
          headers: {
             Authorization: `Bearer ${userInfo.accessToken}`
            //  tenantId : `${userInfo._id}`

          }
       };
        // const url = 'https://billable-dev.herokuapp.com'
        
       const { data } = await axios.get(`${url}/tenants/myprofiles`, config);
    //    const { data } = await axios.get(`/users/dashboard/${id}`, config);
   //  people.filter((person) => person.age > 40)
       
      //  const profileTenant = data.filter((userProfileId) => userProfileId.ownerUserId === userInfo._id)
      //  console.log(JSON.stringify(profileTenant) + '2++++++2');
      //  console.log(JSON.stringify(profileTenant) + '2++++++2');
       console.log(JSON.stringify(data) + '++++++')
       console.log(JSON.stringify(data) + '++++++')

       dispatch({
          type: USER_TENANCY_PROFILE_DETAILS_SUCCESS,
          payload: data
       });

       localStorage.setItem('userInfoTenancy', JSON.stringify(data));


    } catch (error) {
       const message =
          error.response && error.response.data.message
             ? error.response.data.message
             : error.message;
       if (message === 'Not authorized, token failed') {
          dispatch(logout());
       }
       dispatch({
          type: USER_TENANCY_PROFILE_DETAILS_FAIL,
          payload: message
       });
    }
 };


 export const registerTenancy = (ownerEmail,ownerFirstName, ownerLastName,ownerPassword,tenantName,tenantAbout) => async (dispatch) => {
   try {
     dispatch({
       type: USER_TENANCY_REGISTER_REQUEST,
     })
 
     const config = {
       headers: {
         'Content-Type': 'application/json',
       },
     }
 
     const { data } = await axios.post(
      `${url}/tenants`,
       { ownerEmail,ownerFirstName, ownerLastName,ownerPassword,tenantName,tenantAbout },
       config
     )
 
     dispatch({
       type: USER_TENANCY_REGISTER_SUCCESS,
       payload: data,
     })
 
   //   dispatch({
   //     type: USER_LOGIN_SUCCESS,
   //     payload: data,
   //   })
 
   //   localStorage.setItem('userInfo', JSON.stringify(data))
   } catch (error) {
     dispatch({
       type: USER_TENANCY_REGISTER_FAIL,
       payload:
         error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
     })
   }
 }



















 export const updateUserProfileMe = (user) => async (dispatch, getState) => {
   try {
     dispatch({
       type: USER_UPDATE_TENANCY_PROFILE_REQUEST,
     })
 
     const {
       userLogin: { userInfo },
     } = getState()
 
     const config = {
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${userInfo.token}`,
       },
     }
 
     const { data } = await axios.put(`/api/users/profile`, user, config)
 
     dispatch({
       type: USER_UPDATE_TENANCY_PROFILE_SUCCESS,
       payload: data,
     })
     // dispatch({
     //   type: USER_LOGIN_SUCCESS,
     //   payload: data,
     // })
     // localStorage.setItem('userInfo', JSON.stringify(data))
   } catch (error) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message
     if (message === 'Not authorized, token failed') {
       dispatch(logout())
     }
     dispatch({
       type: USER_UPDATE_TENANCY_PROFILE_FAIL,
       payload: message,
     })
   }
 }










 export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userInfoTenancy');
    localStorage.removeItem('tenant');
 
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
 
    // dispatch({ type: USER_LIST_RESET });
    document.location.href = '/';
 };