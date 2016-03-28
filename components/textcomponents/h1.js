import React from 'react';

var H1 = React.createClass({
render: function (){
  var fontSize = this.props.fontSize
  var lineheight = this.props.lineheight
  var baseline = this.props.baseline
  var style = {
    main : {
    fontSize : fontSize,
    lineHeight : lineheight + 'px',
    outline: '1px solid pink',
    margin: 0
    },
    before : {
      content: '',
      height : lineheight,
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    }
  }
  return(
    <h1 style={style.main}>
      <span style={style.before}></span>
      {this.props.text}<br/> text
      <span style={style.after}></span>
    </h1>
    )
}
});

export default H1

