import React from 'react';
import ReactDOM from 'react-dom';
// import addons from 'react';
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var App = React.createClass({
  mixins : [LinkedStateMixin],
  getInitialState: function(){
    return{
      payment: 0,
      payment2: 0
    };
  },
  render: function(){
    var total = parseInt(this.state.payment, 10) + parseInt(this.state.payment2, 10)
    return(
        <div>
        <Payment valueLink={this.linkState('payment')}/>
        <Payment valueLink={this.linkState('payment2')}/>
        {total}
        </div>
      )
  }

});

var Payment = React.createClass({
  render: function(){
    return (
      <div>
          <input type="text" valueLink={this.props.valueLink}/>
      </div>
      )
  }

});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

