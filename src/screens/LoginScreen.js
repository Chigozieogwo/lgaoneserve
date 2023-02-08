import React, { useState, useEffect } from 'react';
import { Link ,useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
// import Header from '../components/Header.js';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
// import Header from '../components/header'
import logo from '../images/abialogo.jfif'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search
     ? location.search.split('=')[1]
     : '/dashboard/profile';

  useEffect(() => {
     if (userInfo) {
        navigate(redirect);
     }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
     e.preventDefault();
     dispatch(login(email, password));
  };



  return (
    <div>
      {/* <Header /> */}
      <div className="py-4 px-16">
        <div style={{ }}>
          <div class="navbar bg-base-100">
          <div class="flex-none ">
              <div class="avatar pr-4">
                <div class="h-16 w-16 md:h-24 md:w-24 rounded-full ">
                  <img src={logo} class="mr-3 " alt="abia logo"></img>
                </div>
              </div>
            </div>
           
          </div>
<h3 class="text-center text-3xl font-semibold -mt-6 mb-4">Login</h3>
                  {/* {loading && <Loader />} */}
                  {error && <Message variant="danger">{error}</Message>}
          <div
            className="py-2 "
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div class="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    class="input input-bordered"></input>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    class="input input-bordered"></input>
                  {/* <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                </div>
                <div class="form-control mt-6">
                <Link >
                  <button
                      type="button"
                      onClick={submitHandler}
                    class="text-white w-full  bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                   Login
                    
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="mt-20 flex justify-center bg-base-100">
            <h1> Abia State Government @ Copyright 2023 </h1>
            
            {/* <svg className='w-4 h-4 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
             <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z" /></svg>
           */}
          
          </div>
    </div>
  )
}

export default LoginScreen
