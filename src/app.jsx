import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import {Node} from './components/node';
import {Line} from './components/new_file';
import fibGen from './helpers/lagged_fib';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {coords: [], nodes: [], verticies: []};
    //setInterval(() => {
      //this.forceUpdate();
    //}, 1000);
  }
  
  tribonacci(signature, n) {
    var trib = signature;
    for (i = 3; i < n; i++) {
      console.log(n)
      trib.push(trib[i-1] + trib[i-2] + trib[i-3]);
    }
    return trib[n - 1];
  }
  
  generate() {
    delete this.state.coords;
    this.state.coords = [];
    this.state.coords = [];
    this.state.nodes = [];
    this.state.verticies = [];
    var seed = 1500;
    console.log(seed);
    console.log(seed);
    for (var i = 0; i < 30; i ++) {
        this.state.coords.push([
          Math.floor(Math.random() * seed), 
          Math.floor(Math.random() * seed)
        ]);
        this.state.nodes.push(
          <Node fill={i} 
            cx={this.state.coords[i][0].toString()} 
            cy={this.state.coords[i][1].toString()} 
          />);
        
      for (var j = 0; j < this.state.coords.length; j++) {
        this.state.verticies.push(
          <Line
            stroke={this.state.coords.length}
            x1={this.state.coords[i][0].toString()} 
            y1={this.state.coords[i][1].toString()} 
            x2={this.state.coords[j][0].toString()} 
            y2={this.state.coords[j][1].toString()}
          />);
      }
      console.log(this.state.coords);
    }
  }
  
  	
  render() {
    this.generate();
    return (
      <div style={{backgroundColor: '#957DAD'}} className="App">
        <svg viewBox="0 0 1500 1500" xmlns="http://www.w3.org/2000/svg">
            {this.state.verticies}
            {this.state.nodes}
          </svg>
    </div>
    )
  }
}

//setInterval(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
//}, 1000);