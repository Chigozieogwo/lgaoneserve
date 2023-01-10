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
   
} from '../constants/userConstants.js';
// import moment from 'moment';
import url from '../utils/baseUrl.js'

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


    //    const url ='https://billable-dev.herokuapp.com'
    //    const BASE_URL = process.env.REACT_APP_BASE_URL;

      const { data } = await axios.post(
         `${url}/users/login`,
         { email, password },
         config
      );

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
    

        console.log(userInfo.email + " Action userinfo")
        console.log(userInfo.accessToken + " Action userinfo")
       

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

 export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
 
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
 
    // dispatch({ type: USER_LIST_RESET });
    document.location.href = '/';
 };