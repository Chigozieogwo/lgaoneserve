
import axios from 'axios';
import {
    CREATE_DEMAND_FAIL,
    CREATE_DEMAND_REQUEST,
    CREATE_DEMAND_SUCCESS,
    CREATE_DEMAND_RESET,
   
} from '../constants/demandConstants';
import url from '../utils/baseUrl.js'




export const demandCreateAction =
( demandNoticeCategoryId, numberOfEntriesToGenerate) =>
async (dispatch, getState) => {
   try {
      dispatch({ type: CREATE_DEMAND_REQUEST });
      const {
         userLogin: { userInfo }
      } = getState();

      const config = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
         }
      };

      const { data } = await axios.post(
         `${url}/demand-notices/generate/multiple`,
         {
            demandNoticeCategoryId, numberOfEntriesToGenerate
         },
         config
      );

      dispatch({
         type: CREATE_DEMAND_SUCCESS,
         payload: data
      });
   } catch (error) {
      dispatch({
         type: CREATE_DEMAND_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};
