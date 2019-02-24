import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.css';
import toastr from 'toastr';
import * as types from '../actions/actionTypes';
import {initialState} from '../reducers/initialState';
import GameSquare from '../components/GameSquare';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.mapGameSquares = this.mapGameSquares.bind(this);
  }
  checkWin(block){
    const wins = [
      ['topLeft', 'topCenter', 'topRight'],
      ['topLeft', 'middleCenter', 'bottomRight'],
      ['topLeft', 'middleLeft', 'bottomLeft'],
      ['topCenter', 'middleCenter', 'bottomCenter'],
      ['topRight', 'middleRight',  'bottomRight'],
      ['middleLeft', 'middleCenter',  'middleRight'],
      ['bottomLeft', 'bottomCenter',  'bottomRight'],
      ['topRight', 'middleCenter',  'bottomLeft']
    ];
    
    let game = {...this.state.squares};
    game[block] = this.state.turn;
    for (let i=0; i< wins.length; i++) {
      let yes = 0;
        for(let n=0; n<wins[i].length; n++) {
          if (game[wins[i][n]] !== '' && game[wins[i][n]] === game[wins[i][n-1]]){
            yes++;
            if(yes===2) return wins[i];
          } 
        }
    }
  }
  handleClick(block) {
    if(!this.state.status.gameOver) {
      let winner= false;
      let winningSquares = this.checkWin(block);
      let gameOver = false;
      if(winningSquares){

        winner = this.state.turn;
        gameOver = true;
        toastr.success(`${winner} wins!`);
      } else if (this.state.turnCount === 8){
        gameOver = true;
        toastr.error('no more possible plays');
      };
      if(this.state.squares[block] === '') {
        this.setState((prevState) => {
          return {
            squares: Object.assign({}, prevState.squares, {[block]: prevState.turn}), 
            status: Object.assign({}, {gameOver, winner, winningSquares}),
            turn: prevState.turn === 'X' ? 'O' : 'X',
            turnCount: prevState.turnCount+1
          }
        });
      
      } else {
        toastr.error('space already taken');
      }
    } else  {
      toastr.error('Game over');
    }
  }
  reset() {
    this.setState(
      {...initialState}
    );
  }
  winnerToBgColor(block) {
    if(!block && this.state.status.gameOver && this.state.status.winner === false) {
      return 'red';
    } else if(this.state.status.winningSquares && this.state.status.winningSquares.includes(block)){ 
      return 'green';
    } else {
      return '';
    }
  }
  mapGameSquares() {
    let GameSquares = [];
    for(var prop in this.state.squares) {
      if(this.state.squares.hasOwnProperty(prop)){
        GameSquares.push(<GameSquare key={prop} square={prop} onClick={this.handleClick.bind(this, prop) } bgColor={this.winnerToBgColor(prop)} value={this.state.squares[prop]} />
        )
      } 
    }
    return GameSquares;
  }
  render() {
    let Winner = this.state.status.winner ? <p>The winner is {this.state.status.winner}</p> : this.state.turnCount === 9 ? <p>No winner - reset to try again</p> : '';
    let NextTurn = this.state.status.winner !== false || this.state.turnCount ===9 ? <p>Game Over</p> : <p>Next Turn: {this.state.turn}</p>
    let GameSquares = this.mapGameSquares();
    return (
      <div className="app" style={{backgroundColor:this.winnerToBgColor()}}>
      <div className="game">
      {GameSquares}
        
      </div>
      {Winner}
      {NextTurn}
      <input type="button" value="Reset" onClick={this.reset} />
      </div>
    );
  }
}
App.propTypes = {
  //prop1: PropTypes.string.isRequired,
  //prop2: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    //prop1: state.prop1,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    /*prop2: () => {
      dispatch( {type: types.ACTION_TYPE})
    }*/
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);