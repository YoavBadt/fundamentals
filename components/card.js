import React from 'react';



var Card = React.createClass({
  width : function (param){
    var unit = this.props.state.baseUnit
    var column = this.props.state.columnWidth * unit
    var gutter = this.props.state.gutterWidth * unit
    return ((param*column)+((param-1)*gutter));
  },
  height : function (param){
    var unit = this.props.state.baseUnit
    var baseline = this.props.state.baseLineHeight * unit
    return baseline*param
  },
  render: function (){
    var column = this.props.state.columnWidth
    var gutter = this.props.state.gutterWidth
    var unit = this.props.state.baseUnit
    var colnum = this.props.state.columnNumber
    var stage = (colnum * (column*unit)) + ((colnum-1)*(gutter*unit))
    console.log(stage)
    var zero = (1920 - stage) / 2
    var style = {
      container : {
        position: 'absolute',
        top : this.height(5),
        left : (zero + (stage/2)) - (this.width(4)/2),
        width : this.width(4),
        height: this.height(22),
        boxSizing: 'border-box',
        padding: unit*1,
        borderRadius: 4,
        outline: '1px solid grey',
        // margin: '0 auto',
        background: 'white'
        },
        img : {
          position: 'absolute',
          top : unit*1,
          left : unit*1,
          width: (this.width(4))-(unit*2),
          height: this.height(14),
          objectFit: 'fill'
        }
    }
    return(
      <div style={style.container}>
      <img style={style.img} src="http://lattaland.com/wp-content/uploads/2013/06/clown-jungle.jpg" />
      </div>
    )
}
});

export default Card

