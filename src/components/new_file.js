import React from 'react';


export class Line extends React.Component {

    generateStroke() {
      return "#" + (0xD2 * (this.props.stroke * 10)).toString(16);
    }
    animatedLine() {
      return(
        <line 
          x1={this.props.x1} 
          y1={this.props.y1} 
          x2={this.props.x2} 
          y2={this.props.y2} 
          stroke={this.generateStroke()}
          stroke-width="5.7px"
        >

          <animateMotion dur="5s" attributeName="x1" path="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70" repeatCount="indefinite" />
         </line>
      );
    }
    
    stillLine() {
     return(
      <line 
          x1={this.props.x1} 
          y1={this.props.y1} 
          x2={this.props.x2} 
          y2={this.props.y2} 
          stroke={this.generateStroke()}
          stroke-width="5.7px"
        >
      </line>
      );
    }
    render() {
      if (this.props.x1 < (1500 / 2) || this.props.y1 < (1500 /2)) {
        return this.animatedLine();
      } else {
        return this.stillLine();
      }
    }     
}