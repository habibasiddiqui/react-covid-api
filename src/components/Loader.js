import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';



export default function Loader() {

  return (
    <div>
        <Grid container justify='center' alignContent='center'>
            <Grid item md={5}>
                <CircularProgress />
            </Grid>
        </Grid>
    </div>
  );
}