import React, {useEffect, useState} from 'react'
import { Line,Bar } from 'react-chartjs-2';
import {getDailyStatus} from './Api';



const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [daily,setdaily]=useState([]);
    useEffect(
      () =>{
       async function forData(){
        const myData = await getDailyStatus();
       // console.log(myData);
        setdaily(myData)
  
       }//forData end
       forData();
      } ,[]
    ); //useEffect end

  const barChart = (
    confirmed ? (
      <Bar
        data={{
            labels: ['Confirmed', 'Deaths', 'Recovered'],
            datasets: [{
                backgroundColor: ['#3498DB', '#E74C3C', '#16A085'],
                hoverBackgroundColor: ['#2874A8', '#9F2F23', '#0A735E'],
                data: [confirmed.value, deaths.value, recovered.value]
            }]
        }} 
        options={{
            // legend: {
            //     display: true,
            //     position: "top"
            // },
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    daily[0] ? (
      <Line
        data={{
          labels: daily.map(({ date }) => date),
          datasets: [{
            data: daily.map((data) => data.confirmed),
            label: 'Confirmed',
            borderColor: '#3498DB',  
            backgroundColor: 'rgba(52,152,219, 0.5)',
            fill: true,
          }, {
            data: daily.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#E74C3C',
            backgroundColor: 'rgb(231,76,60, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return(
        <div className='container' >
      {country ? barChart : lineChart}

       </div>

    )
}
export default Chart;