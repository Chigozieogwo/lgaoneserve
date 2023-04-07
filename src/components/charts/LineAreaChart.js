
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const LineAreaChart = () => {


  
    var options =  {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' ,
        },
        title: {
          display: true,
          text: 'Revenue Distribution (Live data stream)',
        },
      },
  };
  
      var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
      
      var data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Revenue',
            data: [1200000,5000000,1500000,4500000,4000000,3200000,5000000,6500000,2250000,5500000,3100000,4000000],
            borderColor: 'rgb(1, 200, 32)',
            backgroundColor: 'rgba(1, 200, 32, 0.5)',
            tension: 0.4,
            pointRadius: 5,
          },
        ],
      };
      
      
      // const gradient = canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
      // gradient.addColorStop(0, "rgba(255, 99, 132, 0.5)"); // start color
      // gradient.addColorStop(0.5, "rgba(255, 159, 64, 0.5)"); // middle color
      // gradient.addColorStop(1, "rgba(255, 205, 86, 0.5)"); // end color

    return (
            <Line options={options} data={data}  />
        
    )
}

export default LineAreaChart 



