import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Fab, ThemeProvider , withStyles} from '@material-ui/core';
import { Add, Home as HomeIcon, ViewList } from '@material-ui/icons';
import Home from './pages/home';
import uiTheme from './theme/uiTheme';
import useStyle from './css/Mui.css'





function App(props) {

  const {classes} = props;

  return (
    <ThemeProvider theme={uiTheme}>
      <div className={classes.root}>
        <Grid container alignContent="center" justify="center" sapcing={1} >

          {/* menu button codes */}

          <Grid className={classes.Mat_Menu} item container alignContent="center" justify="center" alignItems='center' xs={12} md={2} spacing={2} >

            <Grid item>
              <Fab color="primary" aria-label="add">
                <Add />
              </Fab>

            </Grid>

            <Grid item>
              <Fab color="primary" aria-label="Home">
                <HomeIcon />
              </Fab>

            </Grid>

            <Grid item>
              <Fab color="primary" aria-label="all list">
                <ViewList />
              </Fab>

            </Grid>


          </Grid>

        {/* other pages of App */}

          <Grid item container  xs={12} md={10} style={{ border: "2px solid red" , }} >
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </Router>
          </Grid>


        </Grid>



      </div>
    </ThemeProvider>
  );
}

export default withStyles(useStyle)(App);
