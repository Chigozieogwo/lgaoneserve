import React from 'react';
const Paginate = ({ nPages, currentPage, setCurrentPage })  => {

  let pageNumbers;
   const numberPages = parseInt(nPages);

if (numberPages >= 0) {
   pageNumbers = [...Array(numberPages + 1)?.keys()]?.slice(1);
}
else {
  // Handle the case where nPages is negative
  console.log(numberPages)
}

  //  const pageNumbers = [...Array(nPages + 1)?.keys()]?.slice(1)

   const nextPage = () => {
      if(currentPage !== nPages) 
          setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
      if(currentPage !== 1) 
          setCurrentPage(currentPage - 1)
  }
   
   return (
    
<nav aria-label="Page navigation example ">
  <ul class="inline-flex -space-x-px">
    <li>
      <a  onClick={prevPage} class="px-3 cursor-pointer py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg focus:bg-green-600 hover:bg-green-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>


{pageNumbers?.slice(currentPage -1 ,currentPage +2).map(pgNumber => (
                   <li  key={pgNumber }  >
                   <a  onClick={() => setCurrentPage(pgNumber)} className={`${
                    currentPage === pgNumber
                      ? "bg-green-500 text-white border border-1 border-green-500 cursor-pointer "
                      : "bg-white text-gray-500 border border-1 border-gray-300 cursor-pointer  focus:bg-green-500 hover:bg-green-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  } py-2 px-4 rounded mx-0.5`}  > {pgNumber}</a>
                 </li>
                ))}
 
    
    <li>
      <a  onClick={nextPage} class="px-3  py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg focus:bg-green-600 hover:bg-green-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

   );
};
 
export default Paginate;