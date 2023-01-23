import {
    
   DEMAND_CATEGORY_CREATE_REQUEST,
   DEMAND_CATEGORY_CREATE_SUCCESS,
   DEMAND_CATEGORY_CREATE_FAIL,
   
   DEMAND_CATEGORY_UPDATE_RESET,
   DEMAND_CATEGORY_UPDATE_FAIL,
   DEMAND_CATEGORY_UPDATE_SUCCESS,
   DEMAND_CATEGORY_UPDATE_REQUEST,

   DEMAND_CATEGORY_DETAILS_RESET,
   DEMAND_CATEGORY_DETAILS_FAIL,
   DEMAND_CATEGORY_DETAILS_SUCCESS,
   DEMAND_CATEGORY_DETAILS_REQUEST,

   DEMAND_CATEGORY_DETAILS_REVENUE_RESET,
   DEMAND_CATEGORY_DETAILS_REVENUE_FAIL,
   DEMAND_CATEGORY_DETAILS_REVENUE_SUCCESS,
   DEMAND_CATEGORY_DETAILS_REVENUE_REQUEST,
   
} from '../constants/demandCategoryConstants.js';





export const demandCategoryCreateReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case DEMAND_CATEGORY_CREATE_REQUEST:
         return { loading: true };
      case DEMAND_CATEGORY_CREATE_SUCCESS:
         return { loading: false, demand_category: action.payload, success: true };
      case DEMAND_CATEGORY_CREATE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};



export const demandCategoryDetailsReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case DEMAND_CATEGORY_DETAILS_REQUEST:
         return { ...state, loading: true };
      case DEMAND_CATEGORY_DETAILS_SUCCESS:
         if (action.payload === undefined) {
            action.payload = {};
         }
         return { loading: false, demand_category: action.payload };

      case DEMAND_CATEGORY_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      case DEMAND_CATEGORY_DETAILS_RESET:
         return { demand_category: {} };
      default:
         return state;
   }
};
export const demandCategoryDetailsRevenueReducer = (state = {}, action) => {
   //   const { type, payload } = action
   switch (action.type) {
      case DEMAND_CATEGORY_DETAILS_REVENUE_REQUEST:
         return { ...state, loading: true };
      case DEMAND_CATEGORY_DETAILS_REVENUE_SUCCESS:
         if (action.payload === undefined) {
            action.payload = {};
         }
         return { loading: false, demand_category: action.payload };

      case DEMAND_CATEGORY_DETAILS_REVENUE_FAIL:
         return { loading: false, error: action.payload };
      case DEMAND_CATEGORY_DETAILS_REVENUE_RESET:
         return { demand_category: {} };
      default:
         return state;
   }
};

export const demandCategoryUpdateReducer = (state = { demand_category: {} }, action) => {
   switch (action.type) {
      case DEMAND_CATEGORY_UPDATE_REQUEST:
         return { loading: true };
      case DEMAND_CATEGORY_UPDATE_SUCCESS:
         return { loading: false, success: true, demand_category: action.payload };
      case DEMAND_CATEGORY_UPDATE_FAIL:
         return { loading: false, error: action.payload };
      case DEMAND_CATEGORY_UPDATE_RESET:
         return { demand_category: {} };
      default:
         return state;
   }
};
