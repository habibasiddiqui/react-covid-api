import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
// import '../index.css';


export default function MediaCard({title, value, color, bgColor, hoverColor}) {
  const [hover, setHover] = useState(false);
  let temp_hover = hover ? hoverColor : bgColor ;


  return (
    <Card className='card' variant="outlined" style={{backgroundColor: temp_hover}} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
      <CardContent>

        <Typography variant="h6" component="h2"style={{color: color}}>
          {title}
        </Typography>
       
        <Typography variant="body1" component="p" style={{color: color}}>
          <CountUp start={1000000} end={value} duration={0.5}></CountUp>
        </Typography>

      </CardContent>
    </Card>
  );
}

