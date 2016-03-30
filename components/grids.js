import React from 'react';

import BaseGridComponent from './grids/BaseGridComponent'
import ColumnComponent from './grids/ColumnComponent'
import BaseLineComponent from './grids/BaseLineComponent'

var Grids = React.createClass({
  render : function(){

    var style = {
    // position: 'absolute',
    zIndex: -1,
    // top:0,
    // left:0,
    width: this.props.state.fakeWindow -600,
    background: 'white',
    outline : '1px solid grey'
  }
    return(
      <div style={style}>
        <BaseGridComponent state={this.props.state} />
        <ColumnComponent state= {this.props.state} />
        <BaseLineComponent state= {this.props.state} />
      </div>
    )
  }
})

export default Grids
