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

   DEMAND_CATEGORY_DETAILS_REVENUE_RESET,
   DEMAND_CATEGORY_DETAILS_REVENUE_FAIL,
   DEMAND_CATEGORY_DETAILS_REVENUE_SUCCESS,
   DEMAND_CATEGORY_DETAILS_REVENUE_REQUEST,
   
} from '../constants/demandCategoryConstants.js';
import url2 from '../utils/baseUrl.js'

let url = process.env.REACT_APP_BASE_URL;


// let url = "";

// if (process.env.NODE_ENV === 'production'){
//  url = process.env.REACT_APP_PROD
//  console.log("production")
// }else {
//    url = process.env.REACT_APP_DEV
//    console.log("development")
// }

export const demandCategoryCreateAction =
   (categoryName,
      categoryDescription,
      lgaKey,
      revenueLineCodes) =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: DEMAND_CATEGORY_CREATE_REQUEST });
         const {
            userLogin: { userInfo }
         } = getState();

         const config = {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${userInfo.accessToken}`
            }
          };
          

console.log(categoryName,
   categoryDescription,
   lgaKey,
   revenueLineCodes)

          
         const { data } = await axios.post(
            `${url}/demand-notice-categories`,
            {
               categoryName,
               categoryDescription,
               lgaKey,
               revenueLineCodes
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





export const demandCategoryDetailsAction = ( lga='' ) => async (dispatch, getState) => {
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

      console.log(lga + " the keyword main")
      console.log(lga + " the keyword main")
      console.log(lga + " the keyword main")

      const { data } = await axios.get(`${url}/demand-notice-categories/?lgaKey=${lga}`, config);


      // console.log(JSON.stringify(data) + 'category extend')
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
export const demandCategoryDetailsRevenueAction = ( id ) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_CATEGORY_DETAILS_REVENUE_REQUEST });

      const {
         userLogin: { userInfo }
      } = getState();

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.accessToken}`
         }
      };

      

      const { data } = await axios.get(`${url}/demand-notice-categories/${id}`, config);


      // console.log(JSON.stringify(data) + 'category extend')
      dispatch({
         type: DEMAND_CATEGORY_DETAILS_REVENUE_SUCCESS,
         payload: data
      });
      // localStorage.setItem('DEPOSIT_DETAILS_REVENUE', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_CATEGORY_DETAILS_REVENUE_FAIL,
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
            Authorization: `Bearer ${userInfo.accessToken}`
         }
      };

      const { data } = await axios.put(
         `${url}/demand-notice-categories/${demand_category.id}`,demand_category,  config
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
