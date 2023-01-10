import {
    
    LOCATION_DETAILS_FAIL,
    LOCATION_DETAILS_REQUEST,
    LOCATION_DETAILS_SUCCESS,
    LOCATION_DETAILS_RESET,

    
    
 } from '../constants/locationConstants.js';

 import axios from 'axios'
 import url from '../utils/baseUrl.js'

 export const locationDetailsAction = () => async (dispatch, getState) => {
    try {
       dispatch({ type: LOCATION_DETAILS_REQUEST });
 
       const {
          userLogin: { userInfo }
       } = getState();
 
       const config = {
          headers: {
             'Content-Type': 'application/json',
             Authorization: `Bearer ${userInfo.token}`
          }
       };
 
       const { data } = await axios.get(`/api/deposits/userdeposit`, config);
 
       dispatch({
          type: LOCATION_DETAILS_SUCCESS,
          payload: data
       });
       // localStorage.setItem('prediction_Details', JSON.stringify(fixture))
    } catch (error) {
       dispatch({
          type: LOCATION_DETAILS_FAIL,
          payload:
             error.response && error.response.data.message
                ? error.response.data.message
                : error.message
       });
    }
 };