import React, { useState } from 'react'
import{Card, Grid, Typography, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {CountUp} from 'react-countup';

const useStyles = makeStyles({
    root: {
        color: 'red',
        position: 'flex',
        
    }
});

 export const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    const classes = useStyles();
   
    if(!confirmed){
        return 'Loading....';
    }
    

    
    
    return (
        <div>
            <Grid container spacing={3} m={25} className={classes.root} justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                             <Typography variant="h5"> {confirmed.value}</Typography>
                            <Typography>{new Date(lastUpdate).toDateString}</Typography>
                            <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                {deaths.value}
                            </Typography>
                            <Typography>{new Date(lastUpdate).toDateString}</Typography>
                            <Typography variant="body2">Number of deaths by COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                {recovered.value}
                            </Typography>
                            <Typography>{new Date(lastUpdate).toDateString}</Typography>
                            <Typography variant="body2">Number of recovered cases by COVID-19</Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </div>
    );
}
