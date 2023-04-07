
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackBarChart = () => {


    var options = {
    plugins: {
      title: {
        display: true,
        text: 'e-Ticket Revenue vs Others'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
      
      var labels = ['e-ticket Revenue', 'Direct Request Revenue'];
      
      var data = {
        labels,
        datasets: [
          {
            label: 'e-Ticket Revenue',
            data: [100,200],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Direct Request Revenue',
            data: [50,50],
            borderColor: 'rgb(1, 255, 0)',
            backgroundColor: 'rgba(1, 255, 0, 0.5)',
          },
        ],
      };
      


    return (
      <Bar data={data} options={options} />
        
    )
}

export default StackBarChart 



