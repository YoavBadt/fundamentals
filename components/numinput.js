import React from 'react';

var NumInput = React.createClass({
render : function(){
  var style = {
    main: {
    // outline: '1px solid red',
    height: 60,
    
    display : 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    },
    small : {
    // outline: '1px solid red',
    margin:0,
    padding:0,
    lineHeight: 20+'px',
    height: 20
    }
  }
  return(
    <div style={style.main}>
      <small style={style.small}>{this.props.label}</small>
      <div className="numinput">
       <input type="number" valueLink={this.props.valueLink} step={this.props.step} min={this.props.min}
        max={this.props.max}/>
      </div>
    </div>
  )
}

});

export default NumInput
