import React from 'react';

import { Grid, Paper, withStyles, Typography } from '@material-ui/core';
import { FilterHdr } from '@material-ui/icons';
import useStyle from '../css/Mui.css';

class Home extends React.Component {

    constructor(props) {
        super(props);




    }


    render() {

        const { classes } = this.props;


        return (


            <Grid container justify='center' alignContent='center' alignItems='center'>
                <Paper className={classes.Back_dashboard} variant="elevation" elevation={3} >
                    <Grid className={classes.root} item container justify='center' alignContent='center' alignItems='center' >

                        {/* this is Total Trips card */}
                        <Grid className={classes.root} item container justify='center' alignContent='center' alignItems='center' md={12}>
                            <Paper className={classes.totalTripcard} variant="elevation" elevation={5}>

                                <Grid container item direction='row'>
                                    
                                        <FilterHdr fontSize='large' />
                                        <Typography align='center' variant='h5'  >  Total Trips</Typography>
                                    

                                </Grid>
                                <Grid item>
                                <Typography align='center' variant='h6'color  >  45</Typography>
                                </Grid>

                            </Paper>
                        </Grid>

                        {/* this is below cards */}
                        <Grid item container md={12}>

                        </Grid>

                    </Grid>
                </Paper>


            </Grid>


        )

    }



}




export default withStyles(useStyle)(Home);