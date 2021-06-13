import React from 'react';
import { Grid, Paper, withStyles, FormControl, TextField, Select, InputLabel , Button } from '@material-ui/core';
import { Save} from '@material-ui/icons';
import useStyle from '../css/Mui.css';

class AddTrip extends React.Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            type: ""
        }

    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            ...this.state,
            type: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.Back_dashboard} variant="elevation" elevation={3} style={{ width: "30%" }} >

                <Grid item container justify="center" alignItems='center' alignContent="center" spacing={5} style={{ padding: "20px" }}>

                    <Grid item>

                        <form onSubmit={ e => { e.preventDefault(); console.log(e)} }>
                            <FormControl>
                                <TextField
                                    id="date"
                                    label="date"
                                    type="date"
                                    color="secondary"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue="2017-05-24"

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
                                />


                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
                                    <Select
                                        label="type"

                                        color="secondary"
                                        helperText="type of trip"
                                        value={this.state.type}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'type',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>


                                <Button
                                style={{margin : "30px"}}
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


export default withStyles(useStyle)(AddTrip);