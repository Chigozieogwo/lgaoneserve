import {
    
   
    LOCATION_LIST_REQUEST,
    LOCATION_LIST_SUCCESS,
   LOCATION_LIST_FAIL,


   STATE_CREATE_REQUEST,
   STATE_CREATE_SUCCESS,
   STATE_CREATE_FAIL,
   STATE_LIST_REQUEST,
   STATE_LIST_SUCCESS,
   STATE_LIST_FAIL,
   STATE_UPDATE_RESET,
   STATE_UPDATE_FAIL,
   STATE_UPDATE_SUCCESS,
   STATE_UPDATE_REQUEST,
   STATE_DETAILS_RESET,
   STATE_DETAILS_FAIL,
   STATE_DETAILS_SUCCESS,
   STATE_DETAILS_REQUEST,

   LGA_CREATE_REQUEST,
   LGA_CREATE_SUCCESS,
   LGA_CREATE_FAIL,
   LGA_LIST_REQUEST,
   LGA_LIST_SUCCESS,
   LGA_LIST_FAIL,
   LGA_UPDATE_RESET,
   LGA_UPDATE_FAIL,
   LGA_UPDATE_SUCCESS,
   LGA_UPDATE_REQUEST,
   LGA_DETAILS_RESET,
   LGA_DETAILS_FAIL,
   LGA_DETAILS_SUCCESS,
   LGA_DETAILS_REQUEST,
   
    
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




export const stateCreateReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case STATE_CREATE_REQUEST:
         return { loading: true };
      case STATE_CREATE_SUCCESS:
         return { loading: false, stateName: action.payload, success: true };
      case STATE_CREATE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const stateListReducer = (state = { stateNames: [] }, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case STATE_LIST_REQUEST:
         return { loading: true };
      case STATE_LIST_SUCCESS:
         return {
            loading: false,
            stateNames: action.payload,
            count: action.payload,
            pages: action.payload,
            page: action.payload
         };
      case STATE_LIST_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const stateDetailsReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case STATE_DETAILS_REQUEST:
         return { ...state, loading: true };
      case STATE_DETAILS_SUCCESS:
         if (action.payload === undefined) {
            action.payload = {};
         }
         return { loading: false, stateName: action.payload };

      case STATE_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      case STATE_DETAILS_RESET:
         return { stateName: {} };
      default:
         return state;
   }
};


export const stateUpdateReducer = (state = { stateName: {} }, action) => {
   switch (action.type) {
      case STATE_UPDATE_REQUEST:
         return { loading: true };
      case STATE_UPDATE_SUCCESS:
         return { loading: false, success: true, stateName: action.payload };
      case STATE_UPDATE_FAIL:
         return { loading: false, error: action.payload };
      case STATE_UPDATE_RESET:
         return { state: {} };
      default:
         return state;
   }
};





export const lgaCreateReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case LGA_CREATE_REQUEST:
         return { loading: true };
      case LGA_CREATE_SUCCESS:
         return { loading: false, lgaName: action.payload, success: true };
      case LGA_CREATE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const lgaListReducer = (state = { lgaNames: [] }, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case LGA_LIST_REQUEST:
         return { loading: true };
      case LGA_LIST_SUCCESS:
         return {
            loading: false,
            lgaNames: action.payload,
            count: action.payload,
            pages: action.payload,
            page: action.payload
         };
      case LGA_LIST_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const lgaDetailsReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case LGA_DETAILS_REQUEST:
         return { ...state, loading: true };
      case LGA_DETAILS_SUCCESS:
         if (action.payload === undefined) {
            action.payload = {};
         }
         return { loading: false, lgaName: action.payload };

      case LGA_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      case LGA_DETAILS_RESET:
         return { lgaName: {} };
      default:
         return state;
   }
};


export const lgaUpdateReducer = (state = { lgaName: {} }, action) => {
   switch (action.type) {
      case LGA_UPDATE_REQUEST:
         return { loading: true };
      case LGA_UPDATE_SUCCESS:
         return { loading: false, success: true, lgaName: action.payload };
      case LGA_UPDATE_FAIL:
         return { loading: false, error: action.payload };
      case LGA_UPDATE_RESET:
         return { state: {} };
      default:
         return state;
   }
};
