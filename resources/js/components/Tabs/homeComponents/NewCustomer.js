import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DateRangePicker } from 'react-date-range';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Nouveuau client',
      },
    },
};

  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Ca',
            data: [10, 114, 200, 100, 93, 8, 70],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Ca net',
            data: [100, 14, 20, 200, 193, 80, 100],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const NewCustomer = () => {
    const [ranges, setRanges] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    });
    
    const handleSelect = (date) => {
      setRanges({
        startDate: new Date(date.selection.startDate),
        endDate: new Date(date.selection.endDate),
        key: date.selection.key,
      })
    }
  
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  
    return (<>
        <div className="--chart">
            <Line options={options} data={data} />
        </div>

        <div className="--date">
            <DateRangePicker
                ranges={[ranges]}
                onChange={handleSelect}
            />
        </div>
    </>);
  };
  export default NewCustomer;
  