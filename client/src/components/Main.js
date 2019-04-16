import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { createMuiTheme } from "@material-ui/core/styles";
//import lightGreen from "@material-ui/core/colors/lightGreen";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
//import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8bc34a",
      secondary: { main: "#11cb5f" }
    }
  },
  typography: { useNextVariants: true }
});

const styles = theme => ({
  card: {
    minWidth: 250,
    minHeight: 250,
    height: 275,
    width: 275,
    // margin: 100,
    // marginLeft: 150,
    marginBottom: 50,
    padding: 30
  },
  smallcard:{
    minWidth: 250,
    minHeight: 50,
    height: 50,
    width: 275,
    margin: 100,
    marginTop: 75,
    padding: 25,
    paddingTop: 40
  },
  actions: {
    display: "flex"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  button: {
    margin: 100,
    marginTop: 30,
    width: 200
  },
  header: {
    height: 150
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  grow: {
    flexGrow: 1
  }
});

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired
// };

class Main extends React.Component {
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  constructor(props) {
    super(props);
    this.state = {
      openf1: false,
      openf2: false,

      value: 0,
      name: "",
      result: "",
      amt: 0
    };
  }
  handleClickOpen1 = () => {
    this.setState({ openf1: true });
  };
  handleClickOpen2 = () => {
    this.setState({ openf2: true });
  };
  handleClose1 = () => {
    this.setState({ openf1: false });
  };
  handleClose2 = () => {
    this.setState({ openf2: false });
  };
  render() {
    const { classes } = this.props;
    //const { value } = this.state;

    return (
      <div className={classes.root}>
        
          <AppBar position="static" className={classes.header}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                BlockBet
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper
            className={classes.root}
            elevation={1}
            style={{ marginTop: 50 }}
          >
          
            <Typography variant="h2" component="h2">
              Matches to Bet
            </Typography>
            <br/>
            <Grid container direction="row" justify="center" alignItems="center">

            <Paper>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
            <Card className={classes.smallcard}>
              <Typography variant="h5" component="h3">
                Match 1
              </Typography>
            </Card>
              <Card className={classes.card}>
                <CardHeader title="1 VS 2" subheader="ID : 001" />
                <CardContent>
                  <MuiThemeProvider theme={theme}>                   
                      <Typography variant="h5" component="h5" color="primary">
                      Status : Open
                      </Typography>
                    
                  </MuiThemeProvider>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClickOpen1}
                  >
                    Bet
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Paper>

            <Paper>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
            <Card className={classes.smallcard}>
              <Typography variant="h5" component="h3">
                Match 2
              </Typography>
            </Card>
              <Card className={classes.card}>
                <CardHeader title="1 VS 2" subheader="ID : 002" />
                <CardContent>
                  <MuiThemeProvider theme={theme}>                   
                      <Typography variant="h5" component="h5" color="primary">
                      Status : Open
                      </Typography>
                    
                  </MuiThemeProvider>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClickOpen1}
                  >
                    Bet
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Paper>


            <Paper>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
            <Card className={classes.smallcard}>
              <Typography variant="h5" component="h3">
                Match 3
              </Typography>
            </Card>
              <Card className={classes.card}>
                <CardHeader title="1 VS 2" subheader="ID : 003" />
                <CardContent>
                  <MuiThemeProvider theme={theme}>                   
                      <Typography variant="h5" component="h5" color="primary">
                      Status : Open
                      </Typography>
                    
                  </MuiThemeProvider>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClickOpen1}
                  >
                    Bet
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </Paper>
            </Grid>
          </Paper>

          <Dialog
            open={this.state.openf1}
            onClose={this.handleClose1}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Bet on a Match</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter Team Name</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Team name"
                value={this.state.name}
                onChange={this.handleChange("name")}
                variant="outlined"
                type="text"
                fullWidth
              />
              <br />
              <br />
              <DialogContentText>Bet Amount</DialogContentText>
              <TextField
                id="outlined-name"
                label="Bet Amount"
                className={classes.textField}
                value={this.state.amt}
                onChange={this.handleChange("amt")}
                margin="normal"
                variant="outlined"
                type="number"
                InputProps={{ inputProps: { min: 0, max: 100 } }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose1} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose1} color="primary">
                Bet
              </Button>
            </DialogActions>
          </Dialog>
        
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Main);
