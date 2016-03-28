import React from 'react';

var Infoline = React.createClass({
render : function(){
  var style = {
    
  }
  return(
    <div className="numinput" >
      <input type="number" valueLink={this.props.valueLink} step={this.props.step} ref="input"/>
    </div>
  )
}

});

export default NumInput
