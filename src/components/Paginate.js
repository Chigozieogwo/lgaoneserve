import React from 'react';
const Paginate = ({ nPages, currentPage, setCurrentPage })  => {


   const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

   const nextPage = () => {
      if(currentPage !== nPages) 
          setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
      if(currentPage !== 1) 
          setCurrentPage(currentPage - 1)
  }
   
   return (
    
<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a  onClick={prevPage} class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg focus:bg-green-600 hover:bg-green-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>




   



    

       {pageNumbers.map(pgNumber => (
                   <li  key={pgNumber}  className= {` ${currentPage === pgNumber ? 'focus' : ''}    ${currentPage === pgNumber ? 'focus:bg-green-600' : ''}`} >
                   <a  onClick={() => setCurrentPage(pgNumber)}  class="px-3 py-2 leading-tight cursor-pointer text-gray-500 bg-white active:bg-green-600 border border-gray-300 hover:bg-green-600 hover:text-white             focus:outline-none focus:ring focus:ring-violet-300                 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> {pgNumber}</a>
                 </li>
                ))}





   
    
    
    <li>
      <a  onClick={nextPage} class="px-3  py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg focus:bg-green-600 hover:bg-green-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

   );
};
 
export default Paginate;