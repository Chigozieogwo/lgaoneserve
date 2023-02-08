import {
    
    REVENUE_CREATE_REQUEST,
    REVENUE_CREATE_SUCCESS,
    REVENUE_CREATE_FAIL,
    REVENUE_LIST_REQUEST,
    REVENUE_LIST_SUCCESS,
    REVENUE_LIST_FAIL,
    REVENUE_UPDATE_RESET,
    REVENUE_UPDATE_FAIL,
    REVENUE_UPDATE_SUCCESS,
    REVENUE_UPDATE_REQUEST,
    REVENUE_DETAILS_RESET,
    REVENUE_DETAILS_FAIL,
    REVENUE_DETAILS_SUCCESS,
    REVENUE_DETAILS_REQUEST,
    REVENUE_DELETE_FAIL,
    REVENUE_DELETE_SUCCESS,
    REVENUE_DELETE_REQUEST
 } from '../constants/revenueConstants.js';
 
 
 
//  export const userDepositListReducer = (state = [], action) => {
//     //   const { type, payload } = action
//     switch (action.type) {
//        case USER_DEPOSIT_LIST_REQUEST:
//           return { loading: true };
//        case USER_DEPOSIT_LIST_SUCCESS:
//           if (action.payload === undefined) {
//              action.payload = {};
//           }
//           return {
//              loading: false,
//              userDeposits: action.payload,
//              success: true
//           };
 
//        case USER_DEPOSIT_LIST_FAIL:
//           return { loading: false, error: action.payload };
//        default:
//           return state;
//     }
//  };
 
 export const revenueCreateReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case REVENUE_CREATE_REQUEST:
          return { loading: true };
       case REVENUE_CREATE_SUCCESS:
          return { loading: false, revenue: action.payload, success: true };
       case REVENUE_CREATE_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 
 export const revenueListReducer = (state = { revenues: [] }, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case REVENUE_LIST_REQUEST:
          return { loading: true };
       case REVENUE_LIST_SUCCESS:
          return {
             loading: false,
             revenues: action.payload,
             count: action.payload,
             pages: action.payload,
             page: action.payload
          };
       case REVENUE_LIST_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 
 export const revenueDeleteReducer = (state = {}, action) => {
    switch (action.type) {
       case REVENUE_DELETE_REQUEST:
          return { loading: true };
       case REVENUE_DELETE_SUCCESS:
          return { loading: false, success: true };
       case REVENUE_DELETE_FAIL:
          return { loading: false, error: action.payload };
       default:
          return state;
    }
 };
 
 export const revenueDetailsReducer = (state = {}, action) => {
    //   const { type, payload } = action
    switch (action.type) {
       case REVENUE_DETAILS_REQUEST:
          return { ...state, loading: true };
       case REVENUE_DETAILS_SUCCESS:
          if (action.payload === undefined) {
             action.payload = {};
          }
          return { loading: false, revenue: action.payload };
 
       case REVENUE_DETAILS_FAIL:
          return { loading: false, error: action.payload };
       case REVENUE_DETAILS_RESET:
          return { revenue: {} };
       default:
          return state;
    }
 };
 
 
 export const revenueUpdateReducer = (state = { revenue: {} }, action) => {
    switch (action.type) {
       case REVENUE_UPDATE_REQUEST:
          return { loading: true };
       case REVENUE_UPDATE_SUCCESS:
          return { loading: false, success: true, revenue: action.payload };
       case REVENUE_UPDATE_FAIL:
          return { loading: false, error: action.payload };
       case REVENUE_UPDATE_RESET:
          return { revenue: {} };
       default:
          return state;
    }
 };
 