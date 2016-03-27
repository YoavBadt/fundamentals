import React from 'react';

var Input = React.createClass({
  render : function() {
    return (
      <div>
        <input />
      </div>
    )
  }
});

RangeInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
}

export default Controls
