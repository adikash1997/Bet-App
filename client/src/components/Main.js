import React from 'react';
import PropTypes from "prop-types";
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import Betting from  '../contracts/Betting'
//import getWeb3 from "./utils/getWeb3";
import { withStyles } from "@material-ui/core/styles";

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});
const styles = theme => ({
    card: {
        minWidth: 300,
        minHeight: 500,
        height: 500,
        width: 300,
        margin: 100,
        padding: 25
      }

});
class Main extends React.Component {
    // componentDidMount = async () => {
    //     try {
    //       // Get network provider and web3 instance.
    //       const web3 = await getWeb3();
    
    //       // Use web3 to get the user's accounts.
    //       const accounts = await web3.eth.getAccounts();
    
    //       // Get the contract instance.
    //       const networkId = await web3.eth.net.getId();
    //       const deployedNetwork = Betting.networks[networkId];
    //       const instance = new web3.eth.Contract(
    //         Betting.abi,
    //         deployedNetwork && deployedNetwork.address
    //       );
    
    //       // Set web3, accounts, and contract to the state, and then proceed with an
    //       // example of interacting with the contract's methods.
    //       this.setState({ web3, accounts, contract: instance });
    //     } catch (error) {
    //       // Catch any errors for any of the above operations.
    //       alert(
    //         `Failed to load web3, accounts, or contract. Check console for details.`
    //       );
    //       console.error(error);
    //     }
    //   };
    // return (
    //   <Button variant="contained" color="primary">
    //     Hello World
    //   </Button>
      
    // );
  }

  Main.propTypes = {
    classes: PropTypes.object.isRequired
  };
  export default withStyles(styles)(Main);