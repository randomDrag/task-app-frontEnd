import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Fab , makeStyles , createMuiTheme ,ThemeProvider } from '@material-ui/core';
import { Add , Home as HomeIcon , ViewList } from '@material-ui/icons';
import Home from './pages/home';


const useStyle = makeStyles({

  root : {
    height : '100vh'
  },
  MenuBarGrid : {
    mob
  }

});

const uiTheme = createMuiTheme({

  palette : {
    
  }

});


function App() {

  const classes = useStyle();
  
  return (
    <ThemeProvider theme={uiTheme}>
    <div className={classes.root}>
      <Grid container alignContent="center" justify="center" sapcing={1} >

        <Grid item container alignContent="center" justify="center" xs={12} md={1} spacing={2} style={{ border: "2px solid red"  , height : '100vh'}}>

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

        <Grid item xs={12} md={11} style={{ border: "2px solid red" }} >
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

export default App;
