import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Fab, ThemeProvider, withStyles } from '@material-ui/core';
import { Add, Home as HomeIcon, ViewList } from '@material-ui/icons';
import { useHistory, Link ,Redirect } from 'react-router-dom';
import Home from './pages/home';
import uiTheme from './theme/uiTheme';
import useStyle from './css/Mui.css'
import AddTrip from './pages/add';




function App(props) {

  const { classes } = props;

 

  return (
    <ThemeProvider theme={uiTheme}>
      <Router>
      <div className={classes.root}>
        <Grid container alignContent="center" justify="center" sapcing={1} >

          {/* menu button codes */}

          <Grid className={classes.Mat_Menu} item container alignContent="center" justify="center" alignItems='center' xs={12} md={2} spacing={2} >

            <Grid item>
              <Link to="/add">
                <Fab color="primary" aria-label="add">
                  <Add />
                </Fab>
                </Link>
            </Grid>

            <Grid item>
              <Link to='/'>
              <Fab color="primary" aria-label="Home">
                <HomeIcon />
              </Fab>
              </Link>
            </Grid>

            <Grid item>
              <Fab color="primary" aria-label="all list">
                <ViewList />
              </Fab>

            </Grid>


          </Grid>

          {/* other pages of App */}

          <Grid item container justify='center' alignContent='center' alignItems='center' xs={12} md={10} style={{ border: "2px solid red", }} >
            
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={AddTrip} />
              </Switch>
            
          </Grid>


        </Grid>



      </div>
      </Router>
    </ThemeProvider>
  );
}

export default withStyles(useStyle)(App);
