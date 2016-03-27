import React from 'react';
import Styles from '../inlinestyles/inlinestyles';
import NumInput from './numinput'

var Controler = React.createClass({

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
        height: 140
      },
      title :{
        height: 20,
        fontWeight: 'bold',
        height: 30
      },
      section:{
        display : 'flex',
        flexDirection: 'row',
        lineHeight: 25+'px',
        height: 30,
        marginBottom: 10,
      },
      section2:{
        display : 'flex',
        flexDirection: 'row',
        lineHeight: 20+'px'
      },
      input: {
        width: 40,
        height: 20,
        color: 'red',
        fontSize: 15,
        border: 'pink 1px solid',
        borderRadius: 2,
        lineHeight: 20+'px',
        padding: 0,
        margin: 0
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
        <label style={style.title}>Column width in Units</label>
        <div style={style.section}>
          <NumInput step="0.5" valueLink={this.props.valueLink} step="0.5"/>
          <small>({baseUnit*ColumnWidth} Px)</small>
        </div>
        <div style={style.section2}>
          <small>show/hide</small>
          <input type="number" step="1" min="0" max="1" valueLink={this.props.valueLink2} style={style.inputsmall}/>
        </div>
      </div>
      )
  }
});

export default Controler
