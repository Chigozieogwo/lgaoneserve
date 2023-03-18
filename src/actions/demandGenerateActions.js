import axios from 'axios';
import {
    
   DEMAND_GENERATE_CREATE_REQUEST,
   DEMAND_GENERATE_CREATE_SUCCESS,
   DEMAND_GENERATE_CREATE_FAIL,
   
   DEMAND_GENERATE_LIST_RESET,
   DEMAND_GENERATE_LIST_FAIL,
   DEMAND_GENERATE_LIST_SUCCESS,
   DEMAND_GENERATE_LIST_REQUEST,

   DEMAND_GENERATE_DOWNLOAD_RESET,
   DEMAND_GENERATE_DOWNLOAD_FAIL,
   DEMAND_GENERATE_DOWNLOAD_SUCCESS,
   DEMAND_GENERATE_DOWNLOAD_REQUEST,


   DEMAND_GENERATE_BATCH_RESET,
   DEMAND_GENERATE_BATCH_FAIL,
   DEMAND_GENERATE_BATCH_SUCCESS,
   DEMAND_GENERATE_BATCH_REQUEST,
   
} from '../constants/demandGenerateConstants.js';
import url2 from '../utils/baseUrl.js'
// import pdfUrl from '../utils/pdfUrl.js'

let url = process.env.REACT_APP_BASE_URL;

export const demandGenerateCreateAction =
   ( lgaKey,
      demandNoticeCategoryId,
      numberOfEntriesToGenerate
   ) =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: DEMAND_GENERATE_CREATE_REQUEST });
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

console.log(lgaKey,
   demandNoticeCategoryId,
   numberOfEntriesToGenerate,userInfo.accessToken
)

          
         const { data } = await axios.post(
            `${url}/demand-notices/generate/multiple`,
            {
               lgaKey,
               demandNoticeCategoryId,
               numberOfEntriesToGenerate
            },
            config
         );

         dispatch({
            type: DEMAND_GENERATE_CREATE_SUCCESS,
            payload: data
         });
      } catch (error) {
         dispatch({
            type: DEMAND_GENERATE_CREATE_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
         });
      }
   };



   

export const demandGenerateDownloadAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_GENERATE_DOWNLOAD_REQUEST });

      const {
         userLogin: { userInfo }
      } = getState();

      const { userTenancyProfile: { userInfoTenancy }} = getState();
         const { tenantDashboardDetails : { tenant }} = getState();
      

      axios.get(`${url}/demand-notices/export-pdf?demandNoticeBatchId=${id}`,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
               'Accept': 'application/pdf',
               'tenantId': `${tenant?.singleTenant?._id}`,
               'Authorization': `Bearer ${userInfo.accessToken}`,
            }
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
           link.href = url;
         //   link.setAttribute('download', `${id}_Demand_Notice_Multiple.pdf`);
            link.setAttribute('download', `${id}_Demand_Notice.pdf`); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));

      // const { data } = await axios.get(`${pdfUrl}/demand-notices/export-pdf?demandNoticeBatchId=${id}`, config);

      dispatch({
         type: DEMAND_GENERATE_DOWNLOAD_SUCCESS,
         payload: url
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_GENERATE_DOWNLOAD_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};


export const demandGenerateDownloadCsvAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_GENERATE_DOWNLOAD_REQUEST });

      const {
         userLogin: { userInfo }
      } = getState();

      const { userTenancyProfile: { userInfoTenancy }} = getState();
      const { tenantDashboardDetails : { tenant }} = getState();
   
      // const config = {
      //    headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${userInfo.accessToken}`,
      //       'tenantId': `${tenant?.singleTenant?._id}`
      //    }
      //  };

      axios.get(`${url}/demand-notices/export-csv/batch?demandNoticeBatchId=${id}`,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
               'Accept': 'application/pdf',
               'tenantId': `${tenant?.singleTenant?._id}`,
               'Authorization': `Bearer ${userInfo.accessToken}`,
            }
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${id}Demand_Notice_Multiple.csv`); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));

      // const { data } = await axios.get(`${pdfUrl}/demand-notices/export-pdf?demandNoticeBatchId=${id}`, config);

      dispatch({
         type: DEMAND_GENERATE_DOWNLOAD_SUCCESS,
         payload: url
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_GENERATE_DOWNLOAD_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};



export const demandGenerateBatchAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: DEMAND_GENERATE_BATCH_REQUEST });

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
      const { data } = await axios.get(`${url}/demand-notices?demandNoticeBatchId=${id}`, config);
console.log(data + 'data batch')
      dispatch({
         type: DEMAND_GENERATE_BATCH_SUCCESS,
         payload: data
      });
      // localStorage.setItem('DEPOSIT_Details', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: DEMAND_GENERATE_BATCH_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message
      });
   }
};

export const listDemandGenerateLists =
() =>
async (dispatch, getState) => {
   try {
      dispatch({
         type: DEMAND_GENERATE_LIST_REQUEST
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
         `${url}/demand-notices/batches`,
         config
      );
      // const { data } = await axios.get('/api/users')

      console.log(data);

      dispatch({
         type: DEMAND_GENERATE_LIST_SUCCESS,
         payload: data
      });
      localStorage.setItem('demand_lists', JSON.stringify(data));
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      // if (message === 'Not authorized, token failed') {
      //    dispatch(logout());
      // }
      dispatch({
         type: DEMAND_GENERATE_LIST_FAIL,
         payload: message
      });
   }
};