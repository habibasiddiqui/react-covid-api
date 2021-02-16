import React from 'react'
import Loader from './Loader';
import MediaCard from './MediaCard'

function DataCard({ data }) {

  const { confirmed, recovered, deaths, lastUpdate } = data;

  if(!confirmed && !recovered && !deaths){
    return <Loader />
  }


    return (
        <div>
            <MediaCard title='Confirmed Cases' lastUpdate={lastUpdate} value={confirmed.value} bgColor='#3498DB' hoverColor='#2874A8' />
            <MediaCard title='Deaths' lastUpdate={lastUpdate} value={deaths.value} color='wheat' bgColor='#E74C3C' hoverColor='#9F2F23' />
            <MediaCard title='Recovered' lastUpdate={lastUpdate} value={recovered.value} bgColor='#16A085 ' color='whitesmoke' hoverColor='#0A735E' />           
        </div>
    )
}

export default DataCard
