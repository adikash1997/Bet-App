import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import { createMuiTheme } from "@material-ui/core/styles";
// import pink from "@material-ui/core/colors/pink";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";

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

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#7986cb"
//     },
//     secondary: pink
//   }
// });

const styles = theme => ({
  card: {
    minWidth: 300,
    minHeight: 500,
    height: 500,
    width: 300,
    margin: 100,
    marginLeft: 150,
    padding: 20
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
    margin: theme.spacing.unit,
    marginLeft: 30,
    marginTop: 30,
    width: 185
  },
  menu: {
    width: 200
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  grow: {
    flexGrow: 1
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="Menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             BlockBet
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
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
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: "#eeeeee" }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                BlockBet
              </Typography>
            </Toolbar>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="secondary"
              centered
            >
              <Tab label="Home" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer />} {/*Home page of BlockBet*/}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen1}
          >
            Bet
          </Button>
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
                margin="normal"
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
        </Grid>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Main);
