import React from 'react';
var Radium = require('radium');

var ControlContainer = React.createClass({
  render : function() {
    var styles = {
      base: {
        outline: '1px pink solid',
        padding: '20',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
        },
      red: {
        background: 'red'
        },
      rangeLayout : {
        height:'80',
      },
      numLayout : {

      }
      }
    return (
      <div style={[styles.base,this.props.rangeLayout && styles.rangeLayout]}>
        <label>{this.props.nameLabel} : {this.props.resultLabel}{this.props.unitLabel}</label>
        <input type={this.props.type} />
        <span>{this.props.outputLabel}</span>
      </div>
    )
  }
});

ControlContainer.propTypes = {
  type : React.PropTypes.string,
  nameLabel : React.PropTypes.string,
  resultLabel : React.PropTypes.number,
  unitLabel : React.PropTypes.string,
  outputLabel : React.PropTypes.string,
  layout : React.PropTypes.number

}
ControlContainer = Radium(ControlContainer)

export default ControlContainer
