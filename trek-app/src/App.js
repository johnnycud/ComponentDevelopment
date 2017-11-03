import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';


class App extends Component {
  render() {

    var showlist = this.props.treckies.map(function(fWork, index){
      return(
          <li key={index}>
              <a href={fWork.url}>
                  {fWork.name} </a>
          </li>);
  
  });
  return (
      <div>
          <h1>{this.props.type}</h1>
          <ul>
              {showlist}
          </ul>
      </div>
  );
return (
      <div className="Trek">
        <header className="Trek-header">
          <img src={logo} className="Trek-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="Trek-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
