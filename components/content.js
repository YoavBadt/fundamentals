import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
  render(){
    var ContentStyle = {
        color: 'blue',
        fontFamily: 'avenir, Sans-Serif'
        // backgroundImage: 'url(' + 'http://basehold.it/i/' + '24' + ')'
        // backgroundImage: 'url(' + 'http://basehold.it/i/' + '{Controls.state.BaseLineHeight}' + ')'
  }
    return (
      <div className="content" style={ContentStyle}>
        <h1>I am h1</h1>
        <h2>I am h2</h2>
        <h3>I am h1</h3>
        <h4>I am h1</h4>
        <h5>I am h1</h5>
        <h6>I am h1</h6>
        <p>I am body with some text</p>
      </div>
      );
  }
}

class Heading1 extends React.Component {
  render(){
    var divStyle = {
    fontSize: 10
   }
    return (
      <div>
      <h1>Heading1</h1>
      </div>
    );
  }
}


Heading1.propTypes = {
  myfontSize: React.PropTypes.number,
  mylineHeight: React.PropTypes.number
}

Heading1.defaultProps = {
  myfontSize: 14,
  mylineHeight: 20
}

export default Content
