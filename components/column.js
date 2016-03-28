import React from 'react';
import NumInput from './numinput'

var Column = React.createClass({
  render: function(){
    var baseUnit = Number(this.props.state.baseUnit);
    var colpx = baseUnit * this.props.valueLink.value
    var gutterpx = baseUnit * this.props.valueLink2.value
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
          <NumInput step="0.5" min="1" max="100" valueLink={this.props.valueLink3} label="Row"/>
          <NumInput step="0.5" min="0.5" max="4" valueLink={this.props.valueLink4} label="Row2"/>
          <NumInput step="1" min="0" max="1" valueLink={this.props.valueLink5} label="Show"/>
        </div>
        <small style={style.small}>column width in pixels :{colpx}</small>
        <small style={style.small}>gutter width in pixels :{gutterpx}</small>
        
      </div>
    )
  }
});

export default Column
