import {
    
    DEMAND_GENERATE_CREATE_REQUEST,
    DEMAND_GENERATE_CREATE_SUCCESS,
    DEMAND_GENERATE_CREATE_FAIL,
   DEMAND_GENERATE_CREATE_RESET,
    
    DEMAND_GENERATE_LIST_RESET,
    DEMAND_GENERATE_LIST_FAIL,
    DEMAND_GENERATE_LIST_SUCCESS,
    DEMAND_GENERATE_LIST_REQUEST,
 
    DEMAND_GENERATE_DOWNLOAD_RESET,
    DEMAND_GENERATE_DOWNLOAD_FAIL,
    DEMAND_GENERATE_DOWNLOAD_SUCCESS,
    DEMAND_GENERATE_DOWNLOAD_REQUEST,

    DEMAND_GENERATE_BATCH_RESET,
    DEMAND_GENERATE_BATCH_FAIL,
    DEMAND_GENERATE_BATCH_SUCCESS,
    DEMAND_GENERATE_BATCH_REQUEST,
    
 } from '../constants/demandGenerateConstants.js';
 
 
 
 
 
 export const demandGenerateCreateReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_GENERATE_CREATE_REQUEST:
          return { loading: true };
       case DEMAND_GENERATE_CREATE_SUCCESS:
          return { loading: false, demand_generate: action.payload, success: true };
       case DEMAND_GENERATE_CREATE_RESET:
         return {demand_generate: {} };
       case DEMAND_GENERATE_CREATE_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 
 
 
 export const demandGenerateDownloadReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_GENERATE_DOWNLOAD_REQUEST:
          return { ...state, loading: true };
       case DEMAND_GENERATE_DOWNLOAD_SUCCESS:
          if (action.payload === undefined) {
             action.payload = {};
          }
          return { loading: false, demand_download: action.payload,successDownload: true };
 
       case DEMAND_GENERATE_DOWNLOAD_FAIL:
          return { loading: false, error: action.payload };
       case DEMAND_GENERATE_DOWNLOAD_RESET:
          return { demand_download: {} };
       default:
          return state;
    }
 };
 
 export const demandGenerateBatchReducer = (state = { demand_batchs: [] }, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_GENERATE_BATCH_REQUEST:
          return { loading: true };
       case DEMAND_GENERATE_BATCH_SUCCESS:
          return {
             loading: false,
             demand_batchs: action.payload,
             success: true
            //  count: action.payload,
            //  pages: action.payload,
            //  page: action.payload
          };
       case DEMAND_GENERATE_BATCH_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 export const demandGenerateListReducer = (state = { demand_lists: [] }, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case DEMAND_GENERATE_LIST_REQUEST:
          return { loading: true };
       case DEMAND_GENERATE_LIST_SUCCESS:
          return {
             loading: false,
             demand_lists: action.payload,
             count: action.payload,
             pages: action.payload,
             page: action.payload
          };
       case DEMAND_GENERATE_LIST_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 