import React, { Component } from 'react';

import './App.css';

import Conversor from "./components/Conversor"

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1 className="titulo">Conversor de Moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        </div>
      </div>
    );
  }
}

export default App;
