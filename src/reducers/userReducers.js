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
    USER_TENANCY_REGISTER_RESET,
   USER_UPDATE_TENANCY_PROFILE_FAIL,
   USER_UPDATE_TENANCY_PROFILE_REQUEST,
   USER_UPDATE_TENANCY_PROFILE_SUCCESS,
   USER_UPDATE_TENANCY_PROFILE_RESET,
    USER_TENANCY_PROFILE_DETAILS_FAIL,
    USER_TENANCY_PROFILE_DETAILS_REQUEST,
    USER_TENANCY_PROFILE_DETAILS_SUCCESS,
    USER_TENANCY_PROFILE_DETAILS_RESET,
    TENANT_DASHBOARD_DETAILS_FAIL,
    TENANT_DASHBOARD_DETAILS_REQUEST,
    TENANT_DASHBOARD_DETAILS_SUCCESS,
   TENANT_DASHBOARD_DETAILS_RESET,
   USER_TENANT_CREATE_REQUEST,
   USER_TENANT_CREATE_SUCCESS,
   USER_TENANT_CREATE_FAIL,
   USER_TENANT_CREATE_RESET,
   USER_TENANT_LIST_REQUEST,
   USER_TENANT_LIST_SUCCESS,
   USER_TENANT_LIST_FAIL,

    
    
 } from '../constants/userConstants.js';
 
 export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
       case USER_LOGIN_REQUEST:
          return { loading: true };
       case USER_LOGIN_SUCCESS:
          if (action.payload === undefined) {
             action.payload = {};
          }
          return { loading: false, userInfo: action.payload };
       case USER_LOGIN_FAIL:
          return { loading: false, error: action.payload };
       case USER_LOGOUT:
          return {};
       default:
          return state;
    }
};
 
export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
       case USER_DETAILS_REQUEST:
          return { ...state, loading: true };
       case USER_DETAILS_SUCCESS:
          if (action.payload === undefined) {
             action.payload = {};
          }
          return { loading: false, user: action.payload };
       case USER_DETAILS_FAIL:
          return { loading: false, error: action.payload };
       case USER_DETAILS_RESET:
          return { user: {} };
       default:
          return state;
    }
 };
export const tenantDashboardDetailsReducer = (state = { tenant: {} }, action) => {
    switch (action.type) {
       case TENANT_DASHBOARD_DETAILS_REQUEST:
          return { ...state, loading: true };
       case TENANT_DASHBOARD_DETAILS_SUCCESS:
          if (action.payload === undefined) {
             action.payload = {};
          }
          return { loading: false, tenant: action.payload };
       case TENANT_DASHBOARD_DETAILS_FAIL:
          return { loading: false, error: action.payload };
       case USER_DETAILS_RESET:
          return { tenant: {} };
       default:
          return state;
    }
 };


 
 export const userTenancyProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TENANCY_PROFILE_DETAILS_REQUEST:
      return { loading: true }
    case USER_TENANCY_PROFILE_DETAILS_SUCCESS:
      return { loading: false, success: true, userInfoTenancy: action.payload }
    case USER_TENANCY_PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_TENANCY_PROFILE_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

 export const userTenancyRegisterReducer = (state = {}, action) => {
   switch (action.type) {
     case USER_TENANCY_REGISTER_REQUEST:
       return { loading: true }
     case USER_TENANCY_REGISTER_SUCCESS:
       return { loading: false, userInfo: action.payload }
     case USER_TENANCY_REGISTER_FAIL:
       return { loading: false, error: action.payload }
     case USER_LOGOUT:
       return {}
     default:
       return state
   }
 }
 
 
 
 
 export const userUpdateTenancyProfileReducer = (state = {}, action) => {
   switch (action.type) {
     case USER_UPDATE_TENANCY_PROFILE_REQUEST:
       return { loading: true }
     case USER_UPDATE_TENANCY_PROFILE_SUCCESS:
       return { loading: false, success: true, userInfo: action.payload }
     case USER_UPDATE_TENANCY_PROFILE_FAIL:
       return { loading: false, error: action.payload }
     case USER_UPDATE_TENANCY_PROFILE_RESET:
       return {}
     default:
       return state
   }
 }
 
 
 export const userTenantCreateReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case USER_TENANT_CREATE_REQUEST:
         return { loading: true };
      case USER_TENANT_CREATE_SUCCESS:
         return { loading: false, userTenant: action.payload, success: true };
      case USER_TENANT_CREATE_RESET:
         return {  };
      case USER_TENANT_CREATE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};
 
 export const userTenantListReducer = (state = { userTenantLists: [] }, action) => {
   //   const { type, payload } = action
   switch (action.type) {
     case USER_TENANT_LIST_REQUEST:
       return { loading: true }
     case USER_TENANT_LIST_SUCCESS:
       return {
         loading: false,
         userTenantLists: action.payload,
         count: action.payload,
         pages: action.payload,
         page: action.payload,
       }
     case USER_TENANT_LIST_FAIL:
       return { loading: false, error: action.payload }
     default:
       return state
   }
  }