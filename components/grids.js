import React from 'react';

import BaseGridComponent from './grids/BaseGridComponent'
import ColumnComponent from './grids/ColumnComponent'
import BaseLineComponent from './grids/BaseLineComponent'

var Grids = React.createClass({
  render : function(){
    return(
      <div>
        <BaseGridComponent state={this.props.state} />
        <ColumnComponent state= {this.props.state} />
        <BaseLineComponent state= {this.props.state} />
      </div>
    )
  }
})

export default Grids
