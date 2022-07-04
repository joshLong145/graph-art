import React from 'react';

export class Node extends React.Component {
 
    constructor(props) {
      super(props);
    }
    
    get Cx() {
      return this.props.cx;
    }
    
    get Cy() {
      return this.props.cy;
    }
    
    generateStroke() {
      var shift = this.props.fill * (Math.floor(Math.random() * 6));
      return "#" + (0xd2 * shift).toString(16);
    }
       
 
 animateNode() {
   return(
    <circle 
      cx={this.props.cx} 
      cy={this.props.cy} 
      r="10" 
      fill={this.generateStroke()}
    >
      <animateMotion dur="5s" attributeName="cx" path="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70" repeatCount="indefinite" />
    </circle>
   );
 }
 
 stillNode() {
   return(
    <circle 
      cx={this.props.cx} 
      cy={this.props.cy} 
      r="10" 
      fill={this.generateStroke()}
    >
    </circle>
   );
 }
 render(){
   if (this.props.animate) {
     return this.animateNode();
    } else {
     return this.stillNode();
    }
 } 
}