import {  combineReducers, applyMiddleware ,createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
   userLoginReducer,
   userDetailsReducer,
   userTenancyRegisterReducer,
 
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
   
   locationListReducer
} from './reducers/locationReducer';


const reducer = combineReducers({
  
    userLogin: userLoginReducer, 
    userDetails: userDetailsReducer,
    userTenancyRegister: userTenancyRegisterReducer,
    userTenancyProfile : userTenancyProfileReducer,
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

   locationList : locationListReducer,


   revenueCreate : revenueCreateReducer,
   revenueList : revenueListReducer,
   revenueDelete : revenueDeleteReducer,
   revenueUpdate : revenueUpdateReducer,
   revenueDetails : revenueDetailsReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null;

const initialState = {
   userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
