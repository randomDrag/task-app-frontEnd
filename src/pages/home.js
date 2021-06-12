import React from 'react';

import { Grid, Paper, withStyles, Typography } from '@material-ui/core';

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
                    <Grid item container >

                        {/* this is Total Trips card */}
                        <Grid>
                            <Paper variant="elevation" elevation={5}>

                                <Grid items>
                                    <Typography>Total Trips</Typography>
                                </Grid>
                                <Grid items>

                                </Grid>

                            </Paper>
                        </Grid>

                        {/* this is below cards */}
                        <Grid>

                        </Grid>

                    </Grid>
                </Paper>


            </Grid>


        )

    }



}




export default withStyles(useStyle)(Home);