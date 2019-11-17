import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
        currentPlayer: this.getStartingPlayer(),
        gameType:3  
    }
  }

  initializeGame = () => {
    this.setState({gameState:
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    });
  }

  generateRandomNumber() {
    var RandomNumber = Math.floor(Math.random() * 10) +1;
    return RandomNumber;
  }
  getStartingPlayer(){
    var randomNumber = this.generateRandomNumber()
    if(randomNumber >= 5)
    {
      return 1;
    }
    else
    {
      return -1;
    }

  }
  componentDidMount() {
    this.initializeGame();
  }


  generateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 10) +1;
    return RandomNumber;
  }


  setGameMode = (mode) =>{
    this.state.gameType = mode;
    this.initializeGame();
  }

  onTilePress = (row,col) => {

    if(this.state.gameState[row][col] != 0) { return; }

    var currentPlayer = this.state.currentPlayer;

    // Set the corret tile
    var arr = this.state.gameState.slice();
    arr[row][col] =currentPlayer;
    this.setState({gameState:arr});
    
    //Switch to other player
    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});
    

    var winner = this.getWinner();
    if(winner == 1)
    {
      Alert.alert("Player 1 is the winner");
      this.initializeGame();
    }
    else if(winner == -1)
    {
      Alert.alert("Player 2 is the winner");
      this.initializeGame();
    }

  }

  getWinner = () =>{
    const Num_Tiles = this.state.gameType;
    var arr = this.state.gameState;

    var sum=0;
    //check rows

    for(var i=0; i<Num_Tiles; i++)
    {
      sum=0;
      for(var j=0; j<Num_Tiles; j++)
      {
        sum+= arr[i][j];
      }
      if (sum == Num_Tiles){return 1}
      else if( sum == Num_Tiles*-1) { return -1}

    }

    //check columns

    for(var j=0; j<Num_Tiles; j++)
    {
      sum=0;
      for(var i=0; i<Num_Tiles; i++)
      {
        sum+= arr[i][j];
      }
      if (sum == Num_Tiles){return 1}
      else if( sum == Num_Tiles*-1) { return -1}
    }

    //check diagonals
 
    sum=0;
    for(var i=0; i<Num_Tiles; i++)
    {
        sum+=arr[i][i];
    }
    if (sum == Num_Tiles){return 1}
    else if( sum == Num_Tiles*-1) { return -1}

    sum=0;
    var j=0;
    for(var i=Num_Tiles-1; i>=0; i--)
    {

      sum+=arr[i][j];//0,2; 1,1; 2,0;
      j++;

    }
    if (sum == Num_Tiles){return 1}
    else if( sum == Num_Tiles*-1) { return -1}
  }



  renderIcon = (row,col) => {
    var value = this.state.gameState[row][col];
    switch(value)
    {
      case 1: return <Icon name="x" size={30} color="green" />;
      case -1: return <Icon name="circle" size={30} color="red" />;
      default : return <View/>;
    }
  }
  render() {
    var gameType = this.state.gameType;
    switch(gameType)
    {
      case 3:   return(
        <View style={styles.container}>
          <Button title="Game Type 4" onPress={()=> this.setGameMode(4)}/>
          <Button title="Game Type 5" onPress={()=> this.setGameMode(5)}/>
        <View style= {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={styles.tile}>
              {this.renderIcon(0,0)}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={styles.tile}>
              {this.renderIcon(0,1)}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={styles.tile}>
              {this.renderIcon(0,2)}
            </TouchableOpacity>
        </View>


        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={styles.tile}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={styles.tile}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={styles.tile}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
        </View>
        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={styles.tile}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={styles.tile}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={styles.tile}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
        </View>

        <Button title="New Game" onPress={()=> this.initializeGame()}/>

      </View>
      );
      case 4:    return(
        <View style={styles.container}>
          <Button title="Game Type 3" onPress={()=> this.setGameMode(3)}/>
          <Button title="Game Type 5" onPress={()=> this.setGameMode(5)}/>
        <View style= {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={styles.tile}>
              {this.renderIcon(0,0)}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={styles.tile}>
              {this.renderIcon(0,1)}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={styles.tile}>
              {this.renderIcon(0,2)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,3)} style={styles.tile}>
              {this.renderIcon(0,3)}
            </TouchableOpacity>
        </View>


        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={styles.tile}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={styles.tile}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={styles.tile}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,3)} style={styles.tile}>
              {this.renderIcon(1,3)}
            </TouchableOpacity>
        </View>
        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={styles.tile}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={styles.tile}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={styles.tile}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,3)} style={styles.tile}>
              {this.renderIcon(2,3)}
            </TouchableOpacity>
        </View>
        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(3,0)} style={styles.tile}>
            {this.renderIcon(3,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,1)} style={styles.tile}>
            {this.renderIcon(3,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,2)} style={styles.tile}>
            {this.renderIcon(3,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,3)} style={styles.tile}>
              {this.renderIcon(3,3)}
            </TouchableOpacity>
        </View>

        <Button title="New Game" onPress={()=> this.initializeGame()}/>

      </View>

      );
      case 5: return(
        <View style={styles.container}>
          <Button title="Game Type 3" onPress={()=> this.setGameMode(3)}/>
          <Button title="Game Type 4" onPress={()=> this.setGameMode(4)}/>
        <View style= {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={styles.tile}>
              {this.renderIcon(0,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={styles.tile}>
              {this.renderIcon(0,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={styles.tile}>
              {this.renderIcon(0,2)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,3)} style={styles.tile}>
              {this.renderIcon(0,3)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,4)} style={styles.tile}>
              {this.renderIcon(0,4)}
            </TouchableOpacity>
        </View>


        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={styles.tile}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={styles.tile}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={styles.tile}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,3)} style={styles.tile}>
            {this.renderIcon(1,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,4)} style={styles.tile}>
            {this.renderIcon(1,4)}
          </TouchableOpacity>
        </View>
        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={styles.tile}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={styles.tile}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={styles.tile}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,3)} style={styles.tile}>
              {this.renderIcon(2,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,4)} style={styles.tile}>
              {this.renderIcon(2,4)}
          </TouchableOpacity>
        </View>
        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(3,0)} style={styles.tile}>
            {this.renderIcon(3,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,1)} style={styles.tile}>
            {this.renderIcon(3,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,2)} style={styles.tile}>
            {this.renderIcon(3,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,3)} style={styles.tile}>
              {this.renderIcon(3,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(3,4)} style={styles.tile}>
              {this.renderIcon(3,4)}
          </TouchableOpacity>
        </View>
        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.onTilePress(4,0)} style={styles.tile}>
            {this.renderIcon(4,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(4,1)} style={styles.tile}>
            {this.renderIcon(4,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(4,2)} style={styles.tile}>
            {this.renderIcon(4,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(4,3)} style={styles.tile}>
              {this.renderIcon(4,3)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(4,4)} style={styles.tile}>
              {this.renderIcon(4,4)}
          </TouchableOpacity>
        </View>

        <Button title="New Game" onPress={()=> this.initializeGame()}/>

      </View>
      );

    }

    return <View><Button title = "Failed rendering "/></View>;

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile:{
    borderWidth: 1,
    width:80,
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileX:{
    color:'red',
    fontSize:50,

  },
  tileO:{
    color:'green',
    fontSize:50,
  },
});
