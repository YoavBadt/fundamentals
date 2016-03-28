import React from 'react';
import H1 from './textcomponents/h1'


var Card = React.createClass({
render: function (){
  var fontSize = this.props.state.typography.h1.fontSize
  // console.log(fontSize)
  var lineHeight = this.props.state.typography.h1.lineHeight
  var baseLine = this.props.state.baseLineHeight * this.props.state.baseUnit
  var text = {
    h1 : "I am an h1"
  }
  var style = {
    marginLeft : 670
  }
  return(
    <div style={style}>
    <H1 text={text.h1} fontSize={fontSize} lineHeight={lineHeight} baseline={baseLine}/>
    </div>
    )
}
});

export default Card

