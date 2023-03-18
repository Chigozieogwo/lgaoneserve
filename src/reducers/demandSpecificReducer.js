import {
    
    DEMAND_SPECIFIC_CREATE_REQUEST,
    DEMAND_SPECIFIC_CREATE_SUCCESS,
    DEMAND_SPECIFIC_CREATE_FAIL,
   DEMAND_SPECIFIC_CREATE_RESET,
    
    DEMAND_SPECIFIC_LIST_RESET,
    DEMAND_SPECIFIC_LIST_FAIL,
    DEMAND_SPECIFIC_LIST_SUCCESS,
    DEMAND_SPECIFIC_LIST_REQUEST,
 
    DEMAND_SPECIFIC_DOWNLOAD_RESET,
    DEMAND_SPECIFIC_DOWNLOAD_FAIL,
    DEMAND_SPECIFIC_DOWNLOAD_SUCCESS,
    DEMAND_SPECIFIC_DOWNLOAD_REQUEST,

    DEMAND_SPECIFIC_BATCH_RESET,
    DEMAND_SPECIFIC_BATCH_FAIL,
    DEMAND_SPECIFIC_BATCH_SUCCESS,
    DEMAND_SPECIFIC_BATCH_REQUEST,
    
 } from '../constants/demandSpecificConstants.js';
 
 
 
 
 
 export const demandSpecificCreateReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_SPECIFIC_CREATE_REQUEST:
          return { loading: true };
       case DEMAND_SPECIFIC_CREATE_SUCCESS:
          return { loading: false, demand_specific: action.payload, success: true };
       case DEMAND_SPECIFIC_CREATE_RESET:
         return {demand_specific: {} };
       case DEMAND_SPECIFIC_CREATE_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 
 
 
 export const demandSpecificDownloadReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_SPECIFIC_DOWNLOAD_REQUEST:
          return { ...state, loading: true };
       case DEMAND_SPECIFIC_DOWNLOAD_SUCCESS:
          if (action.payload === undefined) {
             action.payload = {};
          }
          return { loading: false, demand_downloadSpecific: action.payload,successDownload: true };
 
       case DEMAND_SPECIFIC_DOWNLOAD_FAIL:
          return { loading: false, error: action.payload };
       case DEMAND_SPECIFIC_DOWNLOAD_RESET:
          return { demand_downloadSpecific: {} };
       default:
          return state;
    }
 };
 
 export const demandSpecificBatchReducer = (state = { demand_Specificbatchs: {} }, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_SPECIFIC_BATCH_REQUEST:
          return { loading: true };
       case DEMAND_SPECIFIC_BATCH_SUCCESS:
          return {
             loading: false,
             demand_Specificbatchs: action.payload,
             success: true
            //  count: action.payload,
            //  pages: action.payload,
            //  page: action.payload
          };
       case DEMAND_SPECIFIC_BATCH_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 export const demandSpecificListReducer = (state = { demand_Specificlists: [] }, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_SPECIFIC_LIST_REQUEST:
          return {...state, loading: true };
       case DEMAND_SPECIFIC_LIST_SUCCESS:
          return {
             loading: false,
             demand_Specificlists: action.payload,
             count: action.payload,
             pages: action.payload,
             page: action.payload
            //  success: true,
          };
       case DEMAND_SPECIFIC_LIST_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 

//  export const demandGenerateListReducer = (state = { demand_lists: [] }, action) => {
//    //   const { type, payload } = action
//    switch (action.type) {
//       case DEMAND_GENERATE_LIST_REQUEST:
//          return { loading: true };
//       case DEMAND_GENERATE_LIST_SUCCESS:
//          return {
//             loading: false,
//             demand_lists: action.payload,
//             count: action.payload,
//             pages: action.payload,
//             page: action.payload
//          };
//       case DEMAND_GENERATE_LIST_FAIL:
//          return { loading: false, error: action.payload };
//       default:
//          return state;
//    }
// };