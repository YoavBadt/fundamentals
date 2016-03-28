import React from 'react';

var RangeInput = React.createClass({
  render : function() {
    var style = {
      base:{
        display : 'flex',
        flexDirection : 'row',
        marginTop : '10'
      }
    }
    return (
      <div style={style.base}>
        <label>{this.props.label}</label>
        <input
              type="range"
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              valueLink={this.props.valueLink}
              />
        <label>{this.props.valueLink.value}</label>
      </div>
    )
  }
});

RangeInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string
}

export default RangeInput
