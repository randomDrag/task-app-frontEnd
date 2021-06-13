import React from 'react';

import { Grid, Paper, withStyles, Typography } from '@material-ui/core';
import { FilterHdr, WbSunny } from '@material-ui/icons';
import useStyle from '../css/Mui.css';

class Home extends React.Component {

    constructor(props) {
        super(props);


        this.OtherCards = this.OtherCards.bind(this);

    }


    OtherCards(cards) {
        const { classes } = this.props;

         let ico = < cards.icon  color="primary" style={{ padding: "0 10px" }} /> ;
        return (
            <Grid item container justify='center' alignContent='center' alignItems='center'>

                <Paper className={classes.otherTripcard} variant="elevation" elevation={5}>

                    <Grid container item justify='center' alignContent='center' alignItems='center' style={{ padding: '10px', flexFlow: 'row' }} >
                
                          {ico}
                        <Typography align='center' variant='h6' color="primary" style={{ fontWeight: "lighter" }} >  {cards.nameType}</Typography>

                    </Grid>
                    <Grid item>
                        <Typography align='center' variant='h4' color="primary" style={{ fontWeight: 'normal' }} >  {cards.value}</Typography>
                    </Grid>

                </Paper>

            </Grid>
        )
    }


    render() {

        const { classes } = this.props;


        return (



            <Paper className={classes.Back_dashboard} variant="elevation" elevation={3} >
                <Grid style={{ height: '100%', flexFlow: "column" }} item container   >

                    {/* this is Total Trips card */}
                    <Grid className={classes.root} item container justify='center' alignContent='center' md={12} >
                        <Paper className={classes.totalTripcard} variant="elevation" elevation={5}>

                            <Grid container item justify='center' alignContent='center' alignItems='center' style={{ padding: '10px', flexFlow: 'row' }} >

                                <FilterHdr fontSize='large' />
                                <Typography align='center' variant='h5' style={{ fontWeight: "lighter" }} >  Total Trips</Typography>




                            </Grid>
                            <Grid item>
                                <Typography align='center' variant='h1' color="primary" style={{ fontWeight: 'normal' }} >  45</Typography>
                            </Grid>

                        </Paper>
                    </Grid>

                    {/* this is below cards */}
                    <Grid className={classes.root} item container md={12}  style={{ flexFlow: "row" , margin: "20px"}} >

                    <this.OtherCards nameType="Treaks" value="30" icon={WbSunny}/>
                    <this.OtherCards nameType="Treaks" value="30" icon={WbSunny}/>
                    <this.OtherCards nameType="Treaks" value="30" icon={WbSunny}/>

                    </Grid>

                </Grid>
            </Paper>




        )

    }



}




export default withStyles(useStyle)(Home);