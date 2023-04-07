
import React from 'react';
import {
  Chart as ChartJS,
    ArcElement,
    Legend,
  Tooltip,
  Filler,

} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({lgaName,lgaAmount}) => {

    const options = {
        cutoutPercentage: 30,
        rotation: 210,
        circumference: 300,
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return `${data.labels[tooltipItem.index]}: ${data.datasets[0].data[tooltipItem.index]}`;
            },
          },
        },
        
        plugins: {
          title: {
            display: true,
            text: lgaName,
            position: 'bottom',
            fontStyle: 'bold',
           
            },
            
        },
      };
  
  
      var data ={
        // labels: [ 'Red',
        // 'Blue',
        // 'Yellow'],
        datasets:[{
            label: 'Revenue',
            cutout: "65%",
            data: lgaAmount,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
      };
      
      
      // const gradient = canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
      // gradient.addColorStop(0, "rgba(255, 99, 132, 0.5)"); // start color
      // gradient.addColorStop(0.5, "rgba(255, 159, 64, 0.5)"); // middle color
      // gradient.addColorStop(1, "rgba(255, 205, 86, 0.5)"); // end color

    return (
        <div className='md:w-44 md:h-44 w-64 h-64'>
            <Doughnut  options={options}  data={data}  />
        </div>
    )
}

export default DoughnutChart 



