import {  combineReducers, applyMiddleware ,createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
   userLoginReducer,
   userDetailsReducer,
   userTenancyRegisterReducer,
   tenantDashboardDetailsReducer,
   userTenancyProfileReducer,
  userUpdateTenancyProfileReducer,
} from './reducers/userReducers';
import {
   
   revenueCreateReducer,
   revenueListReducer,
   revenueDeleteReducer,
   revenueUpdateReducer,
   revenueDetailsReducer
} from './reducers/revenueReducer';
import {
   
   demandCategoryCreateReducer,
   demandCategoryUpdateReducer,
   demandCategoryDetailsReducer,
   demandCategoryDetailsRevenueReducer,
} from './reducers/demandCategoryReducer';
import {
   
   demandGenerateCreateReducer,
   demandGenerateDownloadReducer,
   demandGenerateBatchReducer,
   demandGenerateListReducer
} from './reducers/demandGenerateReducer';
import {
   
   demandSpecificCreateReducer,
   demandSpecificDownloadReducer,
   demandSpecificBatchReducer,
   demandSpecificListReducer
} from './reducers/demandSpecificReducer';
import {
   
   locationListReducer,

   stateCreateReducer,
   stateListReducer,
  
   stateUpdateReducer,
   stateDetailsReducer,

   lgaCreateReducer,
   lgaListReducer,
   
   lgaUpdateReducer,
   lgaDetailsReducer
} from './reducers/locationReducer';


const reducer = combineReducers({
  
   
    userLogin: userLoginReducer, 
    userDetails: userDetailsReducer,
    userTenancyRegister: userTenancyRegisterReducer,
    userTenancyProfile : userTenancyProfileReducer,
    tenantDashboardDetails : tenantDashboardDetailsReducer,
    userUpdateTenancyProfile : userUpdateTenancyProfileReducer,
    

   demandCategoryCreate : demandCategoryCreateReducer,
   demandCategoryUpdate : demandCategoryUpdateReducer,
   demandCategoryDetails : demandCategoryDetailsReducer,
   demandCategoryDetailsRevenue : demandCategoryDetailsRevenueReducer,


   demandGenerateCreate : demandGenerateCreateReducer,
   demandGenerateDownload : demandGenerateDownloadReducer,
   demandGenerateBatch : demandGenerateBatchReducer,
   demandGenerateList : demandGenerateListReducer,


   demandSpecificCreate : demandSpecificCreateReducer,
   demandSpecificDownload : demandSpecificDownloadReducer,
   demandSpecificBatch : demandSpecificBatchReducer,
   demandSpecificList : demandSpecificListReducer,

   locationList: locationListReducer,
   
   stateCreate : stateCreateReducer,
   stateList : stateListReducer,
   stateUpdate : stateUpdateReducer,
   stateDetails: stateDetailsReducer,
   
   
   lgaCreate : lgaCreateReducer,
   lgaList : lgaListReducer,
   lgaUpdate : lgaUpdateReducer,
   lgaDetails : lgaDetailsReducer,


   revenueCreate : revenueCreateReducer,
   revenueList : revenueListReducer,
   revenueDelete : revenueDeleteReducer,
   revenueUpdate : revenueUpdateReducer,
   revenueDetails : revenueDetailsReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null;
const userInfoTenancyFromStorage = localStorage.getItem('userInfoTenancy')
   ? JSON.parse(localStorage.getItem('userInfoTenancy'))
   : null;
const tenantFromStorage = localStorage.getItem('tenant')
   ? JSON.parse(localStorage.getItem('tenant'))
   : null;

const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
   userTenancyProfile: { userInfoTenancy: userInfoTenancyFromStorage },
   tenantDashboardDetails: { tenant: tenantFromStorage },
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
