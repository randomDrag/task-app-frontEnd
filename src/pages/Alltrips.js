import React from 'react';
import {
    Grid, Paper, RadioGroup,
    withStyles, Radio, TableContainer, Table, TableHead,
    TableRow, TableCell, TableBody, Typography,
    FormControl, FormLabel, FormControlLabel
} from '@material-ui/core';

import useStyle from '../css/Mui.css';
import { FetchTripData } from '../actions'
import { connect } from 'react-redux';
class AllTrips extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedValue: "all"
        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.props.FetchTripData();
    }

    handleChange(event) {

        this.setState({
            selectedValue: event.target.value
        });
        console.log(this.state.selectedValue);
    };

    tablecell() {

        const { data, classes } = this.props;

        let dat = data;

        const treaks = data.filter(d => {
            if (d.type === "Treaks") {
                return true;
            }
        });
        const Tropics = data.filter(d => {
            if (d.type === "Tropics") {
                return true;
            }
        });

        const Club = data.filter(d => {
            if (d.type === "Club") {
                return true;
            }
        })

        switch (this.state.selectedValue) {

            case "Treaks":
                dat = treaks;
                break;

            case "Tropics":
                dat = Tropics;
                break;
            case "Club":
                dat = Club;
                break;

            default:
                dat = data;

        }


        return dat.map(d => {

            return (
                <TableRow key={d.id}>
                    <TableCell className={classes.cell} component="th" scope="row">
                        {d.place}
                    </TableCell>

                    <TableCell className={classes.cell} align="right">{d.type}</TableCell>
                    <TableCell className={classes.cell} align="right">{d.date}</TableCell>

                </TableRow>
            )
        })


    }


    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.Back_dashboard} variant="elevation" elevation={3}  >

                <Grid item container justify="center" alignItems="center" alignContent="center" spacing={2} className={classes.AllTripsData} >
                    {/* heading */}

                    <Grid item>
                        <Typography align='center' variant='h3' color="secondary" style={{ fontWeight: 'normal' }} >All Trips</Typography>
                    </Grid>

                    {/* filter button */}

                    <Grid item>

                        <FormControl color="secondary" component="fieldset">
                            <RadioGroup row aria-label="position" value={this.state.selectedValue} onChange={this.handleChange}>

                                <FormControlLabel

                                    value="All"
                                    control={<Radio color="secondary" />}
                                    label="All"
                                    labelPlacement="start"
                                />

                                <FormControlLabel
                                    value="Treaks"
                                    control={<Radio color="secondary" />}
                                    label="Treaks"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="Club"
                                    control={<Radio color="secondary" />}
                                    label="Club"
                                    labelPlacement="start"
                                />
                                 <FormControlLabel
                                    value="Tropics"
                                    control={<Radio color="secondary" />}
                                    label="Tropics"
                                    labelPlacement="start"
                                />


                            </RadioGroup>
                        </FormControl>


                    </Grid>


                    {/* table  */}
                    <Grid item style={{ width: "100%" }}>
                        <TableContainer>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.cell} >Place</TableCell>
                                        <TableCell className={classes.cell} align="right">Types</TableCell>
                                        <TableCell className={classes.cell} align="right">Date</TableCell>

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

