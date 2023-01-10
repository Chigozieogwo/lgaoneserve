import {  combineReducers, applyMiddleware ,createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
   userLoginReducer,
   userDetailsReducer
} from './reducers/userReducers';
import {
   demandCreateReducer
} from './reducers/demandReducer';

const reducer = combineReducers({
  
   userLogin: userLoginReducer, 
   userDetails: userDetailsReducer,
   createDemand : demandCreateReducer
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
