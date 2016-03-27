import React from 'react';
import ReactDOM from 'react-dom';
// var Radium = require('radium');


var App = React.createClass({

  handleAdd : function (e){
   var newMessageVar = ReactDOM.findDOMNode(this.refs.newMessageref).value;
   var newMessagesVar = this.state.messagesstate.concat([newMessageVar]);
   this.setState({messagesstate : newMessagesVar});
   ReactDOM.findDOMNode(this.refs.newMessageref).value = ''
   },
  changeFontSize : function(e){
    var newFontSize = ReactDOM.findDOMNode(this.refs.newFontSize).value;
    this.setState({fontSize : newFontSize})
    
  },
  changeLineHeight : function(e){
    var previousLineHeight = this.state.lineHeight;
    var newLineHeight = parseInt(ReactDOM.findDOMNode(this.refs.newLineHeight).value,10);
    this.setState({lineHeight : newLineHeight});
    //height fix
    var previousHeight =  parseInt(document.getElementById("pid").style.height,10);

    var numLines = previousHeight / previousLineHeight
    this.setState({height: numLines * newLineHeight})
  },
  fixHeight : function(e){
    var height1 = document.getElementById("pid").offsetHeight;
    var newLineHeight = ReactDOM.findDOMNode(this.refs.newLineHeight).value;
    var height2 = height1 - (height1 % Number(newLineHeight));
    this.setState({height : height2});
  },
  stateLog : function(e){
    console.log(this.state);
  },
  getInitialState : function(){
    return {
      basicUnit : 24,
      fontSize: 16,
      lineHeight: 20,
      height: 'auto',
      height: 'null',
      color : 'red',
      messagesstate : [
      'content 1',
      'content 2',
      'content 3'
      ]
    }
  },
  render : function() {
    var messagesVar = this.state.messagesstate.map(
      function(message, index){
      return <SubComponent message={message} key={index}/>
    });

    var pstyle = {
      fontSize : this.state.fontSize,
      lineHeight : this.state.lineHeight + 'px',
      margin: 0,
      padding: 0,
      paddingTop: 0,
      height: this.state.height,
      width: 200,
      outline : '1px solid blue',
      }
    var pbefore = {
      content : '',
      display: 'inline-block',
      height: this.state.lineHeight,
      verticalAlign: 'baseline',
      width: 2,
      background : 'red'
    }
    var pafter = {
      content: '',
      display: 'inline-block',
      verticalAlign: this.state.lineHeight * -1,
      width: 20,
      background : 'blue'
    }
    return (
      <div className="app">
        <div className="controls">
          <div className="controlContainer">
            <input type="range" onChange={this.changeFontSize} ref="newFontSize"/>
            <label>Base Font Size : {this.state.fontSize}</label>
          </div>
          <div className="controlContainer">
            <input type="range" min="0" max="240" step="20" defaultValue="24" onChange={this.changeLineHeight} ref="newLineHeight"/>
            <label>Base Line Height : {this.state.lineHeight}</label>
          </div>
          <button onClick={this.fixHeight}>height fix</button>
          <button onClick={this.stateLog}>statelog</button>
        </div>
        <div className="content">
          <p style={pstyle} ref="pref" id="pid" >
            <span style={pbefore}></span>
            I am p at {this.state.fontSize} my line height is {this.state.lineHeight}

          </p>
          
        </div> {/* end of content */}
          <div style={{display: 'none'}}>
            <input type="text" ref="newMessageref" />
            <button onClick={this.handleAdd}>add</button>
            {messagesVar}
          </div>
      {/* end of return */}
      </div> 
    )
  }
});

var SubComponent = React.createClass({
  getDefaultProps: function () {
    return {
      message: 'how the fuck do I change state'
    }
  },
  propTypes :  {
    message : React.PropTypes.string
  },
  render : function() {
      return (
        <div>
        <div >{this.props.message}</div>
        </div>
        )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

