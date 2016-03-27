import React from 'react';
import ReactDOM from 'react-dom';

var Controls = React.createClass({
  render : function() {
    return (
      <div className="controls">
        <RangeInput />
        <RangeInput />
        <RangeInput />
        <RangeInput />
        <RangeInput />
      </div>
    )
  }
});

export default Controls
