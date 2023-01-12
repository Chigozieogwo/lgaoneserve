import axios from 'axios';
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
   
} from '../constants/demandCategoryConstants.js';
import url from '../utils/baseUrl.js'



export const demandCategoryCreateAction =
   (revenueLineName,
    revenueLineCode,
    revenueLineAmount,
    revenueLineFrequency) =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: DEMAND_CATEGORY_CREATE_REQUEST });
         const {
            userLogin: { userInfo }
         } = getState();

         const config = {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${userInfo.token}`
            }
          };
          

console.log(revenueLineName,
    revenueLineCode,
    revenueLineAmount,
    revenueLineFrequency)

          
         const { data } = await axios.post(
            `${url}/revenuelines`,
            {
                revenueLineName,
                revenueLineCode,
                revenueLineAmount,
                revenueLineFrequency
            },
            config
         );

         dispatch({
            type: DEMAND_CATEGORY_CREATE_SUCCESS,
            payload: data
         });
      } catch (error) {
         dispatch({
            type: DEMAND_CATEGORY_CREATE_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
         });
      }
   };





export const demandCategoryDetailsAction = (keyword ="aba-north-lga-abia-state-nigeria" ) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_CATEGORY_DETAILS_REQUEST });

      const {
         userLogin: { userInfo }
      } = getState();

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.accessToken}`
         }
      };

      const { data } = await axios.get(`${url}/demand-notice-categories/?lgaKey=${keyword}`, config);
console.log(data + 'category extend')
      dispatch({
         type: DEMAND_CATEGORY_DETAILS_SUCCESS,
         payload: data
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_CATEGORY_DETAILS_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};

export const updateDemandCategoryAction = (demand_category) => async (dispatch, getState) => {
   try {
      dispatch({
         type: DEMAND_CATEGORY_UPDATE_REQUEST
      });

      const {
         userLogin: { userInfo }
      } = getState();

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
         }
      };

      const { data } = await axios.put(
         `/api/revenues/${demand_category._id}`,  config
      );

      dispatch({
         type: DEMAND_CATEGORY_UPDATE_SUCCESS,
         payload: data
      });
      // dispatch({ type: REVENUE_DETAILS_SUCCESS, payload: data });
      console.log(
         JSON.stringify(data + 'my o my') +
            '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
      );
      // dispatch({ type: REVENUE_DETAILS_RESET });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

      dispatch({
         type: DEMAND_CATEGORY_UPDATE_FAIL,
         payload: message
      });
   }
};
