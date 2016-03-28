import React from 'react';

import BaseUnit from './baseUnit'

var Controls = React.createClass({
  render : function() {
    return (
      <div className="controls">
      <input type="text" valueLink={this.props.valueLink.gridColor} />

      </div>
    )
  }
});

export default Controls
