import axios from 'axios';
import {
    
   DEMAND_SPECIFIC_CREATE_REQUEST,
   DEMAND_SPECIFIC_CREATE_SUCCESS,
   DEMAND_SPECIFIC_CREATE_FAIL,
   
   DEMAND_SPECIFIC_LIST_RESET,
   DEMAND_SPECIFIC_LIST_FAIL,
   DEMAND_SPECIFIC_LIST_SUCCESS,
   DEMAND_SPECIFIC_LIST_REQUEST,

   DEMAND_SPECIFIC_DOWNLOAD_RESET,
   DEMAND_SPECIFIC_DOWNLOAD_FAIL,
   DEMAND_SPECIFIC_DOWNLOAD_SUCCESS,
   DEMAND_SPECIFIC_DOWNLOAD_REQUEST,


   DEMAND_SPECIFIC_BATCH_RESET,
   DEMAND_SPECIFIC_BATCH_FAIL,
   DEMAND_SPECIFIC_BATCH_SUCCESS,
   DEMAND_SPECIFIC_BATCH_REQUEST,
   
} from '../constants/demandSpecificConstants.js';
import url2 from '../utils/baseUrl.js'
import pdfUrl from '../utils/pdfUrl.js'

let url = process.env.REACT_APP_BASE_URL;

export const demandSpecificCreateAction =
   ( 
    payerPhoneNumber,
    payerFirstName,
    payerLastName,
    payerABBSIN,
    payerHomeAddress,
    payerEmail,
       lgaKey,
      demandNoticeCategoryId,
      numberOfEntriesToGenerate
   ) =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: DEMAND_SPECIFIC_CREATE_REQUEST });
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
    payerPhoneNumber,
    payerFirstName,
    payerLastName,
    payerABBSIN,
    payerHomeAddress,
    payerEmail,
    lgaKey,
   demandNoticeCategoryId,
    numberOfEntriesToGenerate,
    userInfo.accessToken
)

          
         const { data } = await axios.post(
            `${url}/demand-notices/generate/specific/payer`,
            {

                payerPhoneNumber,
                payerFirstName,
                payerLastName,
                payerABBSIN,
                payerHomeAddress,
                payerEmail,
               lgaKey,
               demandNoticeCategoryId,
               numberOfEntriesToGenerate
            },
            config
         );

         dispatch({
            type: DEMAND_SPECIFIC_CREATE_SUCCESS,
            payload: data
         });
      } catch (error) {
         dispatch({
            type: DEMAND_SPECIFIC_CREATE_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
         });
      }
   };





export const demandSpecificDownloadAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_SPECIFIC_DOWNLOAD_REQUEST });

      const {
         userLogin: { userInfo }
      } = getState();


      const { userTenancyProfile: { userInfoTenancy }} = getState();
         const { tenantDashboardDetails : { tenant }} = getState();
      
      // const config = {
      //    headers: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/pdf',
      //       Authorization: `Bearer ${userInfo.token}`
      //    }
      // };

      axios.get(`${pdfUrl}/demand-notices/export-pdf/specificpayerdemandnotice?demandNoticeId=${id}`,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
               'Accept': 'application/pdf',
               'tenantId': `${tenant?.singleTenant?._id}`,
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Demand_Notice.pdf`); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));

      // const { data } = await axios.get(`${pdfUrl}/demand-notices/export-pdf?demandNoticeBatchId=${id}`, config);

      dispatch({
         type: DEMAND_SPECIFIC_DOWNLOAD_SUCCESS,
         payload: url
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_SPECIFIC_DOWNLOAD_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};

export const demandSpecificBatchAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_SPECIFIC_BATCH_REQUEST });

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
          

      const { data } = await axios.get(`${url}/demand-notices/specific?demandNoticeId=${id}`, config);
console.log(data + 'data batch')
      dispatch({
         type: DEMAND_SPECIFIC_BATCH_SUCCESS,
         payload: data
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_SPECIFIC_BATCH_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};

export const listDemandSpecificLists =
() =>
async (dispatch, getState) => {
   try {
      dispatch({
         type: DEMAND_SPECIFIC_LIST_REQUEST
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

      // const { data } = await axios.get(
      //   `/api/users?pageNumber=${pageNumber}`,
      //   config
      // )
      const { data } = await axios.get(
         `${url}/demand-notices/specific`,
         config
      );
      // const { data } = await axios.get('/api/users')

      console.log(data);

      dispatch({
         type: DEMAND_SPECIFIC_LIST_SUCCESS,
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
         type: DEMAND_SPECIFIC_LIST_FAIL,
         payload: message
      });
   }
};