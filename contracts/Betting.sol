pragma solidity >=0.4.22 <0.6.0;

import "./oraclizeAPI.sol";

contract Betting is usingOraclize {
   uint256 public minimumBet;
   uint256 public totalBetsOne;
   uint256 public totalBetsTwo;
   string winner_result;
   //bool private equal_str;
   bytes32 public oraclizeID;
   //uint256 public numberOfBets;
   //uint256 public maxAmountOfBets = 1000;
   address owner;
   address[] winners;
   address payable[] public players;
   
    event betAccpeted(address user, uint amount);
    event Winner(address winner, uint _pool);
	event rollAccpeted(address better, string team);
   
   struct Player {                  //Player structure for placing bet and selection of team
      uint256 amountBet;
      string teamSelected;
   }
   
   // Address of the player and => the user info   
   mapping(address => Player) public playerInfo;
   
   constructor() public  {
       owner = msg.sender;
      //oraclize_setCustomGasPrice(40000000000);
      minimumBet = 100000000000000; //units in wei which is equals to 0.000000001 ethers
   }
   
//   function sendNumberAndAmount (string memory _numberInRangeOf0To1) public payable {
// 	    if (msg.value == amount && participating[msg.sender] == 0) {
// 	       	pool += msg.value;
// 				//an array to hold addresses of betters
// 	       	addr.push(msg.sender);
// 				//an array to hold numbers numbers of betters
//             bet_team.push(_numberInRangeOf0To1);
// 	       	participating[msg.sender] += 1;
// 	        emit betAccpeted(msg.sender, msg.value);
// 	        emit rollAccpeted(msg.sender, _numberInRangeOf0To1);
// 	    } else {
// 	        revert(); //throws if the same person bets against themselves or if they send no ether
// 	    }
// 	}
   
   //query function calls update to send a request to Oracle network
    function query() public payable {
        oraclizeID = oraclize_query("URL", "json(https://www.cricbuzz.com/match-api/livematches.json).matches.\"22459\".winning_team_id");
    }
   
   //callback function is used to get the results from Oracle
    function __callback(bytes32 _oraclizeID, string memory result) public {
        require(msg.sender == oraclize_cbAddress());
        winner_result = result;
        _oraclizeID;
    }
    
    function getWinnerResult() public view returns(string memory){
    return(winner_result);    
    }
    
  function checkPlayerExists(address player) public view returns(bool){
      for(uint256 i = 0; i < players.length; i++){
         if(players[i] == player) 
            return true;
      }
      return false;
  }
  function bet(uint256 _amountbet, string memory _teamSelected) public payable {       //payable is a function modifier
      //The first require is used to check if the player already exist
      require(!checkPlayerExists(msg.sender));      //require() throws exception if the condition is not met and exit from code; returning unused gas
      //The second one is used to see if the value sended by the player is 
      //Higher than the minum value
      require(_amountbet >= minimumBet);     //require() throws exception if the condition is not met and exit from code; returning unused gas
      //msg.value = _amountbet;
      //We set the player informations : amount of the bet and selected team
      playerInfo[msg.sender].amountBet = _amountbet;     //msg.value is the value in wei which is sent in the message
      playerInfo[msg.sender].teamSelected = _teamSelected;
      
      //then we add the address of the player to the players array
      players.push(msg.sender);
      
      emit betAccpeted(msg.sender, msg.value);
      emit rollAccpeted(msg.sender, _teamSelected);
      //at the end, we increment the stakes of the team selected with the player bet
      if (keccak256(abi.encodePacked(_teamSelected)) == keccak256(abi.encodePacked("58"))){
          totalBetsOne += _amountbet;
      }
      else if(keccak256(abi.encodePacked(_teamSelected)) == keccak256(abi.encodePacked("255"))){
          totalBetsTwo += _amountbet;
      }
      else{
          revert();
      }
  }
   
//   //oracle api send a sting back, stringsEqual function is used to see if they are the same
//     function stringsEqual (string memory input) public {
// 		//turning the string to bytes
// 		bytes storage a = bytes(winner_result);
// 		bytes memory b = bytes(input);
// 		uint c = 2;
// 		//checks if lengths are equal
// 		if (a.length != b.length) {
// 			equal_str = false;
// 			c--;
// 	    }
// 	    //checks if values of bytes are equal
// 	    for(uint i; i < a.length; i++ ) {
// 	        if (a[i] != b[i]) {
// 	            equal_str = false;
// 	            c--;
// 	        }
// 	    }
// 	    //check to see if all conditions are met
// 	    if (c == 2) {
// 	        equal_str = true;
// 	    }
// 	}

    function getPlayer(uint indx) public view returns(address) {
        return (winners[indx]);
    }
	
  function distributePrizes(string memory _winner_result) public {
      //We have to create a temporary in memory array with fixed size
      //Let's choose 1000
      uint32 count = 0; //This is the count for the array of winners
      uint256 LoserBet = 0; //This will take the value of all losers bet
      uint256 WinnerBet = 0; //This will take the value of all winners bet
      address addr;
      uint256 Bet;
      address payable playerAddress;
//We loop through the player array to check who selected the winner team
      for(uint256 i = 0; i < players.length; i++){
         playerAddress = players[i];
//If the player selected the winner team
         //We add his address to the winners array
         if(keccak256(abi.encodePacked(playerInfo[playerAddress].teamSelected)) == keccak256(abi.encodePacked(_winner_result))){
            winners[count] = playerAddress;
            count++;
         }
      }
//We define which bet sum is the Loser one and which one is the winner
      if ( keccak256(abi.encodePacked(_winner_result)) == keccak256(abi.encodePacked("58"))){
         LoserBet = totalBetsTwo;
         WinnerBet = totalBetsOne;
      }
      else if(keccak256(abi.encodePacked(_winner_result)) == keccak256(abi.encodePacked("255"))){
          LoserBet = totalBetsOne;
          WinnerBet = totalBetsTwo;
      }
      else{
          revert();
      }
//We loop through the array of winners, to give ethers to the winners
      for(uint256 j = 0; j < count; j++){
          // Check that the address in this fixed array is not empty
         if(winners[j] != address(0))
            addr = winners[j];
            Bet = playerInfo[addr].amountBet;
            //Transfer the money to the user
            //winners[j].transfer(Bet);
      }
      
      delete playerInfo[playerAddress]; // Delete all the players
      players.length = 0; // Delete all the players array
      LoserBet = 0; //reinitialize the bets
      WinnerBet = 0;
      totalBetsOne = 0;
      totalBetsTwo = 0;
    }
    
//     //checkingWinner function is called when you want to compare RandomNumber to betting numbers
// 	function checkingWinner () public{
// 	    bool win = false;
// 	    uint x = 0;
// 			//takes random number generated at wolframAlpha and compares it to the betting number
// 	    while (win == false) {
// 	        stringsEqual(playerInfo[msg.sender].teamSelected);
//             if (equal_str == true) {
// 	            //winners[j].transfer((Bet*(10000+(LoserBet*10000/WinnerBet)))/10000 );
// 	            //emit Winner(addr[x], pool);
// 	            win = true;
// 	        } else {
// 	            x++;
// 	        }
// 	    }
// 	}

    function AmountOne() public view returns(uint256){
      return totalBetsOne;
    }
    function AmountTwo() public view returns(uint256){
      return totalBetsTwo;
    }
}