import React from 'react';
import { Grid, Paper, withStyles, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import useStyle from '../css/Mui.css';
import { FetchTripData } from '../actions'
import { connect } from 'react-redux';
class AllTrips extends React.Component {

    componentDidMount() {
        this.props.FetchTripData();
    }

    tablecell() {

        const { data } = this.props;


        return data.map(d => {

            return (
                <TableRow key={d.id}>
                    <TableCell component="th" scope="row">
                        {d.place}
                    </TableCell>

                    <TableCell align="right">{d.type}</TableCell>
                    <TableCell align="right">{d.date}</TableCell>

                </TableRow>
            )
        })


    }


    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.Back_dashboard} variant="elevation" elevation={3}  >

                <Grid item container justify="center" alignItems="center" alignContent="center">

                    <Grid item>
                        <TableContainer>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>PLACE</TableCell>
                                        <TableCell align="right">Types</TableCell>
                                        <TableCell align="right">Date</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.tablecell()}




                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        )
    }



}

const mapStateToProps = state => {

    return {
        data: Object.values(state.formData)
    }
}


export default withStyles(useStyle)(
    connect(mapStateToProps, { FetchTripData })(AllTrips)
);

