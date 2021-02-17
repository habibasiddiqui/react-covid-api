import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { getAllData } from './Api';
import DataCard from './DataCard';
import Countries from './Countries';
import Chart from './Chart';


class Home extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await getAllData();
    //   console.log(data)
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await getAllData(country);

    this.setState({ data, country: country });
  }


  render() {
    const { data, country } = this.state;
    // console.log(data)

    return (
      <div className="">
        <Grid container spacing={2} justify='center' alignItems='center' alignContent='center' >

          <Grid  container spacing={2} justify='center' alignContent='center' alignItems='center' >
          <Grid item sm={6} md={4} lg={3} >
          <Countries handleCountryChange={this.handleCountryChange} />
          </Grid>
          </Grid>

          <Grid item sm={12} md={5} style={{marginBottom: '30px'}} >
            <DataCard data={data} />
          </Grid>

          <Grid item sm={12} md={7} style={{marginBottom: '30px'}}>
            <Chart data={data} country={country} />
          </Grid>

        </Grid>
      </div>
    );
  }
}


export default Home;