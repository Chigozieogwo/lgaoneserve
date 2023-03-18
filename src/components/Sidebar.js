
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from "react-dom";
import { logout } from '../actions/userActions';
import dashboarD from "../images/dashboard.png"
import dashboarD1 from "../images/dashboard1.png"
import filem from "../images/file.png"
import payer from "../images/payer.png"
import roles from "../images/roles.png"
import credit from "../images/credit.png"
import userGroup from "../images/user-group.png"


const HoverableDiv = ({ handleMouseOver, handleMouseOut,children }) => {
   return (
     <div className="flex flex-col items-center justify-center group-hover:cursor-pointer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
       {children}
     </div>
   );
 };
const HoverableDivFile = ({ handleMouseOver, handleMouseOut,children }) => {
   return (
     <div className="flex flex-col items-center justify-center group-hover:cursor-pointer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
       {children}
     </div>
   );
 };
const HoverableDivAgent = ({ handleMouseOver, handleMouseOut,children }) => {
   return (
     <div className="flex flex-col items-center justify-center group-hover:cursor-pointer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
       {children}
     </div>
   );
 };
 
 

 


const Sidebar = () => {
   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;
   console.log(userInfo + 'dashboard');
   const logoutHandler = () => {
      dispatch(logout());
   };


   const [isHoveringFile, setIsHoveringFile] = useState(false);
   const [isHoveringAgent, setIsHoveringAgent] = useState(false);
   const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOverAgent = () => {
    setIsHoveringAgent(true);
  };

  const handleMouseOutAgent = () => {
    setIsHoveringAgent(false);
  };
  const handleMouseOverFile = () => {
    setIsHoveringFile(true);
  };

  const handleMouseOutFile = () => {
    setIsHoveringFile(false);
  };

   
   return (
      <div>
         {' '}
         <aside class="w-[6.25rem]  md:w-[6.25rem] bg-white no-scrollbar scrollbar-hide overflow-hidden scrollbar-hide " aria-label="Sidebar">
          <div className="flex flex-col overflow-hidden scrollbar-hide space-y-6 justify-center items-center mx-auto p-2 pt-4 no-scrollbar overflow-y-auto scrollbar-hide">
              <img className="w-16 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQLP2LzNtqG9ZQsOXFMWcYWzpfjDehtMFBGucWjeoiYkRZGwyTcQZnipV0V7ZsodocTs&usqp=CAU" height="" width=""></img>
                   
         
               <Link to="/dashboard/profile" className="flex flex-col space-y-0 items-center justify-center group">
                  
            
          <HoverableDiv 
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      >

      {isHovering ? (<img class="w-7 group-hover:opacity-80 group-hover:cursor-pointer" src={dashboarD} height="" width=""></img>
           ) : <img class="w-7 group-hover:opacity-80 group-hover:cursor-pointer" src={dashboarD1} height="" width=""></img>
           }
            <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Dashboard</p>
          
      </HoverableDiv>

                  
          
          </Link>
               <Link to="/demand_module" className="flex flex-col space-y-0 items-center justify-center group">
                  
            
          <HoverableDivFile 
        handleMouseOver={handleMouseOverFile}
        handleMouseOut={handleMouseOutFile}
                  >
                     <div className="p-1 bg-blue-900 group-hover:bg-blue-700 rounded-lg">

      {isHoveringFile ? (<svg className="text-white w-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
         </svg>
           ) : 
<svg className="text-white w-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
         </svg>
                     }</div>
                     
                     {isHoveringFile ? (<p className="text-blue-700 text-sm px-1 font-medium  group-hover:cursor-pointer">Projects</p>
          
           ) : <p className="text-blue-700 text-sm px-1 font-medium  group-hover:cursor-pointer">IGR</p>
          
           }
            
      </HoverableDivFile>

                  
          
          </Link>

               
              


               <Link className="flex flex-col space-y-0 items-center justify-center group">
                  
               <div className="">
          <img class="w-8 group-hover:opacity-80 group-hover:cursor-pointer " src={payer} height="" width=""></img>
                  </div>   
          
          <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Payer</p>
                     
         
          </Link>
               <Link className="flex flex-col space-y-0 items-center justify-center group">
                  
                   
          <HoverableDiv 
        handleMouseOver={handleMouseOverAgent}
        handleMouseOut={handleMouseOutAgent}
      >

      {isHoveringAgent ? (<svg className="w-8 text-blue-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
</svg>
           ) :<svg className="w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
         </svg>
           }
            <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Agent</p>
          
      </HoverableDiv>

                 
         
          </Link>
               
               
               <Link to="/users/admin" className="flex flex-col space-y-0 items-center justify-center group">
                  
               <div className="">
          <img class="w-8 opacity-70 group-hover:opacity-50 group-hover:cursor-pointer " src={userGroup} height="" width=""></img>
                  </div>   
          
          <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Users</p>
                     
         
          </Link>
               <Link className="flex flex-col space-y-0 items-center justify-center group">
                  
               <div className="">
          <img class="w-8 group-hover:opacity-80 group-hover:cursor-pointer " src={roles} height="" width=""></img>
                  </div>   
          
          <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Roles</p>
                     
         
          </Link>
               <Link to="" className="flex flex-col space-y-0 items-center justify-center group">
                  
               <div className="">
          <img class="w-8 group-hover:opacity-80 group-hover:cursor-pointer " src={credit} height="" width=""></img>
                  </div>   
          
          <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Payments</p>
                     
         
          </Link>
               {/* <div className="flex flex-col space-y-0 items-center justify-center group">
                  
               <div className="">
          <img class="w-8 group-hover:opacity-80 group-hover:cursor-pointer " src={roles} height="" width=""></img>
                  </div>   
          
          <p className="text-blue-700 text-sm px-1 font-medium group-hover:opacity-80 group-hover:cursor-pointer">Roles</p>
                     
         
          </div> */}
          
        
          
          </div>
         </aside>
      </div>
   );
};

export default Sidebar;
