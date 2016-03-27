import React from 'react';
import ReactDOM from 'react-dom';

var NumInput = React.createClass({
getInitialState : function(){
    return {
    value : this.props.value
    }
},
plus : function (e){
  console.log(e.target.value)
},
minus : function (e){
  console.log(e.target.value)
},
change : function(e){
  console.log("change")
},
render : function(){
  var style = {
    container : {
      width: 60,
      border: 'red 1px solid',
      height: 30,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 2,
      color: 'red',
    },
    input : {
      border: 'none',
      height: 30,
      width: 45,
      color: 'red',
      fontWeight : 'bold',
      fontSize: 15,
      lineHeight: 30+'px',
      textAlign: 'center',
      padding: 0,
      margin: 0
    },
    buttoncontainer:{
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      border: 'none',
      outline: '1px solid red',
      color: 'red',
      fontWeight: 'bold',
      background: 'rgba(255,0,0,0.1)',
      width: 15,
      height: 15,
      padding: 0,
      margin: 0,
      textAlign: 'center',
      lineHeight: 15+'px',
      fontSize : 10
    }
  }
  return(
    <div style={style.container}>
      <input type="number" style={style.input} valueLink={this.props.valueLink} step={this.props.step} ref="input"/>
      <div style={style.buttoncontainer}>
        <button type="button" style={style.button} onClick={this.plus} >+</button>
        <button type="button" style={style.button} onClick={this.minus}>-</button>
      </div>
    </div>
  )
}

});

var Plus = React.createClass({

render : function (){
  var style = {
  button: {
      border: 'none',
      outline: '1px solid red',
      color: 'red',
      fontWeight: 'bold',
      background: 'rgba(255,0,0,1)',
      width: 30,
      height: 15,
      padding: 0,
      margin: 0,
      textAlign: 'center',
      lineHeight: 15+'px',
      fontSize : 10
    }
  }
  return(
    <button type="button" style={style.button} onClick={this.plus} >+</button>
    )
}

});

export default NumInput
