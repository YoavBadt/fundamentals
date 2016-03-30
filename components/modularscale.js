import React from 'react';
import RangeInput from './rangeinput'


var ModularScale = React.createClass({

render: function(){
    var baseFontSize = this.props.state.baseFontSize;
    var modularScale = this.props.state.scaleFactor;
    var style = {
      container : {
        borderBottom : '1px solid pink',
        padding : 20,
        boxSizing : 'border-box',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 100
      },
      title :{
        // border: '1px solid black',
        fontWeight: 'bold',
        height: 20,
        lineHeight: 20+'px'
      }
    }
    return (
      <div style={style.container}>
        <label style={style.title}>{this.props.name}</label>
        <RangeInput step={0.001} min={1.001} max={1.6} valueLink={this.props.valueLink}/>
      </div>
      )
  }
});



export default ModularScale
