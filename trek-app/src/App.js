import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';


class StarTrek extends React.Component{
  render(){
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

  }
}

export default StarTrek;
