
import axios from 'axios';
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
   
   
} from '../constants/locationConstants';
import url2 from '../utils/baseUrl.js'


let url = process.env.REACT_APP_BASE_URL;








   export const listLocations =
   (stateKey) =>
   async (dispatch, getState) => {
      try {
         dispatch({
            type: LOCATION_LIST_REQUEST
         });

         const {
            userLogin: { userInfo }
         } = getState();

         const { userTenancyProfile: { userInfoTenancy }} = getState();
         const { tenantDashboardDetails : { tenant }} = getState();
      
         const config = {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${userInfo.accessToken}`,
               'tenantId': `${tenant?.singleTenant?._id}`
            }
          };
          

         
         const { data } = await axios.get(
            `${url}/locations/lgas?stateKey=${stateKey}`,
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


   
export const stateCreateAction =
(stateName) =>
async (dispatch, getState) => {
   try {
      dispatch({ type: STATE_CREATE_REQUEST });
      const {
         userLogin: { userInfo }
      } = getState();



      const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.accessToken}`,
            'tenantId': `${tenant?.singleTenant?._id}`
         }
       };
       

console.log(
stateName)

       
      const { data } = await axios.post(
         `${url}/locations/states`,
         {
             stateName
         },
         config
      );

      dispatch({
         type: STATE_CREATE_SUCCESS,
         payload: data
      });
   } catch (error) {
      dispatch({
         type: STATE_CREATE_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};



export const listStates =
(lga) =>
async (dispatch, getState) => {
   try {
      dispatch({
         type: STATE_LIST_REQUEST
      });

      const {
         userLogin: { userInfo }
      } = getState();
      const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.accessToken}`,
            'tenantId': `${tenant?.singleTenant?._id}`
         }
       };
       
      
      const { data } = await axios.get(
         `${url}/locations/states`,
         config
      );
  

      console.log(data);

      dispatch({
         type: STATE_LIST_SUCCESS,
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
         type: STATE_LIST_FAIL,
         payload: message
      });
   }
};


export const stateDetailsAction = (stateId) => async (dispatch, getState) => {
try {
   dispatch({ type: STATE_DETAILS_REQUEST });

   const {
      userLogin: { userInfo }
   } = getState();

   const { userTenancyProfile: { userInfoTenancy }} = getState();
   const { tenantDashboardDetails : { tenant }} = getState();

   const config = {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${userInfo.accessToken}`,
         'tenantId': `${tenant?.singleTenant?._id}`
      }
    };
    
   const { data } = await axios.get(`${url}/locations/${stateId}`, config);

   dispatch({
      type: STATE_DETAILS_SUCCESS,
      payload: data
   });
   // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
} catch (error) {
   dispatch({
      type: STATE_DETAILS_FAIL,
      payload:
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message
   });
}
};

export const updateStateAction = (stateName) => async (dispatch, getState) => {
try {
   dispatch({
      type: STATE_UPDATE_REQUEST
   });

   const {
      userLogin: { userInfo }
   } = getState();

   const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.accessToken}`,
            'tenantId': `${tenant?.singleTenant?._id}`
         }
       };
       
   const { data } = await axios.put(
      `${url}/locations/states/${stateName.stateId}`,stateName,  config
   );

   dispatch({
      type: STATE_UPDATE_SUCCESS,
      payload: data
   });
   dispatch({ type: STATE_DETAILS_SUCCESS, payload: data });
   console.log(
      data + 'my o my mmmmmmmmmmmmmmmmmmmmmmm'
   );
   console.log(
      JSON.stringify(data + 'my o my') +
         '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
   );
   
} catch (error) {
   const message =
      error.response && error.response.data.message
         ? error.response.data.message
         : error.message;

   dispatch({
      type: STATE_UPDATE_FAIL,
      payload: message
   });
}
};



   
export const lgaCreateAction =
(stateKey,
   lgaName,
   acronym,
   revenueCodePrefix) =>
async (dispatch, getState) => {
   try {
      dispatch({ type: LGA_CREATE_REQUEST });
      const {
         userLogin: { userInfo }
      } = getState();



      const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.accessToken}`,
            'tenantId': `${tenant?.singleTenant?._id}`
         }
       };
       

console.log(
   stateKey,
   lgaName,
   acronym,
   revenueCodePrefix)

       
      const { data } = await axios.post(
         `${url}/locations/lgas`,
         {
            stateKey,
            lgaName,
            acronym,
            revenueCodePrefix
         },
         config
      );

      dispatch({
         type: LGA_CREATE_SUCCESS,
         payload: data
      });
   } catch (error) {
      dispatch({
         type: LGA_CREATE_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};



export const listLgas =
(lga) =>
async (dispatch, getState) => {
   try {
      dispatch({
         type: LGA_LIST_REQUEST
      });

      const {
         userLogin: { userInfo }
      } = getState();
      const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.accessToken}`,
            'tenantId': `${tenant?.singleTenant?._id}`
         }
       };
       
      
      const { data } = await axios.get(
         `${url}/locations/lgas`,
         config
      );
  

      console.log(data);

      dispatch({
         type: LGA_LIST_SUCCESS,
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
         type: LGA_LIST_FAIL,
         payload: message
      });
   }
};


export const lgaDetailsAction = (lgaId) => async (dispatch, getState) => {
try {
   dispatch({ type: LGA_DETAILS_REQUEST });

   const {
      userLogin: { userInfo }
   } = getState();

   const { userTenancyProfile: { userInfoTenancy }} = getState();
   const { tenantDashboardDetails : { tenant }} = getState();

   const config = {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${userInfo.accessToken}`,
         'tenantId': `${tenant?.singleTenant?._id}`
      }
    };
    
   const { data } = await axios.get(`${url}/locations/${lgaId}`, config);

   dispatch({
      type: LGA_DETAILS_SUCCESS,
      payload: data
   });
   // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
} catch (error) {
   dispatch({
      type: LGA_DETAILS_FAIL,
      payload:
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message
   });
}
};

export const updateLgaAction = (lgaName) => async (dispatch, getState) => {
try {
   dispatch({
      type: STATE_UPDATE_REQUEST
   });

   const {
      userLogin: { userInfo }
   } = getState();

   const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.accessToken}`,
            'tenantId': `${tenant?.singleTenant?._id}`
         }
       };
       
   const { data } = await axios.put(
      `${url}/locations/states/${lgaName.lgaId}`,lgaName,  config
   );

   dispatch({
      type: LGA_UPDATE_SUCCESS,
      payload: data
   });
   dispatch({ type: LGA_DETAILS_SUCCESS, payload: data });
   console.log(
      data + 'my o my mmmmmmmmmmmmmmmmmmmmmmm'
   );
   console.log(
      JSON.stringify(data + 'my o my') +
         '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
   );
   
} catch (error) {
   const message =
      error.response && error.response.data.message
         ? error.response.data.message
         : error.message;

   dispatch({
      type: LGA_UPDATE_FAIL,
      payload: message
   });
}
};
