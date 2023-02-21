import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Records = ({ data }) => {
  




   return (
     <div>

<div className=' mt-2'>
                      <div class="relative overflow-x-auto mb-20 shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
                
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    ID NO:.
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Email
                </th> */}
                <th scope="col" class="px-6 py-3">
                    LGA
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Acronym
                </th> */}
                <th scope="col" class="px-6 py-3">
                    ABSSIN
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    View
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Print
                </th>
            </tr>
        </thead>
        <tbody>
                                          {data?.reverse()?.map((Specificlist, index) => (
                                            <tr key={Specificlist?.demandNotice?._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.firstName} {Specificlist?.payerRecord?.lastName}
                                            </td>
                                            <td class="px-6 py-4">
                                            {Specificlist?.demandNotice?.serialNumber}
                                            </td>
                                           
                                            {/* <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.email}
                                            </td> */}
                                            <td class="px-6 py-4">
                                            {Specificlist?.lgaRecord?.lgaName}
                                            </td>
                                            {/* <td class="px-6 py-4">
                                            {Specificlist?.lgaRecord?.acronym}
                                            </td> */}
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.abbsin}
                                            </td>
                                            <td class="px-6 py-4">
                                            {Specificlist?.payerRecord?.phoneNumber}
                                            </td>
                                            <td class=" px-6 py-4 ">
                                                <Link  to={`/demand-notices/specific/${Specificlist?.demandNotice?._id}`}  class="font-medium text-white dark:text-green-500 hover:underline">
                                               <button className='bg-yellow-400 px-4 py-1.5 hover:bg-yellow-500 '> view </button>
                                                </Link>
                                               
                                            </td>

                                                {/* <td class="flex items-center px-6 py-4 space-x-3">
                                                        <Link onClick={() => {
                                                            dispatch(demandSpecificDownloadAction(Specificlist?.demandNotice?._id));
                                                            setShowModalPrint(true);
                                                            setTimeout(() => {
                                                                setShowModalPrint(false);
                                                                    
                                                                }, 8000);
                        }} class="font-medium text-green-600 dark:text-green-500 hover:underline">
                        <svg className='h-6 w-6 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"></path>
    </svg>
                        </Link>
                    
                    </td> */}
                                            
                                            {/* <td class="flex items-center px-6 py-4 space-x-3">
                                                <Link to={`/revenues/${revenue.revenueLineCode}/edit`} class="font-medium text-green-600 dark:text-green-500 hover:underline">
                                                <svg className='h-6 w-6 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg>
                                                </Link>
                                               
                                            </td> */}
                                        </tr>
                                          
                                          ))}
                                       </tbody>

                                       
                                       
                               </table>

                              
                               </div>
                               </div>
     </div>
   );
};
 
export default Records;
