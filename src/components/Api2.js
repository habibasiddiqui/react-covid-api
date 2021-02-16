import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

function Api2() {
    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    useEffect(
        () => {
            axios.get('https://covid19.mathdro.id/api')
                .then(
                    res => {
                        console.log(res.data);
                        setConfirmed(res.data.confirmed.value);
                        setRecovered(res.data.recovered.value);
                        setDeaths(res.data.deaths.value);
                    }
                )
        }, []
    )


    return (
        <>
            <Grid container spacing={2} justify='center' alignItems='center'>

                <Grid item xs={12} md={5} className='grid-div'>
                    <MediaCard title='Confirmed Cases' value={confirmed} bgColor='#3498DB' hoverColor='#2874A8' />
                    <MediaCard title='Deaths' value={deaths} color='wheat' bgColor='#E74C3C' hoverColor='#9F2F23' />
                    <MediaCard title='Recovered' value={recovered} bgColor='#16A085 ' color='whitesmoke' hoverColor='#0A735E' />
                </Grid>

                <Grid item xs={12} md={7} className='grid-div'>
                    <Doughnut data={{
                        labels: ['Confirmed', 'Deaths', 'Recovered'],
                        datasets: [{
                            backgroundColor: ['#3498DB', '#E74C3C', '#16A085'],
                            hoverBackgroundColor: ['#2874A8', '#9F2F23', '#0A735E'],
                            data: [confirmed, deaths, recovered]
                        }]
                    }} options={{
                        legend: {
                            display: true,
                            position: "top"
                        }
                    }} />
                </Grid>

            </Grid>
        </>
    )
}

export default Api2
