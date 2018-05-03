import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
        <p className="App-intro">
          Simple Tic Tac Toe Game in React
        </p>
        <Game />
      </div>
    );
  }
}

export default App;