import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import { Divider } from '@material-ui/core';


export default function MediaCard({title, value, color, bgColor, hoverColor, lastUpdate}) {
  const [hover, setHover] = useState(false);
  let temp_hover = hover ? hoverColor : bgColor ;


  return (
    <Card className='card' variant="outlined" style={{backgroundColor: temp_hover}} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
      <CardContent>

        <Typography variant="h6" component="h2"style={{color: color}}>
          {title}
        </Typography>
       
        <Typography variant="body1" component="p" style={{marginBottom: '10px',color: color}}>
          <CountUp start={1000000} end={value} duration={0.5}></CountUp>
        </Typography>

        <Divider />

        <Typography variant="body2" component="p" style={{marginTop: '10px', color: color}}>
          Dated: {new Date(lastUpdate).toDateString()}
        </Typography>

      </CardContent>
    </Card>
  );
}


