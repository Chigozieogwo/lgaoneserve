
import axios from 'axios';
import {
 
   LOCATION_LIST_REQUEST,
   LOCATION_LIST_SUCCESS,
   LOCATION_LIST_FAIL,
   
} from '../constants/locationConstants';
import url from '../utils/baseUrl.js'









   export const listLocations =
   (keyword ="abia-state-nigeria" ) =>
   async (dispatch, getState) => {
      try {
         dispatch({
            type: LOCATION_LIST_REQUEST
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

         
         const { data } = await axios.get(
            `${url}/locations/lgas?stateKey=${keyword}`,
            config
         );
         // const { data } = await axios.get('/api/users')

         // console.log(JSON.stringify(data) + " Abia Local Govt");
         // console.log(data + " Abia Local Govt");

         dispatch({
            type: LOCATION_LIST_SUCCESS,
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
            type: LOCATION_LIST_FAIL,
            payload: message
         });
      }
   };
