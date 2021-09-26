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
    this.state.nodes = [];
    this.state.verticies = [];
    var seed = 1500;
    for (var i = 0; i < 30; i ++) {
        const x =  Math.floor(Math.random() * seed) + (window.innerWidth / 2);
        const y = Math.floor(Math.random() * seed) + (window.innerHeight /2);

        this.state.coords.push([
          x,
          y,
          x < (1500 / 2) || y < (1500 / 2) ? true: false
        ]);

        this.state.nodes.push(
          <Node 
            fill={i} 
            cx={this.state.coords[i][0].toString()} 
            cy={this.state.coords[i][1].toString()}
            animate={this.state.coords[i][2]}
          />);
        
      for (var j = 0; j < this.state.coords.length; j++) {
        this.state.verticies.push(
          <Line
            stroke={this.state.coords.length}
            x1={this.state.coords[i][0].toString()} 
            y1={this.state.coords[i][1].toString()} 
            x2={this.state.coords[j][0].toString()} 
            y2={this.state.coords[j][1].toString()}
            animate1={this.state.coords[i][2]}
            animate2={this.state.coords[j][2]}
          />);

          //this.state.coords[j][2] = (!this.state.coords[j][2] && this.state.coords[j][2]) ? true : false; 
      }
    }
  }
  
  	
  render() {
    this.generate();
    const viewBox = `0 0  ${window.screen.height * 4} ${window.screen.height * 4}`;
    console.log(window.screen.height, window.screen.width);
    return (
      <div style={{backgroundColor: '#957DAD',  backgroundImage: `linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)`}} className="App">
        <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
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