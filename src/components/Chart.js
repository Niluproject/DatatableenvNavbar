import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'Red',
              'Blue',
              'Yellow',
              'Green',
              'Purple',
              'Orange',
            ],
            borderColor: [
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive:true,
        maintainAspectRatio:false,
      }
    return (
        <div className="App">
        <div>
            <Pie height={450} width={1288} data={data} options={options} />
        </div>
        </div>
    )
}

export default Chart