import React from 'react';
import Styles from '../inlinestyles/inlinestyles';
import NumInput from './numinput'

var BaseLine = React.createClass({

  render: function(){
    var baseUnit = Number(this.props.state.baseUnit);
    var baselineunit = Number(this.props.state.baseLineHeight);
    var baselinepx = baselineunit * baseUnit ;
    var style = {
      container : {
        borderBottom : '1px solid pink',
        padding : 20,
        boxSizing : 'border-box',
        display : 'flex',
        flexDirection: 'column',
        
      },
      title :{
        // outline: '1px solid red',
        fontWeight: 'bold',
        height: 20,
        margin: 0,
        padding: 0
      },
      section:{
        // outline: '1px solid red',
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        margin: 0,
        padding: 0,
        width: 200,
        marginBottom: 10,
      },
      small : {
        // outline: '1px solid red',
        margin:0,
        height: 20
      }
    }
    return (
      <div style={style.container}>
        <label style={style.title}>{this.props.name}</label>
        <div style={style.section}>
          <NumInput step="0.5" min="0.5" max="10" valueLink={this.props.valueLink} label="units"/>
          <NumInput step="1" min="1" max="4" valueLink={this.props.valueLink2} label="div"/>
          <NumInput step="1" min="0" max="1" valueLink={this.props.valueLink3} label="show"/>
        </div>
        <small style={style.small}>baseline height in pixels : {baselinepx}</small>
      </div>
      )
  }
});

export default BaseLine
