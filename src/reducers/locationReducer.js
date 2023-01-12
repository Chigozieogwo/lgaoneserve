import {
    
   
    LOCATION_LIST_REQUEST,
    LOCATION_LIST_SUCCESS,
    LOCATION_LIST_FAIL,
    
 } from '../constants/locationConstants.js';
 
 
 

 
 export const locationListReducer = (state = { locations: [] }, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case LOCATION_LIST_REQUEST:
          return { loading: true };
       case LOCATION_LIST_SUCCESS:
          return {
             loading: false,
             locations: action.payload,
             count: action.payload,
             pages: action.payload,
             page: action.payload
          };
       case LOCATION_LIST_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };