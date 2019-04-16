import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { createMuiTheme } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import Avatar from '@material-ui/core/Avatar';
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
// import dummy from "../components/test1";

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
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#8bc34a" } // This is just green.A700 as hex.
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
  smallcard: {
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
  // avatar: {
  //   margin: 10,
  //   width: 60,
  //   height: 60,
  // },
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
    flexGrow: 1,
    paddingTop: 45
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
      openf3: false,
      openf4: false,

      value: 0,
      name1: "",
      name2: "",
      name3: "",
      result: "",
      id: 0,
      amt1: 0,
      amt2: 0,
      amt3: 0
    };
  }
  handleClickOpen1 = () => {
    this.setState({ openf1: true });
  };
  handleClickOpen2 = () => {
    this.setState({ openf2: true });
  };
  handleClickOpen3 = () => {
    this.setState({ openf3: true });
  };
  handleClickOpen4 = () => {
    this.setState({ openf4: true });
  };
  handleClose1 = () => {
    this.setState({ openf1: false, name1: "", amt1: null });
  };
  handleClose2 = () => {
    this.setState({ openf2: false, name2: "", amt2: null });
  };
  handleClose3 = () => {
    this.setState({ openf3: false, name3: "", amt3: null });
  };
  handleClose4 = () => {
    this.setState({ openf4: false, result: "", id: null });
  };
  render() {
    const { classes } = this.props;
    //const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            {/* <img alt="Logo" src="dummy" /> */}
            <Typography variant="h3" color="inherit" className={classes.grow}>
              BlockBet
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.root} elevation={1} style={{ marginTop: 50 }}>
          <Typography variant="h2" component="h2">
            Matches to Bet
          </Typography>
          <br />
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
                      <Typography variant="h5" component="h5" color="secondary">
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
                      <Typography variant="h5" component="h5" color="secondary">
                        Status : Open
                      </Typography>
                    </MuiThemeProvider>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={this.handleClickOpen2}
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
                      <Typography variant="h5" component="h5" color="secondary">
                        Status : Open
                      </Typography>
                    </MuiThemeProvider>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={this.handleClickOpen3}
                    >
                      Bet
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Paper>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h3" component="h3">
            For Match Result Verification
          </Typography>
          <MuiThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleClickOpen4}
            >
              Submit Result
            </Button>
          </MuiThemeProvider>
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
              value={this.state.name1}
              onChange={this.handleChange("name1")}
              variant="outlined"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <br />
            <DialogContentText>Bet Amount</DialogContentText>
            <TextField
              id="outlined-name"
              label="Bet Amount"
              className={classes.textField}
              value={this.state.amt1}
              onChange={this.handleChange("amt1")}
              margin="normal"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              InputLabelProps={{
                shrink: true
              }}
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


        <Dialog
          open={this.state.openf2}
          onClose={this.handleClose2}
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
              value={this.state.name2}
              onChange={this.handleChange("name2")}
              variant="outlined"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <br />
            <DialogContentText>Bet Amount</DialogContentText>
            <TextField
              id="outlined-name"
              label="Bet Amount"
              className={classes.textField}
              value={this.state.amt2}
              onChange={this.handleChange("amt2")}
              margin="normal"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose2} color="primary">
              Bet
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={this.state.openf3}
          onClose={this.handleClose3}
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
              value={this.state.name3}
              onChange={this.handleChange("name3")}
              variant="outlined"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <br />
            <DialogContentText>Bet Amount</DialogContentText>
            <TextField
              id="outlined-name"
              label="Bet Amount"
              className={classes.textField}
              value={this.state.amt3}
              onChange={this.handleChange("amt3")}
              margin="normal"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose3} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose3} color="primary">
              Bet
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={this.state.openf4}
          onClose={this.handleClose4}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Provide Result</DialogTitle>
          <DialogContent>
            <DialogContentText>Winning Team Name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Team name"
              value={this.state.result}
              onChange={this.handleChange("result")}
              variant="outlined"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <br />
            <DialogContentText>Match ID</DialogContentText>
            <TextField
              id="outlined-name"
              label="ID"
              className={classes.textField}
              value={this.state.id}
              onChange={this.handleChange("id")}
              margin="normal"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose4} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose4} color="primary">
              Submit
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
