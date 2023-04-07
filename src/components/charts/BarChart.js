
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {


    var options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 0,
            
          },
        },
        responsive: true,
       
        plugins: {
          legend: {
            display: false,
          },
          labels: {
            render: "value",
            fontColor: "#fff",
            position: "top",
          },
          title: {
            display: false,
            // text: 'The various revenues',
          },
        },
      };
      
      var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
      // var labels = ['Tender Fees', 'Markey Levy', 'Shop Rate ', 'Course Fee ', 'Assets Disposal'];
      var data = {
        labels,
        datasets: [
        //   {
        //     label: 'Dataset 1',
        //     data: [20,30,10,90,75,80,30],
        //     borderColor: 'rgb(255, 99, 132)',
        //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //   },
          {
            // label: 'revenue',
            data: [10000000,40000000,15000000,25000000,50000000,5000000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235)',
          },
        ],
      };
      


    return (
      <div className='px-4'>
            <Bar options={options} data={data}  />
            </div>
    
    )
}

export default BarChart 



