import axios from 'axios';
import {
   
   REVENUE_CREATE_REQUEST,
   REVENUE_CREATE_SUCCESS,
   REVENUE_CREATE_FAIL,
   REVENUE_LIST_REQUEST,
   REVENUE_LIST_SUCCESS,
   REVENUE_LIST_FAIL,
   REVENUE_DELETE_FAIL,
   REVENUE_DELETE_SUCCESS,
   REVENUE_DELETE_REQUEST,
   REVENUE_DETAILS_FAIL,
   REVENUE_DETAILS_SUCCESS,
   REVENUE_DETAILS_REQUEST,
   REVENUE_UPDATE_FAIL,
   REVENUE_UPDATE_SUCCESS,
   REVENUE_UPDATE_REQUEST
} from '../constants/revenueConstants';
import url from '../utils/baseUrl.js'



export const revenueCreateAction =
   (revenueLineName,
    revenueLineCode,
    revenueLineAmount,
    revenueLineFrequency) =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: REVENUE_CREATE_REQUEST });
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
            type: REVENUE_CREATE_SUCCESS,
            payload: data
         });
      } catch (error) {
         dispatch({
            type: REVENUE_CREATE_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
         });
      }
   };



   export const listRevenues =
   () =>
   async (dispatch, getState) => {
      try {
         dispatch({
            type: REVENUE_LIST_REQUEST
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

         // const { data } = await axios.get(
         //   `/api/users?pageNumber=${pageNumber}`,
         //   config
         // )
         const { data } = await axios.get(
            `${url}/revenuelines`,
            config
         );
         // const { data } = await axios.get('/api/users')

         console.log(data);

         dispatch({
            type: REVENUE_LIST_SUCCESS,
            payload: data
         });
      } catch (error) {
         const message =
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message;
         // if (message === 'Not authorized, token failed') {
         //    dispatch(logout());
         // }
         dispatch({
            type: REVENUE_LIST_FAIL,
            payload: message
         });
      }
   };

export const revenueDeleteAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({
         type: REVENUE_DELETE_REQUEST
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

      await axios.delete(`/api/deposits/${id}`, config);

      dispatch({
         type: REVENUE_DELETE_SUCCESS
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

      dispatch({
         type: REVENUE_DELETE_FAIL,
         payload: message
      });
   }
};

export const revenueDetailsAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: REVENUE_DETAILS_REQUEST });

      const {
         userLogin: { userInfo }
      } = getState();

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
         }
      };

      const { data } = await axios.get(`/api/deposits/${id}`, config);

      dispatch({
         type: REVENUE_DETAILS_SUCCESS,
         payload: data
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: REVENUE_DETAILS_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};

export const updateRevenueAction = (revenue) => async (dispatch, getState) => {
   try {
      dispatch({
         type: REVENUE_UPDATE_REQUEST
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
         `/api/revenues/${revenue._id}`,  config
      );

      dispatch({
         type: REVENUE_UPDATE_SUCCESS,
         payload: data
      });
      dispatch({ type: REVENUE_DETAILS_SUCCESS, payload: data });
      console.log(
         JSON.stringify(data.isConfirmed + 'my o my') +
            '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
      );
      // dispatch({ type: REVENUE_DETAILS_RESET });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

      dispatch({
         type: REVENUE_UPDATE_FAIL,
         payload: message
      });
   }
};