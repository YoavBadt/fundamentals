import React from 'react';
import NumInput from './numinput'
import RangeInput from './rangeinput'

var BaseUnit = React.createClass({

  render: function(){
    var baseUnit = Number(this.props.state.baseUnit);
    var ColumnWidth = Number(this.props.state.columnWidth);
    var style = {
      container : {
        borderBottom : '1px solid pink',
        padding : 20,
        boxSizing : 'border-box',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 200
      },
      title :{
        height: 20,
        fontWeight: 'bold',
        height: 30
      },
      section:{
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: 200,
        marginBottom: 10,
      },
      section2:{
        display : 'flex',
        flexDirection: 'row',
        lineHeight: 20+'px'
      },
      inputsmall : {
        width: 20,
        border: 'none',
        background: 'pink',
        color : 'white'
      }
    }
    return (
      <div style={style.container}>
        <label style={style.title}>{this.props.name}</label>
        <div style={style.section}>
          <NumInput step={2} valueLink={this.props.valueLink} label="pixels"/>
          <NumInput step={1} min={1} max={4} valueLink={this.props.valueLink2} label="div"/>
          <NumInput step={0.5} min={0} max={0.5} valueLink={this.props.valueLink3} label="show"/>
        </div>
        <RangeInput step={1} min={0} max={baseUnit} valueLink={this.props.valueLink4} label="offset"/>
      </div>
      )
  }
});

export default BaseUnit
