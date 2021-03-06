import React from 'react';
import { Grid, Paper, withStyles, FormControl, TextField, Select, InputLabel , Button } from '@material-ui/core';
import { Save} from '@material-ui/icons';
import useStyle from '../css/Mui.css';
import { AddTripData} from '../actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom';
class AddTrip extends React.Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            type: "",
            place : "",
            date : ""
        }

     
    }

    handleChange(event) {
    
        event.preventDefault();

        this.props.AddTripData(this.state)

        this.setState(
            {
                type: "",
                place : "",
                date : ""
            }
        );

      this.props.history.push('/');

    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.addingPage} variant="elevation" elevation={3}  >

                <Grid item container justify="center" alignItems='center' alignContent="center" spacing={5} style={{ padding: "20px" }}>

                    <Grid item>

                        <form  >
                            <FormControl>
                                <TextField
                                    id="date"
                                    label="date"
                                    type="date"
                                    color="secondary"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={e => this.setState({date : e.target.value})}
                                    value={this.state.date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField
                                    color="secondary"
                                    margin="normal"
                                    variant="outlined"
                                    id="standard-helperText"
                                    label="Place"
                                    defaultValue="Delhi"
                                    helperText="city name or place name"
                                    value={this.state.place}
                                    onChange={e => this.setState({place : e.target.value})}
                                />


                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
                                    <Select
                                        color="secondary"
                                        value={this.state.type}
                                        onChange={ e => { this.setState({type : e.target.value})}} >
                                        <option aria-label="None" value="" />
                                        <option value="Club">club</option>
                                        <option value="Treaks">Treaks</option>
                                        <option value='Tropics'>Tropics</option>
                                    </Select>
                                </FormControl>


                                <Button
                                style={{margin : "30px"}}
                                   onClick={this.handleChange}
                                   type="submit"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    className={classes.button}
                                    startIcon={<Save />}
                                >
                                    Save
      </Button>
                            </FormControl>

                        </form>
                    </Grid>




                </Grid>

            </Paper>
        );

    }



}


export default withStyles(useStyle)(
    
    connect(null , {AddTripData})(AddTrip)
    
    );