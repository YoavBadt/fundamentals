import React from 'react';
import NumInput from './numinput'

var Column = React.createClass({
  render: function(){
    var baseUnit = Number(this.props.state.baseUnit);
    var colpx = baseUnit * this.props.valueLink.value
    var gutterpx = baseUnit * this.props.valueLink2.value
    var stage = (colpx * this.props.state.columnNumber) + (gutterpx * (this.props.state.columnNumber-1))
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
    return(
    <div style={style.container}>
        <label style={style.title}>{this.props.name}</label>
        <div style={style.section}>
          <NumInput step="0.5" min="0.5" max="10" valueLink={this.props.valueLink} label="Column"/>
          <NumInput step="0.5" min="0.5" max="4" valueLink={this.props.valueLink2} label="Gutter"/>
          <NumInput step="1" min="1" max="18" valueLink={this.props.valueLink3} label="Number"/>
          <NumInput step="1" min="0" max="1" valueLink={this.props.valueLink5} label="view"/>
        </div>
        <small style={style.small}>column width: {colpx}px</small>
        <small style={style.small}>gutter width: {gutterpx}px</small>
        <small style={style.small}>stage width: {stage}px</small>
        <small style={style.small}>screen size: {this.props.state.windowWidth}px</small>

      </div>
    )
  }
});

export default Column
