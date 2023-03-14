/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import HeaderLog from '../components/HeaderLog';
import Paginate from '../components/Paginate';
import { Fragment } from 'react';
import DatePicker from "react-datepicker";
import pdfUrl from '../utils/pdfUrl'
import "react-datepicker/dist/react-datepicker.css";

import Sidebar from '../components/Sidebar';

import {demandGenerateCreateAction ,listDemandGenerateLists,demandGenerateDownloadAction ,demandGenerateBatchAction,demandGenerateDownloadCsvAction } from '../actions/demandGenerateActions';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { logout, getUserDetails } from '../actions/userActions';

import { Link, useLocation, useNavigate,useParams } from 'react-router-dom';
import { ExportToCsv } from 'export-to-csv';
// import { ReactComponent as DateIcon } from '../images/date.svg';
import { CSVLink,CSVDownload } from "react-csv";

const BatchPreviewScreen = ({ match }) => {
   let url = process.env.REACT_APP_BASE_URL;
   const [showModalPrint , setShowModalPrint ] = useState(false)
   const [showModalCsv , setShowModalCsv ] = useState(false)
   const [generationStatus , setGenerationStatus ] = useState('')
   const {id} = useParams()

   console.log(id + "params")
   // console.log(match.params + "params match")
   


   

   // To hold the actual data
 const [data, setData] = useState([])
 //  const [loading, setLoading] = useState(true);
 
    
    // User is currently on this page
 const [currentPage, setCurrentPage] = useState(1);
 // No of Records to be displayed on each page   
 const [recordsPerPage] = useState(50);
 
 const indexOfLastRecord = currentPage * recordsPerPage;
 const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


   // Records to be displayed on the current page
   const currentRecords = data.slice(indexOfFirstRecord, 
      indexOfLastRecord);
   
      const nPages = Math.ceil(data?.length / recordsPerPage)
   


    
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch();
   
   // const userLogin = useSelector((state) => state.userLogin);
   // const { userInfo } = userLogin;

   const demandGenerateBatch = useSelector((state) => state.demandGenerateBatch);
   const { loading:loadingBatch, error:errorBatch,success ,demand_batchs } = demandGenerateBatch;
   // const {  demandNoticeList ,lgaRecord ,revenueLinesEntities} = demand_batchs
  console.log(demand_batchs + "Batch here is the user")
  console.log(demand_batchs + "Batch here is the user")
  console.log(generationStatus + "status Batch here is the user")
  console.log(generationStatus + " status Batch here is the user")


 
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


const tenantDashboardDetails = useSelector((state) => state.tenantDashboardDetails);

const { tenant  } = tenantDashboardDetails;

   console.log(tenant?.singleTenant?._id + "tenant id ++++++++")
   console.log(tenant + "tenant id ++++++++")
   
   const demandGenerateDownload = useSelector((state) => state.demandGenerateDownload);
   const { loading : loadingDownload, error : errorDownload, successDownload } = demandGenerateDownload;
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
     data: [...headers,JSON.stringify(flatten(demand_batchs))].join('\n'),
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
  const showHandler = () => {
   
     setShowModalPrint(true);

     dispatch(demandGenerateBatchAction(id));
     setTimeout(() => {
    
     if(demand_batchs?.demandNoticeBatch?.generationStatus === 'successful' ){
  
        window.open(`${demand_batchs?.demandNoticeBatch?.presignedFileUrl}`);
       
        clearInterval()
        setShowModalPrint(false)


       
    } 
     }, 1000);
     
     setTimeout(() => {
      dispatch(demandGenerateBatchAction(id));
         // setShowModalPrint(false);
              
     }, 4000);
     
     
   
   
};
  const showHandlerCsv = () => {
   
     setShowModalCsv(true);
     
     dispatch(demandGenerateDownloadCsvAction(id));
    
     setTimeout(() => {
       
        setShowModalCsv(false);
        
     }, 2000);
     
     
   
   
};

function Interval(){
   setTimeout(() => {
      dispatch(demandGenerateBatchAction(id));
      setGenerationStatus(demand_batchs.demandNoticeBatch?.generationStatus)
      if(demand_batchs.demandNoticeBatch?.generationStatus === 'in_progress' ){
         console.log(generationStatus + " bye bye")
        
         dispatch(demandGenerateBatchAction(id));
            //  window.location.reload();
         setShowModalPrint(true);
        
      }
    },4000)
}


// useEffect(()=>Interval(),[generationStatus])
 
   
const showExportCsv = (e) => {
   e.preventDefault();
   
   
csvExporter.generateCsv(demand_batchs)
};

//   setTimeout(() => {
//       dispatch(demandGenerateBatchAction(id));
           
//       }, 2000);

   useEffect(() => {
      dispatch(demandGenerateBatchAction(id));
      // setTimeout(() => {
         setTimeout(() => {
            if(!loadingBatch){
               setData(demand_batchs)
             }
         },1000)
                 
      //       }, 500);
   }, [id]);
  

   return (
      <>
          <div className="mx-0 md:mx-16 overflow-hidden">
            <div class="drawer drawer-mobile bg-gray-50  ">
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









                         {showModalCsv ? (
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
                                       {/* <Message className='-mt-8'>{demand_batchs?.demandNoticeBatch?.generatedStatus === 'not_yet_started' ? (<p> Please Wait</p>) : demand_batchs?.demandNoticeBatch?.generatedStatus === 'in_progress' ? (<p> Generation in Progress</p>):demand_batchs?.demandNoticeBatch?.generatedStatus === 'failed' ? (<p> failed</p>) : null }</Message> */}
                                       {/* <Message className='-mt-8'>{ demand_batchs?.demandNoticeBatch?.generatedStatus === 'in_progress' ? (<p> Generation in Progress</p>) : null }</Message> */}
                                   
                                       <div class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only"></span>
  <div>
    <span class="font-medium"> <span> {demand_batchs?.demandNoticeBatch?.numberOfEntries}</span> Demand Notice Generation Completed!</span> 
  </div>
</div>
                                     
                                       {/* <h5 className='text-md font-italics text-green-700 text-center'> Downloading Demand  Notice ...</h5> */}
                                       </div> 
                                    
                                    </div>
                                 </div>
                              </div>
                           ) : null}






                        
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
                                       {/* <Message className='-mt-8'>{demand_batchs?.demandNoticeBatch?.generatedStatus === 'not_yet_started' ? (<p> Please Wait</p>) : demand_batchs?.demandNoticeBatch?.generatedStatus === 'in_progress' ? (<p> Generation in Progress</p>):demand_batchs?.demandNoticeBatch?.generatedStatus === 'failed' ? (<p> failed</p>) : null }</Message> */}
                                       {/* <Message className='-mt-8'>{ demand_batchs?.demandNoticeBatch?.generatedStatus === 'in_progress' ? (<p> Generation in Progress</p>) : null }</Message> */}
                                       { demand_batchs?.demandNoticeBatch?.generationStatus === 'in_progress' ? (<div class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Generating <span> {demand_batchs?.demandNoticeBatch?.numberOfEntries}</span>  Demand Notice!</span> 
  </div>
</div>):null}
                                       { demand_batchs?.demandNoticeBatch?.generationStatus === 'successful' ? (<div class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only"></span>
  <div>
    <span class="font-medium"> <span> {demand_batchs?.demandNoticeBatch?.numberOfEntries}</span> Demand Notice Generation Completed!</span> 
  </div>
</div>):null}
                                       { demand_batchs?.demandNoticeBatch?.generationStatus === 'failed' ? (<div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium"><span> {demand_batchs?.demandNoticeBatch?.numberOfEntries}</span> Demand Notice Generation Failed!</span> 
  </div>
</div>):null}
                                       
                                       { demand_batchs?.demandNoticeBatch?.generationStatus === 'successful' ? (<a className='flex justify-center' href={`${demand_batchs?.demandNoticeBatch?.presignedFileUrl}`} target="_blank"><span className='text-center bg-green-700 text-white px-4 py-1 rounded-sm'>Click to Download ...</span></a>):null}
                                       {/* <h5 className='text-md font-italics text-green-700 text-center'> Downloading Demand  Notice ...</h5> */}
                                       </div> 
                                    
                                    </div>
                                 </div>
                              </div>
                           ) : null}

                        <div className="flex justify-between py-4 px-6 text-xl">
                                 
                                   <div className="ml-4">
                                   <h5 className="text-3xl font-bold mb-4"> Print </h5>
                         <button onClick={showHandler} type="button" class=" outline outline-offset-2 hover:text-white outline-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300   rounded-md text-sm px-6 py-4 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                        
                                 
                                 <svg className='h-8 w-8 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"></path>
</svg>
                              </button>
                                   </div>
                                   <div>
                                   <Link to='/demand-notices/batches'>
                                   <div className='bg-white rounded-full p-1 shadow-lg hover:bg-green-600 hover:text-white'>
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
                                   <h5 className="font-bold text-xl"> Total : <span> {demand_batchs?.demandNoticeBatch?.numberOfEntries}</span> </h5>
                                   {/* <CSVLink data={demand_batchs1} > 
                                   
                                   </CSVLink> */}
                                   <button  onClick={showHandlerCsv} className="bg-green-600 hover:bg-green-800 mb-2 px-4 py-2 text-white ">Export as Csv</button>

{/* <CSVDownload data={demand_batchs1} target="_blank" ><button  className="bg-green-600 hover:bg-green-800 mb-2 px-4 py-2 text-white ">Export as Csv</button>
                                   </CSVDownload> */}
                                   {/* <csvlink {...csvreport}>
                                      
                                   </csvlink> */}
                                   
                        </div>
 {  demand_batchs?.demandNoticesList?.slice(0,15)?.map((batch,index) => 
 

 <div key={index} class="flex my-1 flex-row items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div className="bg-green-700 px-4 py-4 text-white text-lg font-bold">
    {index + 1}
 </div>
 
 <div class="flex flex-row justify-between  leading-normal">
     <h6 class="pr-0 pl-2 text-lg font-bold tracking-tight text-green-900 dark:text-white">No:.</h6>
     <h5 class="px-1 text-lg font-bold text-green-700 dark:text-gray-400">{batch.serialNumber}</h5>
 
 </div>

 
</div>
 )
                          
                        }</ul>
                         <div class="col-span-3 -mt-32">
                              <h5 className="font-semibold text-xl mb-2 "> Preview </h5>
                              {success ? (<iframe className="mx-auto overflow-hidden w-[210mm] h-[280mm]" src= {`${url}/demand-notices/template?demandNoticeBatchId=${demand_batchs?.demandNoticeBatch?._id}&tenantId=${tenant?.singleTenant?._id}`}
 width="100%" height="900"></iframe>):<div className='flex justify-center items-center w-[210mm] h-[280mm]'><Loader /></div>}
                              {/* <iframe className="mx-auto overflow-hidden w-[210mm]" src= {'https://api.billable.site/demand-notices/template?demandNoticeBatchId=640edfe7cda61fb66a4bb6d8'}
 width="100%" height="900"></iframe> */}
                         
                         {/* {demand_batchs === "undefined" ? (<Loader />) : } */}
                         
                    
                         </div>
                         </div>
                      
                      
<div className="flex flex-row mx-16">


   


   
   
</div>  
                   {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />"}} ></div> */}

                      
                      
                      </div>
                     


          
{/* {demand_batchs === 'undefined' ? null : demand_batchs.lgaRecord.lgaName} */}

          
<div className='flex justify-center  p-2 text-white mb-2 '><span class="bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-2.5 rounded dark:bg-green-500 dark:text-green-300"> Page {currentPage}</span></div>
                                 <div className='flex justify-center mb-12'>
                                    
                                 <Paginate
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/>                          
</div>



                      

                  </div>

                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               </div>
               {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<< the Sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
               <div class="drawer-side ">
                  <label for="my-drawer-3" class="drawer-overlay"></label>
                  <ul class="menu  overflow-y-auto w-[100px] md:w-[100px] bg-white">
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

export default BatchPreviewScreen;
