import {
    
    CREATE_DEMAND_FAIL,
    CREATE_DEMAND_REQUEST,
    CREATE_DEMAND_SUCCESS,
    CREATE_DEMAND_RESET,

    
    
 } from '../constants/demandConstants.js';



 export const demandCreateReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case CREATE_DEMAND_REQUEST:
          return { loading: true };
       case CREATE_DEMAND_SUCCESS:
          return { loading: false, deposit: action.payload, success: true };
       case CREATE_DEMAND_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };