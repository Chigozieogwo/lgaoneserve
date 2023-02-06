/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";
import pdfUrl from '../utils/pdfUrl'
import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';

import {demandGenerateCreateAction ,listDemandGenerateLists,demandGenerateDownloadAction ,demandGenerateBatchAction } from '../actions/demandGenerateActions';


import {demandSpecificBatchAction , demandSpecificDownloadAction} from '../actions/demandSpecificActions';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate,useParams } from 'react-router-dom';
import { ExportToCsv } from 'export-to-csv';
// import { ReactComponent as DateIcon } from '../images/date.svg';
import { CSVLink,CSVDownload } from "react-csv";

const SpecificPreviewScreen = ({ match }) => {
   // const [url, setUrl] = useState('https://billable-dev.herokuapp.com/demand-notices/template?demandNoticeId=63c431c3ddbd64368df75fbd');

   // const {demandNoticeBatchId } = useParams()
   // const pageNumber = match.params.pageNumber || 1
   // const demandNoticeBatchId = match.params.id
   const [showModalPrint , setShowModalPrint ] = useState(false)
   const {id} = useParams()

   console.log(id + "params")
   // console.log(match.params + "params match")
   
    
    
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();
   
   // const userLogin = useSelector((state) => state.userLogin);
   // const { userInfo } = userLogin;

   const demandSpecificBatch = useSelector((state) => state.demandSpecificBatch);
   const { loading:loadingSpecific, error:errorSpecific,success ,demand_Specificbatchs } = demandSpecificBatch;
   // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
  console.log(demand_Specificbatchs + "Specific Batch here is the user")

   
  const demandSpecificCreate = useSelector((state) => state.demandSpecificCreate);
  const {loading : loadingSpecificCreate, error : errorSpecificCreate,success : success_Specific,   demand_specific } = demandSpecificCreate;
  // console.log(demand_lists + " Location of Abia LGA is the user")
//   console.log(demand_batchs.demandNoticeList + " Serial Number Batch here is the user")
//   console.log(lgaRecord + "Batch here is the user")
//   console.log(revenueLinesEntities + "Batch here is the user")
// const url = `https://billable-dev.herokuapp.com/demand-notices/template?demandNoticeId=${demand_batchs?.demandNoticesList[0]?._id}`



// console.log(flatten(demand_batchs))
// const csvreport = {
//    data: demand_batchs,
//    headers: headers,
//    filename: 'Clue_Mediator_Report.csv'
//  };

 
const options = { 
   fieldSeparator: ',',
   quoteStrings: '"',
   decimalSeparator: '.',
   showLabels: true, 
   showTitle: true,
   title: 'My Awesome CSV',
   useTextFile: false,
   useBom: true,
   useKeysAsHeaders: true,
   // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
 };
const csvExporter = new ExportToCsv(options);


   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;
//   console.log(userInfo + "here is the user")

   
   const demandSpecificDownload = useSelector((state) => state.demandSpecificDownload);
   const { loading : loadingDownload, error : errorDownload, successDownload } = demandSpecificDownload;
//   console.log(userInfo + "here is the user")

  const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null




  const downloadFile = ({ data, fileName, fileType }) => {
   const blob = new Blob([data], { type: fileType })
 
   const a = document.createElement('a')
   a.download = fileName
   a.href = window.URL.createObjectURL(blob)
   const clickEvt = new MouseEvent('click', {
     view: window,
     bubbles: true,
     cancelable: true,
   })
   a.dispatchEvent(clickEvt)
   a.remove()
 }
 
//  const exportToJson = e => {
//    e.preventDefault()
//    downloadFile({
//      data: JSON.stringify(demand_batchs.users),
//      fileName: 'users.json',
//      fileType: 'text/json',
//    })
//  }
// if (successDownload) {
//    setShowModalPrint(false);

// }
const flatten = (demand_batchs) => {
   let demandNotices = demand_batchs.demandNoticesList;

   let lgaKeyAgainstRecordDict = {}
   lgaKeyAgainstRecordDict[`${demand_batchs.lgaRecord.lgaKey}`] = demand_batchs.lgaRecord


   let flattenedDemandNoticeList = []
   for (let demandNoticeRecord of demandNotices) {
       flattenedDemandNoticeList.push({...demandNoticeRecord, demandNoticeCategoryName: demand_batchs.demandNoticeCategory.categoryName, lgaName: lgaKeyAgainstRecordDict[demandNoticeRecord.lgaKey].lgaName, revenueLines: demand_batchs.revenueLinesEntities})
   }

   return flattenedDemandNoticeList;
}
 
 const exportToCsv = e => {
   e.preventDefault()
 
   // Headers for each column
   let headers = ['Name,Category,LGA,Revenue']
 
   // Convert users data to a csv
   // let usersCsv = demand_batchs.users.reduce((acc, user) => {
   //   const { id, name, surname, age } = user
   //   acc.push([id, name, surname, age].join(','))
   //   return acc
   // }, [])


 
   
 
   downloadFile({
     data: [...headers,JSON.stringify(flatten(demand_Specificbatchs))].join('\n'),
     fileName: 'husers.csv',
     fileType: 'text/csv',
   })
 }


// const baseUrl = flatten(demand_batchs)

// console.log(baseUrl + "baseUrl")
 
const handleClose = () => {
   setShowModalPrint(false);
   
   
};
// setTimeout(() => {
//    setShowModalPrint(false);
        
//   }, 3000);
   // const url = `${lo}`
  const showHandler = (e) => {
   e.preventDefault();
   // window.open("_blank");
   dispatch(demandSpecificDownloadAction(id));
   setShowModalPrint(true);
   setTimeout(() => {
      setShowModalPrint(false);
           
     }, 8000);
};
const showExportCsv = (e) => {
   e.preventDefault();
   
   
csvExporter.generateCsv(demand_Specificbatchs)
};

// if(success){
//    setUrl(`https://billable-dev.herokuapp.com/demand-notices/template?demandNoticeId=${demand_batchs?.demandNoticesList[0]?._id}`);

// }
   useEffect(() => {
      // setUrl(`https://billable-dev.herokuapp.com/demand-notices/template?demandNoticeId=${demand_batchs?.demandNoticesList[0]?._id}`);
      dispatch(demandSpecificBatchAction(id));
      
      
      
   }, [id]);
  

   return (
      <>
         <div>
            <div class="drawer drawer-mobile bg-[#F4F5FA]">
               <input
                  id="my-drawer-3"
                  type="checkbox"
                  class="drawer-toggle"
               ></input>
               <div class="drawer-content -ml-2 flex flex-col">
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <HeaderLog />
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Header when logged in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                  <div>
                         <div className="bg-[#F4F5FA] overscroll-none  px-5  py-5">
                        
                         {showModalPrint ? (
                              <div
                              onClick={handleClose}
                              tabindex="-1"
                              class="flex  justify-center  bg-[rgb(0,0,0,0.35)] align-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                           >
                              <div class="relative  w-full max-w-md h-full md:h-auto">
                              <div>
                              
                                         </div>
                                 
                                 <div class="">
                                     
                                    <div class=" max-w-sm bg-white mt-20 ml-8 p-4 md:ml-16 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                      <Loader /> 
                                       <h5 className='text-md font-italics text-blue-700 text-center'> Downloading Demand  Notice ...</h5>
                                       </div> 
                                    
                                    </div>
                                 </div>
                              </div>
                           ) : null}

                        <div className="flex justify-between py-4 px-6 text-xl">
                                 
                                   <div className="ml-4">
                                   <h5 className="text-3xl font-bold mb-4"> Print </h5>
                                   <button onClick={showHandler} type="button" class=" outline outline-offset-2 hover:text-white outline-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300   rounded-md text-sm px-6 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        
                                 
                        <svg className='h-8 w-8 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"></path>
</svg>
                     </button>
                                   </div>
                                   <div>
                                   <Link to='/demand-notices/batches'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-blue-600 hover:text-white'>
                                   <svg className='h-6 w-6  ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                                 </svg> 
</div>

                                   </Link>
                                   </div>
                        

                         
                                  
                                   
                        </div>
                        
                         </div>




                         <div className="">
                         
                        

                         <div class="grid grid-cols-4 gap-2 ml-12">
                         <ul>
                         <div className="flex justify-between ">
                                   {/* <h5 className="font-bold text-xl"> Total : <span> {demand_Specificbatchs?.demandNoticesList?.length}</span> </h5> */}
                                   {/* <CSVLink data={demand_batchs1} >
                                    
                                   
                                   </CSVLink> */}
                                   {/* <div></div>
                                   <button  onClick={exportToCsv} className="bg-blue-600 hover:bg-blue-800 mb-2 px-4 py-2 text-white ">Export as Csv</button> */}

{/* <CSVDownload data={demand_batchs1} target="_blank" ><button  className="bg-blue-600 hover:bg-blue-800 mb-2 px-4 py-2 text-white ">Export as Csv</button>
                                   </CSVDownload> */}
                                   {/* <csvlink {...csvreport}>
                                      
                                   </csvlink> */}
                                   
                        </div>
                        <div  class="flex my-1 flex-row items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div className="bg-blue-700 px-2 py-4 text-white text-2xl font-bold">
    {1}
 </div>
 
 <div class="flex flex-row justify-between  leading-normal">
     <h6 class="pr-0 pl-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">No:.</h6>
     <h5 class="px-1 text-2xl font-bold text-blue-700 dark:text-gray-400">{success ? demand_Specificbatchs[0]?.demandNotice?.serialNumber : null}</h5>
 
 </div>

 
</div>
 
 
 </ul>
                         <div class="col-span-3 -mt-32">
                         <h5 className="font-semibold text-xl mb-2 "> Preview </h5>
                              {success ? (<iframe className="mx-auto overflow-hidden w-[210mm]" src= {`https://api.billable.site/demand-notices/template/specificpayer?demandNoticeId=${demand_Specificbatchs[0]?.demandNotice?._id}`}
 width="100%" height="900"></iframe>):<iframe className="mx-auto overflow-hidden w-[210mm]" src= {'https://api.billable.site/demand-notices/template/specificpayer?demandNoticeId=63d9146c152aae36cc34ba0c'}
 width="100%" height="900"></iframe>}
                              
                         {/* {success ? (demandSpecificBatch?.demand_Specificbatchs) : null} */}
                         {/* {demand_batchs === "undefined" ? (<Loader />) : } */}
                         
                    
                         </div>
                         </div>
                      
                      
<div className="flex flex-row mx-16">


   


   
   
</div>  
                   {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />"}} ></div> */}

                      
                      
                      </div>
                     


          
{/* {demand_batchs === 'undefined' ? null : demand_batchs.lgaRecord.lgaName} */}

          



                      

                  </div>

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               </div>
               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               <div class="drawer-side ">
                  <label for="my-drawer-3" class="drawer-overlay"></label>
                  <ul class="menu  overflow-y-auto  w-60 md:w-60 bg-blue-600">
                     {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                     <Sidebar></Sidebar>
                     {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  </ul>
               </div>



                   

               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            </div>
         </div>
      </>
   );
};

export default SpecificPreviewScreen;
